import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { unstable_composeClasses as composeClasses } from '@mui/utils';
import { gridClasses, getDataGridUtilityClass } from '../../constants/gridClasses';

const useUtilityClasses = () => {
  const slots = {
    root: ['bottomContainer'],
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};

const Element = styled('div')({
  position: 'sticky',
  zIndex: 2,
  bottom: 'calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))',
});

export function GridBottomContainer(props: React.HTMLAttributes<HTMLDivElement>) {
  const classes = useUtilityClasses();

  return (
    <Element
      {...props}
      className={clsx(classes.root, props.className, gridClasses['container--bottom'])}
      role="presentation"
    />
  );
}
