# Changelog

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
