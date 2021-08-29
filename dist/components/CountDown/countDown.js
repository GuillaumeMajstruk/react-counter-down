"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./Styles/countDown.css");

var _utils = require("./Utils/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CountDown = props => {
  const [time, setTime] = (0, _react.useState)((0, _utils.convertDate)(props.release));
  (0, _react.useEffect)(() => {
    const updateTime = () => {
      setTime((0, _utils.convertDate)(props.release));
    };

    const t = setTimeout(updateTime, 1000);
    return () => {
      clearTimeout(t);
    };
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "count-down--container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "count-down--value-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value"
  }, time === null || time === void 0 ? void 0 : time.days), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value-label"
  }, "days")), /*#__PURE__*/_react.default.createElement("div", {
    className: "count-down--value-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value"
  }, time === null || time === void 0 ? void 0 : time.hours), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value-label"
  }, "hours")), /*#__PURE__*/_react.default.createElement("div", {
    className: "count-down--value-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value"
  }, time === null || time === void 0 ? void 0 : time.minutes), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value-label"
  }, "minutes")), /*#__PURE__*/_react.default.createElement("div", {
    className: "count-down--value-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value"
  }, time === null || time === void 0 ? void 0 : time.seconds), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-down--value-label"
  }, "seconds"))));
};

var _default = CountDown;
exports.default = _default;