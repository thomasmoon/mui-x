import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docsx/data/tree-view/simple-tree-view/customization/customization.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
