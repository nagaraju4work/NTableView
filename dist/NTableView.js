"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NTableView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./ntableview.css");
var _excluded = ["backgroundColor", "listType", "caption"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// import { useTableSorted } from "./useTableSorted";

/**
 * Table View UI component which groups several items and display them in vertical scrollable list.
 */
var NTableView = function NTableView(_ref) {
  var backgroundColor = _ref.backgroundColor,
    listType = _ref.listType,
    caption = _ref.caption,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    sortField = _useState2[0],
    setSortField = _useState2[1];
  var _useState3 = (0, _react.useState)("asc"),
    _useState4 = _slicedToArray(_useState3, 2),
    order = _useState4[0],
    setOrder = _useState4[1];
  var _useState5 = (0, _react.useState)(getDefaultSorting(data, columns)),
    _useState6 = _slicedToArray(_useState5, 2),
    tableData = _useState6[0],
    setTableData = _useState6[1];
  useTableSorted(props.data, props.columns);
  function getDefaultSorting(defaultTableData, columns) {
    var sorted = _toConsumableArray(defaultTableData).sort(function (a, b) {
      var filterColumn = columns.filter(function (column) {
        return column.sortbyOrder;
      });

      // Merge all array objects into single object and extract accessor and sortbyOrder keys
      var _Object$assign = Object.assign.apply(Object, [{}].concat(_toConsumableArray(filterColumn))),
        _Object$assign$access = _Object$assign.accessor,
        accessor = _Object$assign$access === void 0 ? "id" : _Object$assign$access,
        _Object$assign$sortby = _Object$assign.sortbyOrder,
        sortbyOrder = _Object$assign$sortby === void 0 ? "asc" : _Object$assign$sortby;
      if (a[accessor] === null) return 1;
      if (b[accessor] === null) return -1;
      if (a[accessor] === null && b[accessor] === null) return 0;
      var ascending = a[accessor].toString().localeCompare(b[accessor].toString(), "en", {
        numeric: true
      });
      return sortbyOrder === "asc" ? ascending : -ascending;
    });
    return sorted;
  }
  var handleSorting = function handleSorting(sortField, sortOrder) {
    if (sortField) {
      var sorted = _toConsumableArray(tableData).sort(function (a, b) {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
          numeric: true
        }) * (sortOrder === "asc" ? 1 : -1);
      });
      setTableData(sorted);
    }
  };
  var handleSortingChange = function handleSortingChange(accessor) {
    var sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "storybook-ntableview-container"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "storybook-ntableview-table"
  }, /*#__PURE__*/_react.default.createElement("caption", null, caption), /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, listType == "single-select" || listType == "multi-select" ? /*#__PURE__*/_react.default.createElement("th", null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " "), props.columns.map(function (_ref2) {
    var label = _ref2.label,
      accessor = _ref2.accessor,
      sortable = _ref2.sortable;
    var cl = sortable ? sortField === accessor && order === "asc" ? "up" : sortField === accessor && order === "desc" ? "down" : "default" : "";
    return /*#__PURE__*/_react.default.createElement("th", {
      className: cl,
      key: accessor,
      onClick: sortable ? function () {
        return handleSortingChange(accessor);
      } : null
    }, label);
  }))), tableData.map(function (data) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: data.id
    }, listType == "single-select" || listType == "multi-select" ? /*#__PURE__*/_react.default.createElement("td", {
      "data-label": "select"
    }, /*#__PURE__*/_react.default.createElement("input", {
      id: data.id,
      name: listType == "multi-select" ? "type_checkbox" : "type_radio",
      type: listType == "multi-select" ? "checkbox" : "radio"
    })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), props.columns.map(function (_ref3) {
      var accessor = _ref3.accessor;
      var tData = data[accessor] ? data[accessor] : "——";
      return /*#__PURE__*/_react.default.createElement("td", {
        key: accessor
      }, tData);
    }));
  })));
};
exports.NTableView = NTableView;
NTableView.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,
  /**
   * Which Type of a List wanted
   */
  listType: _propTypes.default.oneOf(['none', 'sort', 'single-select', 'multi-select']),
  /**
   * Table View contents
   */
  caption: _propTypes.default.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: _propTypes.default.func
};
NTableView.defaultProps = {
  backgroundColor: null,
  primary: false,
  listType: 'sort',
  onClick: undefined
};