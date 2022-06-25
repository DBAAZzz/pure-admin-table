import type { TableProps } from "element-plus/es/components/table/src/table/defaults";
import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";

export type Align = "left" | "center" | "right";

/**
 * @see {@link https://element-plus.org/en-US/component/pagination.html#attributes}
 */
export type PaginationProps = {
  /** 是否使用小型分页样式 默认值：false */
  small?: boolean;
  /** 是否为分页按钮添加背景色 默认值：false */
  background?: boolean;
  /** 每页显示条目个数，支持 v-model 双向绑定 默认值：5 必传 */
  pageSize: number;
  /** 每页显示条目数的初始值 */
  defaultPageSize?: number;
  /** 总条目数 默认值：0 必传 */
  total: number;
  /** 总页数 total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 */
  pageCount?: number;
  /** 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠 */
  pagerCount?: number;
  /** 当前页数，支持 v-model 双向绑定 必传 */
  currentPage: number;
  /** 当前页数的初始值 */
  defaultCurrentPage?: number;
  /** 组件布局，子组件名用逗号分隔 默认值："total, sizes, prev, pager, next, jumper" */
  layout?: string;
  /** 每页显示个数选择器的选项设置 默认值：[5, 10, 15, 20] */
  pageSizes?: number[];
  /** 每页显示个数选择器的下拉框类名 */
  popperClass?: string;
  /** 替代图标显示的上一页文字 */
  prevText?: string;
  /** 替代图标显示的下一页文字 */
  nextText?: string;
  /** 是否禁用分页 默认值：false */
  disabled?: boolean;
  /** 只有一页时是否隐藏 */
  hideOnSinglePage?: boolean;
  /** 分页的对齐方式 默认值：right */
  align?: Align;
};

/**
 * @see {@link https://element-plus.org/en-US/component/table.html#table-column-attributes}
 */
export interface TableColumns extends TableColumnCtx<any> {
  /** 是否隐藏 必须是个函数 */
  hide?: CallableFunction;
  /** 自定义插槽 */
  slot?: string;
  /** 自定义单元格渲染器 */
  cellRenderer?: import("vue").FunctionalComponent | Function;
  /** 自定义头部渲染器 */
  headerRenderer?: import("vue").FunctionalComponent | Function;
}

export interface PureTableProps extends TableProps<any> {
  /** Table-column配置 */
  columns: Array<TableColumns>;
  /** 对齐方式 默认值：left */
  align?: Align;
  /** 表头对齐方式， 若不设置该项，则使用表格的对齐方式 */
  headerAlign?: Align;
  /** 当内容过长被隐藏时显示 tooltip 默认值：false */
  showOverflowTooltip?: boolean;
  /** 分页相关配置 */
  pagination?: PaginationProps;
}

export interface TableColumnScope {
  row?: any;
  column: TableColumnCtx<any>;
  $index: number;
}
