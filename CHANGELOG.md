# Changelog

## 2.3.3 (2023-08-05)

### 🐞 Bug fixes

- 修复表格 `loadingConfig` 属性中 `background` 配置无效的问题

## 2.3.2 (2023-06-09)

### 🍏 Perf

- 优化 `setAdaptive` 和 `setHeaderSticky` 方法，确保在 `DOM` 更新后执行

## 2.3.1 (2023-06-09)

### 🎫 types

- 导出 `AdaptiveConfig` 类型

## 2.3.0 (2023-06-09)

### 🎫 Feat

- 新增 `adaptive` 表格属性，支持表格自适应内容区高度
- 新增 `adaptiveConfig` 表格属性，自适应内容区高度相关配置（`offsetBottom`：表格距离页面底部的偏移量，默认值为 `96`、`fixHeader`：是否固定表头，默认值为 `true`、`timeout`：页面 `resize` 时的防抖时间，默认值为 `60` ms、`zIndex`：表头的 `z-index`，默认值为 `100`）
- 新增并暴露出 `setAdaptive` 方法，可以设置表格自适应高度（用于表格外的元素高度改变或者元素隐藏时主动对表格进行自适应高度调整）
- 新增并暴露出 `setHeaderSticky` 方法，可以设置表头为 `sticky` 布局

### 🐞 Bug fixes

- 修复设置表格属性 `table-layout="auto"` 后，表头不会固定的问题

## 2.2.0 (2023-05-20)

### 🎫 Feat

- 添加自定义表头的内容插槽 `headerSlot`，可在 `template` 中使用

## 2.1.0 (2023-05-08)

### 🎫 Feat

- `TableColumns` 中 `hide` 属性支持 `Boolean` 类型

### 🍏 Perf

- 适配 `el-table` 新增的 `tooltipOptions` 属性

## 2.0.0 (2023-01-08)

### ✔️ refactor

- 分页事件名变更 `size-change` 变更为 `page-size-change`、`current-change` 变更为 `page-current-change`

## 1.9.0 (2022-12-09)

### 🍏 Perf

- 优化表格渲染

## 1.8.3 (2022-12-04)

### 🎫 Feat

- 添加 `loading`、`loadingConfig` 表格属性，可配置自定义加载动画，加载动画已适配暗黑模式

## 1.8.0 (2022-11-24)

### 🎫 Feat

- 新增表格 `key` 属性，唯一键，如果单个页面有多个表格实例，但是您只获取到一个表格实例，设置 `key` 即可解决，不过大多数情况下不需要设置，会自动处理
- 新增表格 `rowHoverBgColor` 属性，鼠标经过行时，行的背景色，默认 `--el-table-row-hover-bg-color`，具体看 [theme-chalk/src/table.scss](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/table.scss#L607-L611)

## 1.7.0 (2022-11-23)

### 🎫 Feat

- `TableColumn` 的 `prop` 支持传函数，用于动态改变 `prop`，应用场景：列拖拽

## 1.5.0 (2022-11-20)

### 🎫 Feat

- 支持多级表头（表头分组），`columns` 中传 `children` 即可

### 🐞 Bug fixes

- 表格传 `alignWhole` 替换 `align` 属性，`@pureadmin/table` 的 `align` 属性跟 `element-plus table` 的 `align` 属性有突出，注意这个 `align` 不是 `columns` 里的，而是全局的

### ⛽️ types

- 完善类型

## 1.3.0 (2022-11-19)

### ⛽️ types

- types: supplement type

## 1.2.0 (2022-07-02)

### 🎫 Feat

- add `vitest` unit test

### 🐞 Bug fixes

- fix table `append` and `empty` slot

## 1.1.0 (2022-06-26)

### 🎫 Feat

- add `pagination` component

### 🍏 Perf

- types files

## 0.0.1 (2022-06-22)

### 🎫 Feat

- add `columns`、`align`、`headerAlign`、`showOverflowTooltip` 、`hide` 、`cellRenderer`、`headerRenderer`、`slot` props, on the basis of maintaining the table attribute in `element-plus`
