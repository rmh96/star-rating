"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
    resetFilledStar = _ref.resetFilledStar;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    hoverStar = _useState2[0],
    setHoverStar = _useState2[1];
  var _useState3 = useState(-1),
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
  useEffect(function () {
    timeOutToFade && setTimeout(function () {
      setClickedStar(-1);
    }, 2000);
  }, [clickedStar]);
  useEffect(function () {
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