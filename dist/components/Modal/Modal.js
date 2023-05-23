"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var ReactDOM = _interopRequireWildcard(require("react-dom"));
var _material = require("@mui/material");
require("./index.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    show,
    close,
    title,
    children
  } = _ref;
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer ".concat(show ? "show" : ""),
    onClick: () => close()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "modal_header"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal_header_title"
  }, title), /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      top: "-90px",
      right: "-30px",
      fontSize: "1.2rem"
    },
    className: "close_button close",
    onClick: () => close(),
    variant: "text",
    size: "small"
  }, "X")), /*#__PURE__*/_react.default.createElement("main", {
    className: "modal_content"
  }, children), /*#__PURE__*/_react.default.createElement("footer", {
    className: "modal_footer"
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      backgroundColor: "#333333",
      marginTop: "1rem",
      "&:hover": {
        backgroundColor: "#595959"
      }
    },
    variant: "contained",
    className: "modal_close",
    onClick: () => close(),
    color: "secondary"
  }, "OK"))))), document.getElementById("modal"));
};
var _default = Modal; //Place this snippet everywhere you want
exports.default = _default;
{
  /* <Modal
        show={modal}
        close={Toggle}
        title={"HRNet"}
        children={"Employee successfully added "}
      /> */
}