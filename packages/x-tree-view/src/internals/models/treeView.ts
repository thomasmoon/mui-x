import type { TreeViewAnyPluginSignature } from './plugin';
import type { MergePluginsProperty } from './helpers';

export interface TreeViewNode {
  id: string;
  idAttribute: string | undefined;
  index: number;
  parentId: string | null;
  expandable: boolean;
  disabled: boolean;
  /**
   * Only defined for `RichTreeView`.
   */
  label?: string;
}

export interface TreeViewItemRange {
  start?: string | null;
  end?: string | null;
  next?: string | null;
  current?: string;
}

export interface TreeViewModel<TValue> {
  name: string;
  value: TValue;
  setControlledValue: (value: TValue | ((prevValue: TValue) => TValue)) => void;
}

export type TreeViewInstance<TSignatures extends readonly TreeViewAnyPluginSignature[]> =
  MergePluginsProperty<TSignatures, 'instance'>;
