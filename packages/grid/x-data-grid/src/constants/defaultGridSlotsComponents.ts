import { GridSlotsComponent } from '../models';
import {
  GridSkeletonCell,
  GridColumnsPanel,
  GridFilterPanel,
  GridFooter,
  GridLoadingOverlay,
  GridNoRowsOverlay,
  GridPagination,
  GridPanel,
  GridRow,
  GridColumnHeaderFilterIconButton,
  GridRowCount,
} from '../components';
import { GridCell } from '../components/cell/GridCell';
import { GridColumnHeaders } from '../components/GridColumnHeaders';
import { GridColumnMenu } from '../components/menu/columnMenu/GridColumnMenu';
import { GridDetailPanels } from '../components/GridDetailPanels';
import { GridPinnedRows } from '../components/GridPinnedRows';
import { GridNoResultsOverlay } from '../components/GridNoResultsOverlay';
import materialSlots from '../material';

// TODO: camelCase these key. It's a private helper now.
// Remove then need to call `uncapitalizeObjectKeys`.
export const DATA_GRID_DEFAULT_SLOTS_COMPONENTS: GridSlotsComponent = {
  ...materialSlots,
  cell: GridCell,
  skeletonCell: GridSkeletonCell,
  columnHeaderFilterIconButton: GridColumnHeaderFilterIconButton,
  columnMenu: GridColumnMenu,
  columnHeaders: GridColumnHeaders,
  detailPanels: GridDetailPanels,
  footer: GridFooter,
  footerRowCount: GridRowCount,
  toolbar: null,
  pinnedRows: GridPinnedRows,
  loadingOverlay: GridLoadingOverlay,
  noResultsOverlay: GridNoResultsOverlay,
  noRowsOverlay: GridNoRowsOverlay,
  pagination: GridPagination,
  filterPanel: GridFilterPanel,
  columnsPanel: GridColumnsPanel,
  panel: GridPanel,
  row: GridRow,
};
