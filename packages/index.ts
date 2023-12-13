export type {
  TableColumnFilterPlacement,
  TableColumnSortOrders,
  TableColumnSortable,
  TableColumnRenderer,
  TableColumnScope,
  TableColumnFixed,
  TableColumnType,
  PaginationProps,
  PureTableProps,
  AdaptiveConfig,
  LoadingConfig,
  TableColumns,
  TableColumn,
  TableProps,
  Layout,
  Effect,
  Align,
  Size
} from "./types";

import type { App, Ref } from "vue";
import type { ConfigProviderContext } from "element-plus";
import Table from "./components/table";
import { provideGlobalConfig } from "element-plus";

export const PureTable = Object.assign(Table, {
  install: function (
    app: App,
    options?: ConfigProviderContext | Ref<ConfigProviderContext>
  ) {
    if (options) provideGlobalConfig(options, app, false);
    app.component(Table.name, Table);
  }
});

export default PureTable;
