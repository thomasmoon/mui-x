// @ts-check
const path = require('path');
// @ts-ignore
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const withTM = require('next-transpile-modules')(['@mui/monorepo']);
// @ts-expect-error This expected error should be gone once we update the monorepo
const withDocsInfra = require('@mui/monorepo/docs/nextConfigDocsInfra');
const pkg = require('../package.json');
const dataGridPkg = require('../packages/grid/x-data-grid/package.json');
const datePickersPkg = require('../packages/x-date-pickers/package.json');
const chartsPkg = require('../packages/x-charts/package.json');
const treeViewPkg = require('../packages/x-tree-view/package.json');
const { findPages } = require('./src/modules/utils/find');
const { LANGUAGES, LANGUAGES_SSR } = require('./config');

const workspaceRoot = path.join(__dirname, '../');

module.exports = withDocsInfra({
  // Avoid conflicts with the other Next.js apps hosted under https://mui.com/
  assetPrefix: process.env.DEPLOY_ENV === 'development' ? undefined : '/x',
  env: {
    // docs-infra
    LIB_VERSION: pkg.version,
    SOURCE_CODE_REPO: 'https://github.com/mui/mui-x',
    SOURCE_GITHUB_BRANCH: 'next', // #default-branch-switch
    GITHUB_TEMPLATE_DOCS_FEEDBACK: '6.docs-feedback.yml',
    // MUI X related
    DATA_GRID_VERSION: dataGridPkg.version,
    DATE_PICKERS_VERSION: datePickersPkg.version,
    CHARTS_VERSION: chartsPkg.version,
    TREE_VIEW_VERSION: treeViewPkg.version,
  },
  // @ts-ignore
  webpack: (config, options) => {
    const plugins = config.plugins.slice();

    if (process.env.DOCS_STATS_ENABLED) {
      plugins.push(
        // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          generateStatsFile: true,
          analyzerPort: options.isServer ? 8888 : 8889,
          // Will be available at `.next/stats.json`
          statsFilename: 'stats.json',
        }),
      );
    }

    const includesMonorepo = [/(@mui[\\/]monorepo)$/, /(@mui[\\/]monorepo)[\\/](?!.*node_modules)/];

    return {
      ...config,
      plugins,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          docs: path.resolve(__dirname, '../node_modules/@mui/monorepo/docs'),
          docsx: path.resolve(__dirname, '../docs'),
        },
      },
      module: {
        ...config.module,
        rules: config.module.rules.concat([
          // used in some /getting-started/templates
          {
            test: /\.md$/,
            oneOf: [
              {
                resourceQuery: /@mui\/markdown/,
                use: [
                  options.defaultLoaders.babel,
                  {
                    loader: require.resolve('@mui/monorepo/packages/markdown/loader'),
                    options: {
                      env: {
                        SOURCE_CODE_REPO: options.config.env.SOURCE_CODE_REPO,
                        LIB_VERSION: options.config.env.LIB_VERSION,
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            test: /\.+(js|jsx|mjs|ts|tsx)$/,
            include: includesMonorepo,
            use: options.defaultLoaders.babel,
          },
          {
            test: /\.(js|mjs|ts|tsx)$/,
            include: [workspaceRoot],
            exclude: /node_modules/,
            use: options.defaultLoaders.babel,
          },
          {
            test: /\.(ts|tsx)$/,
            loader: 'string-replace-loader',
            options: {
              search: '__RELEASE_INFO__',
              replace: 'MTU5NjMxOTIwMDAwMA==', // 2020-08-02
            },
          },
        ]),
      },
    };
  },
  distDir: 'export',
  // Next.js provides a `defaultPathMap` argument, we could simplify the logic.
  // However, we don't in order to prevent any regression in the `findPages()` method.
  exportPathMap: () => {
    const pages = findPages();
    const map = {};

    // @ts-ignore
    function traverse(pages2, userLanguage) {
      const prefix = userLanguage === 'en' ? '' : `/${userLanguage}`;

      // @ts-ignore
      pages2.forEach((page) => {
        // The experiments pages are only meant for experiments, they shouldn't leak to production.
        if (page.pathname.includes('/experiments/') && process.env.DEPLOY_ENV === 'production') {
          return;
        }

        if (!page.children) {
          // @ts-ignore
          map[`${prefix}${page.pathname.replace(/^\/api-docs\/(.*)/, '/api/$1')}`] = {
            page: page.pathname,
            query: {
              userLanguage,
            },
          };
          return;
        }

        traverse(page.children, userLanguage);
      });
    }

    // We want to speed-up the build of pull requests.
    if (process.env.PULL_REQUEST === 'true') {
      // eslint-disable-next-line no-console
      console.log('Considering only English for SSR');
      traverse(pages, 'en');
    } else {
      // eslint-disable-next-line no-console
      console.log('Considering various locales for SSR');
      LANGUAGES_SSR.forEach((userLanguage) => {
        traverse(pages, userLanguage);
      });
    }

    return map;
  },
  // Used to signal we run yarn build
  ...(process.env.NODE_ENV === 'production'
    ? {
        output: 'export',
      }
    : {
        rewrites: async () => {
          return [
            { source: `/:lang(${LANGUAGES.join('|')})?/:rest*`, destination: '/:rest*' },
            { source: '/api/:rest*', destination: '/api-docs/:rest*' },
          ];
        },
        // redirects only take effect in the development, not production (because of `next export`).
        redirects: async () => [
          {
            source: '/',
            destination: '/x/introduction/',
            permanent: false,
          },
        ],
      }),
});
