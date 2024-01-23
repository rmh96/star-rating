"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var StarRating = function StarRating(_ref) {
  var noOfStars = _ref.noOfStars,
    starFillColor = _ref.starFillColor,
    starBorderColor = _ref.starBorderColor,
    timeOutToFade = _ref.timeOutToFade,
    _ref$timeDalayToFade = _ref.timeDalayToFade,
    timeDalayToFade = _ref$timeDalayToFade === void 0 ? 2000 : _ref$timeDalayToFade,
    resetFilledStar = _ref.resetFilledStar;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    hoverStar = _useState2[0],
    setHoverStar = _useState2[1];
  var _useState3 = (0, _react.useState)(-1),
    _useState4 = _slicedToArray(_useState3, 2),
    clickedStar = _useState4[0],
    setClickedStar = _useState4[1];
  var onHoverStar = function onHoverStar(index) {
    var iterates = Array.from({
      length: index + 1
    }, function (_, index) {
      return index;
    });
    setHoverStar(iterates);
  };
  var onUnHoverStar = function onUnHoverStar(index) {
    setHoverStar([]);
  };
  var onStarClick = function onStarClick(index) {
    setClickedStar(index);
  };
  (0, _react.useEffect)(function () {
    timeOutToFade && setTimeout(function () {
      setClickedStar(-1);
    }, timeDalayToFade);
  }, [clickedStar]);
  (0, _react.useEffect)(function () {
    setClickedStar(-1);
  }, [resetFilledStar]);
  console.log("hover", hoverStar);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sr-con"
  }, Array.from({
    length: noOfStars
  }, function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "star",
      key: index,
      onMouseEnter: function onMouseEnter() {
        return onHoverStar(index);
      },
      onMouseLeave: function onMouseLeave() {
        return onUnHoverStar(index);
      },
      onClick: function onClick() {
        return onStarClick(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(Icon, {
      fillColor: hoverStar.includes(index) ? starFillColor : index <= clickedStar ? starFillColor : "white",
      borderColor: starBorderColor
    }));
  }));
};
var _default = exports["default"] = StarRating;
var Icon = function Icon(_ref2) {
  var fillColor = _ref2.fillColor,
    borderColor = _ref2.borderColor;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: fillColor ? fillColor : "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.1,
    stroke: borderColor ? borderColor : "black",
    style: {
      width: "100%",
      height: "100%",
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  })));
};
