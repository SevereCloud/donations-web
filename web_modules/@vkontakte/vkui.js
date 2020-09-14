import { c as createCommonjsModule, r as react, g as getDefaultExportFromCjs } from '../common/index-2cd4dd6b.js';
import { b as browserSprite, a as browserSymbol, e as es6ObjectAssign } from '../common/browser-sprite-329c1bbb.js';
import { b as bridge } from '../common/index.es-112d111e.js';

var canUseDOM = !!(typeof window !== 'undefined' && window.document &&
/* eslint-disable */
window.document.createElement
/* eslint-enable */
);

/* eslint-disable */

if (canUseDOM) {
  var ElementProto = Element.prototype; // Element.prototype.matches

  if (!ElementProto.matches) {
    ElementProto.matches = ElementProto.matchesSelector || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector;
  } // Element.prototype.closest


  if (!ElementProto.closest) {
    ElementProto.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) {
          return node;
        } else {
          node = node.parentElement;
        }
      }

      return null;
    };
  }
} // Array.prototype.includes


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (len === 0) {
        return false;
      }

      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }

        k++;
      }

      return false;
    }
  });
} // Array.prototype.find


if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(callback) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }

      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];

      for (var i = 0; i < length; i++) {
        var element = list[i];

        if (callback.call(thisArg, element, i, list)) {
          return element;
        }
      }
    }
  });
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs, throwOnDirectAccess; {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function classNames() {
  var result = [];

  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  classnames.forEach(function (item) {
    if (!item) {
      return;
    }

    switch (_typeof_1(item)) {
      case 'string':
        result.push(item);
        break;

      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;

      default:
        result.push("".concat(item));
    }
  });
  return result.join(' ');
}

var OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
  OS["VKCOM"] = "vkcom";
})(OS || (OS = {}));

var ANDROID = OS.ANDROID;
var IOS = OS.IOS;
var VKCOM = OS.VKCOM;
function platform(useragent) {
  var ua = useragent || canUseDOM && navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) ? IOS : ANDROID;
}
var osname = platform();
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */

var IS_PLATFORM_IOS = osname === IOS;

function getClassname(base) {
  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : platform();
  return "".concat(base, " ").concat(base, "--").concat(osname);
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var SSRContext = /*#__PURE__*/react.createContext({
  platform: null,
  userAgent: ''
});

var Appearance;

(function (Appearance) {
  Appearance["DARK"] = "dark";
  Appearance["LIGHT"] = "light";
})(Appearance || (Appearance = {}));

var Scheme;

(function (Scheme) {
  Scheme["DEPRECATED_CLIENT_LIGHT"] = "client_light";
  Scheme["DEPRECATED_CLIENT_DARK"] = "client_dark";
  Scheme["BRIGHT_LIGHT"] = "bright_light";
  Scheme["SPACE_GRAY"] = "space_gray";
})(Scheme || (Scheme = {}));

var WebviewType;

(function (WebviewType) {
  WebviewType["VKAPPS"] = "vkapps";
  WebviewType["INTERNAL"] = "internal";
})(WebviewType || (WebviewType = {}));

var defaultConfigProviderProps = {
  webviewType: WebviewType.VKAPPS,
  isWebView: bridge.isWebView(),
  scheme: Scheme.BRIGHT_LIGHT,
  appearance: Appearance.LIGHT,
  transitionMotionEnabled: true,
  platform: platform()
};
var ConfigProviderContext = /*#__PURE__*/react.createContext(defaultConfigProviderProps);

function withPlatform(Component) {
  function WithPlatform(props) {
    var ssrContext = react.useContext(SSRContext);

    var _React$useContext = react.useContext(ConfigProviderContext),
        platform = _React$useContext.platform; // @ts-ignore


    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      platform: ssrContext.platform || platform
    }));
  }

  return WithPlatform;
}

var SizeType;

(function (SizeType) {
  SizeType["COMPACT"] = "compact";
  SizeType["REGULAR"] = "regular";
})(SizeType || (SizeType = {}));

var ViewWidth;

(function (ViewWidth) {
  ViewWidth[ViewWidth["SMALL_MOBILE"] = 1] = "SMALL_MOBILE";
  ViewWidth[ViewWidth["MOBILE"] = 2] = "MOBILE";
  ViewWidth[ViewWidth["SMALL_TABLET"] = 3] = "SMALL_TABLET";
  ViewWidth[ViewWidth["TABLET"] = 4] = "TABLET";
  ViewWidth[ViewWidth["DESKTOP"] = 5] = "DESKTOP";
})(ViewWidth || (ViewWidth = {}));

var AdaptivityContext = /*#__PURE__*/react.createContext({
  sizeX: SizeType.COMPACT,
  sizeY: SizeType.REGULAR
});

function withAdaptivity(TargetComponent, config) {
  function AdaptivityConsumer(props) {
    var context = react.useContext(AdaptivityContext);
    var update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    var sizeX = props.sizeX || context.sizeX;
    var sizeY = props.sizeY || context.sizeY;
    var viewWidth = context.viewWidth;
    var adaptivityProps = {};
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined; // @ts-ignore

    var target = /*#__PURE__*/react.createElement(TargetComponent, _extends_1({}, props, adaptivityProps));

    if (update) {
      return /*#__PURE__*/react.createElement(AdaptivityContext.Provider, {
        value: {
          sizeX: sizeX,
          sizeY: sizeY,
          viewWidth: viewWidth
        }
      }, target);
    }

    return target;
  }

  return AdaptivityConsumer;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var SplitContext = /*#__PURE__*/react.createContext({
  colRef: null,
  animate: true
});
var SplitCol = /*#__PURE__*/function (_Component2) {
  inherits(SplitCol, _Component2);

  var _super2 = _createSuper(SplitCol);

  function SplitCol() {
    var _this;

    classCallCheck(this, SplitCol);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "baseRef", /*#__PURE__*/react.createRef());

    return _this;
  }

  createClass(SplitCol, [{
    key: "getContext",
    value: function getContext() {
      return {
        colRef: this.baseRef,
        animate: this.props.animate
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          width = _this$props2.width,
          maxWidth = _this$props2.maxWidth,
          minWidth = _this$props2.minWidth,
          spaced = _this$props2.spaced;
      return /*#__PURE__*/react.createElement("div", {
        style: {
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
          margin: spaced ? '0 16px' : null
        },
        ref: this.baseRef,
        className: "SplitLayout__col"
      }, /*#__PURE__*/react.createElement(SplitContext.Provider, {
        value: this.getContext()
      }, children));
    }
  }]);

  return SplitCol;
}(react.Component);

defineProperty(SplitCol, "defaultProps", {
  animate: false
});

function withContext(Component, Ctx, prop) {
  function WithContext(props) {
    var context = react.useContext(Ctx); // @ts-ignore

    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, defineProperty({}, prop, context)));
  }

  return WithContext;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Root = /*#__PURE__*/function (_Component) {
  inherits(Root, _Component);

  var _super = _createSuper$1(Root);

  function Root(props) {
    var _this;

    classCallCheck(this, Root);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onAnimationEnd", function (e) {
      if (!e || ['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].includes(e.animationName)) {
        var isBack = _this.state.isBack;
        var prevView = _this.state.prevView;
        var nextView = _this.state.nextView;

        _this.setState({
          activeView: nextView,
          prevView: null,
          nextView: null,
          visibleViews: [nextView],
          transition: false,
          isBack: undefined
        }, function () {
          _this.window.scrollTo(0, isBack ? _this.state.scrolls[_this.state.activeView] : 0);

          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevView,
            to: nextView
          });
        });
      }
    });

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {},
      transition: false
    };
    return _this;
  }

  createClass(Root, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.popout && !prevProps.popout) {
        this.blurActiveElement();
      } // Нужен переход


      if (this.props.activeView !== prevProps.activeView) {
        var pageYOffset = this.window.pageYOffset;
        var firstLayerId = [].concat(prevProps.children).find(function (view) {
          return view.props.id === prevProps.activeView || view.props.id === _this2.props.activeView;
        }).props.id;
        var isBack = firstLayerId === this.props.activeView;
        this.blurActiveElement();
        var nextView = this.props.activeView;
        var prevView = prevProps.activeView;
        this.setState({
          scrolls: _objectSpread(_objectSpread({}, this.state.scrolls), {}, defineProperty({}, prevProps.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      } // Начался переход


      if (!prevState.transition && this.state.transition) {
        var prevViewElement = this.document.getElementById("view-".concat(this.state.prevView));
        var nextViewElement = this.document.getElementById("view-".concat(this.state.nextView));
        prevViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          nextViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }

        this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
      }
    }
  }, {
    key: "shouldDisableTransitionMotion",
    value: function shouldDisableTransitionMotion() {
      return this.props.configProvider.transitionMotionEnabled === false || !this.props.splitCol.animate;
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (this.shouldDisableTransitionMotion()) {
        eventHandler();
        return;
      }

      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler.bind(this), this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          popout = _this$props.popout,
          modal = _this$props.modal,
          platform = _this$props.platform;
      var _this$state = this.state,
          transition = _this$state.transition,
          isBack = _this$state.isBack,
          prevView = _this$state.prevView,
          activeView = _this$state.activeView,
          nextView = _this$state.nextView;
      var Views = this.arrayChildren.filter(function (view) {
        return _this3.state.visibleViews.includes(view.props.id);
      });
      var baseClassName = getClassname('Root', platform);
      return /*#__PURE__*/react.createElement("div", {
        className: classNames(baseClassName, this.props.className, {
          'Root--transition': transition,
          'Root--no-motion': this.shouldDisableTransitionMotion()
        })
      }, Views.map(function (view) {
        return /*#__PURE__*/react.createElement("div", {
          key: view.props.id,
          id: "view-".concat(view.props.id),
          className: classNames('Root__view', {
            'Root__view--hide-back': view.props.id === prevView && isBack,
            'Root__view--hide-forward': view.props.id === prevView && !isBack,
            'Root__view--show-back': view.props.id === nextView && isBack,
            'Root__view--show-forward': view.props.id === nextView && !isBack,
            'Root__view--active': view.props.id === activeView
          })
        }, view);
      }), !!popout && /*#__PURE__*/react.createElement("div", {
        className: "Root__popout"
      }, popout), !!modal && /*#__PURE__*/react.createElement("div", {
        className: "Root__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "arrayChildren",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return Root;
}(react.Component);

defineProperty(Root, "defaultProps", {
  popout: null
});

defineProperty(Root, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var Root$1 = withContext(withContext(withPlatform(Root), SplitContext, 'splitCol'), ConfigProviderContext, 'configProvider');

/**
 * Функция для js анимации
 * @param {number} duration
 * @param {function} timing тайминг функция анимации
 * @param {function} draw коллбэк, в который прокидывается прогресс [0, 1]
 * @returns {void}
 */
function animate(_ref) {
  var duration = _ref.duration,
      timing = _ref.timing,
      draw = _ref.draw;

  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();
  window.requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      window.requestAnimationFrame(animate);
    }
  });
}

/*
 * Получает кординату по оси абсцисс из touch- или mouse-события
 */
var coordX = function coordX(e) {
  return e.clientX || e.changedTouches && e.changedTouches[0].clientX;
};
/*
 * Получает кординату по оси ординат из touch- или mouse-события
 */


var coordY = function coordY(e) {
  return e.clientY || e.changedTouches && e.changedTouches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;
/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */

function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}
/*
 * Рассчитывает "сопротивление" для iOS тач-событий
 */


function rubber(offset, dimension, resistanceRate, isAndroid) {
  if (isAndroid || offset < 0) {
    return offset;
  }

  var offsettedResistance = offset * resistanceRate;
  return offsettedResistance * dimension / (offsettedResistance + dimension);
}

// Является ли переданное значение числовым

function isFunction(value) {
  return typeof value === 'function';
}
function debounce(fn, delay) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  var timeout;
  var args = null;

  var later = function later() {
    return fn.apply(context, args);
  };

  return function () {
    for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      a[_key2] = arguments[_key2];
    }

    args = a;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}
function leadingZero(val) {
  var strVal = val.toFixed();

  if (strVal.length === 1) {
    return '0' + strVal;
  }

  return strVal;
}
function hasReactNode(value) {
  return value !== undefined && value !== false && value !== null;
}
function setRef(element, ref) {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      ref.current = element;
    }
  }
} // eslint-disable-next-line
function createCustomEvent(window, type, eventInitDict) {
  if (typeof window.CustomEvent !== 'function') {
    var options = eventInitDict || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(type, options.bubbles, options.cancelable, options.detail);
    return evt;
  }

  return new window.CustomEvent(type, eventInitDict);
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var events = getSupportedEvents();

var Touch = /*#__PURE__*/function (_Component) {
  inherits(Touch, _Component);

  var _super = _createSuper$2(Touch);

  function Touch(props) {
    var _this;

    classCallCheck(this, Touch);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "cancelClick", void 0);

    defineProperty(assertThisInitialized(_this), "gesture", {});

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "onEnter", function (e) {
      if (_this.props.onEnter) {
        _this.props.onEnter(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onLeave", function (e) {
      if (_this.props.onLeave) {
        _this.props.onLeave(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onStart", function (e) {
      _this.gesture = {
        startX: coordX(e),
        startY: coordY(e),
        startT: new Date(),
        isPressed: true
      }; // Вызываем нужные колбеки из props

      var outputEvent = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !touchEnabled && _this.subscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;

      if (isPressed) {
        // смещения
        var shiftX = coordX(e) - startX;
        var shiftY = coordY(e) - startY; // абсолютные значения смещений

        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY); // Если определяем мультитач, то прерываем жест

        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        } // если мы ещё не определились


        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;
          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs; // Вызываем нужные колбеки из props

          var _outputEvent = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(_outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(_outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(_outputEvent);
          }
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;

      if (isPressed) {
        // Вызываем нужные колбеки из props
        var _outputEvent2 = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(_outputEvent2);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(_outputEvent2);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(_outputEvent2);
        }
      }

      var target = e.target; // Если закончили жест на ссылке, выставляем флаг для отмены перехода

      _this.cancelClick = target.tagName === 'A' && isSlide;
      _this.gesture = {}; // Если это был тач-евент, симулируем отмену hover

      if (e.type === 'touchend' || e.type === 'touchcancel') {
        _this.onLeave(e);
      }

      !touchEnabled && _this.unsubscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onDragStart", function (e) {
      var target = e.target;

      if (target.tagName === 'A' || target.tagName === 'IMG') {
        e.preventDefault();
      }
    });

    defineProperty(assertThisInitialized(_this), "onClick", function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }

      _this.props.onClick && _this.props.onClick(e);
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    _this.cancelClick = false;
    return _this;
  }

  createClass(Touch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM) {
        this.container.addEventListener(events[0], this.onStart, {
          capture: this.props.useCapture,
          passive: false
        });
        touchEnabled && this.subscribe(this.container);
        this.container.addEventListener('mouseenter', this.onEnter, {
          capture: this.props.useCapture,
          passive: true
        });
        this.container.addEventListener('mouseleave', this.onLeave, {
          capture: this.props.useCapture,
          passive: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart);
      touchEnabled && this.unsubscribe(this.container);
      this.container.removeEventListener('mouseenter', this.onEnter);
      this.container.removeEventListener('mouseleave', this.onLeave);
    }
    /**
     * Обработчик событий mouseenter
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "subscribe",
    value: function subscribe(element) {
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.addEventListener(events[1], this.onMove, listenerParams);
      element.addEventListener(events[2], this.onEnd, listenerParams);
      element.addEventListener(events[3], this.onEnd, listenerParams);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(element) {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.removeEventListener(events[1], this.onMove, listenerParams);
      element.removeEventListener(events[2], this.onEnd, listenerParams);
      element.removeEventListener(events[3], this.onEnd, listenerParams);
    }
    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onStart = _this$props.onStart,
          onStartX = _this$props.onStartX,
          onStartY = _this$props.onStartY,
          onMove = _this$props.onMove,
          onMoveX = _this$props.onMoveX,
          onMoveY = _this$props.onMoveY,
          onLeave = _this$props.onLeave,
          onEnter = _this$props.onEnter,
          onEnd = _this$props.onEnd,
          onEndX = _this$props.onEndX,
          onEndY = _this$props.onEndY,
          useCapture = _this$props.useCapture,
          Component = _this$props.Component,
          getRootRef = _this$props.getRootRef,
          restProps = objectWithoutProperties(_this$props, ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onLeave", "onEnter", "onEnd", "onEndX", "onEndY", "useCapture", "Component", "getRootRef"]);

      return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
        onDragStart: this.onDragStart,
        onClick: this.onClick,
        ref: this.getRef
      }), this.props.children);
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Touch;
}(react.Component);

defineProperty(Touch, "defaultProps", {
  Component: 'div',
  children: '',
  useCapture: false
});

defineProperty(Touch, "contextTypes", {
  document: propTypes.object
});

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function removeObjectKeys(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = _objectSpread$2({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });
  return newObj;
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var transitionStartEventName = 'VKUI:View:transition-start';
var transitionEndEventName = 'VKUI:View:transition-end';
var SwipeBackResults;

(function (SwipeBackResults) {
  SwipeBackResults[SwipeBackResults["fail"] = 1] = "fail";
  SwipeBackResults[SwipeBackResults["success"] = 2] = "success";
})(SwipeBackResults || (SwipeBackResults = {}));

var scrollsCache = {};
var swipeBackExcludedTags = ['input', 'textarea'];

var View = /*#__PURE__*/function (_Component) {
  inherits(View, _Component);

  var _super = _createSuper$3(View);

  function View(props) {
    var _this;

    classCallCheck(this, View);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "transitionFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "transitionEndHandler", function (e) {
      if (!e || ['animation-ios-next-forward', 'animation-ios-prev-back', 'animation-android-next-forward', 'animation-android-prev-back'].includes(e.animationName)) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        var prevPanel = _this.state.prevPanel;

        _this.document.dispatchEvent(createCustomEvent(_this.window, transitionEndEventName));

        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined,
          scrolls: isBack ? removeObjectKeys(_this.state.scrolls, [prevPanel]) : _this.state.scrolls
        }, function () {
          isBack && _this.window.scrollTo(0, _this.state.scrolls[activePanel]);
          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevPanel,
            to: activePanel
          });
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "swipingBackTransitionEndHandler", function (e) {
      // indexOf because of vendor prefixes in old browsers
      var target = e.target;

      if (e.propertyName.includes('transform') && target.classList.contains('View__panel--swipe-back-next')) {
        switch (_this.state.swipeBackResult) {
          case SwipeBackResults.fail:
            _this.onSwipeBackCancel();

            break;

          case SwipeBackResults.success:
            _this.onSwipeBackSuccess();

        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onScrollTop", function () {
      var activePanel = _this.state.activePanel;

      if (activePanel) {
        var scrollTop = _this.document.body.scrollTop || _this.document.documentElement.scrollTop;

        if (scrollTop) {
          animate({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              _this.window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onMoveX", function (e) {
      var target = e.originalEvent.target;

      if (target && typeof target.tagName === 'string' && swipeBackExcludedTags.includes(target.tagName.toLowerCase())) {
        return;
      }

      var _this$props = _this.props,
          platform = _this$props.platform,
          configProvider = _this$props.configProvider;

      if (platform === IOS && !configProvider.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({
          browserSwipe: true
        });
      }

      if (platform === IOS && configProvider.isWebView && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          return;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: _objectSpread$3(_objectSpread$3({}, _this.state.scrolls), {}, defineProperty({}, _this.state.activePanel, _this.window.pageYOffset))
          });
        }

        if (_this.state.swipingBack) {
          var swipeBackShift;

          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > _this.window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = _this.window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }

          _this.setState({
            swipeBackShift: swipeBackShift
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (Date.now() - _this.state.startT.getTime()) * 1000;

        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= _this.window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else if (speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > _this.window.innerWidth / 2) {
          _this.setState({
            swipeBackResult: SwipeBackResults.success
          });
        } else {
          _this.setState({
            swipeBackResult: SwipeBackResults.fail
          });
        }
      }
    });

    _this.state = {
      scrolls: scrollsCache[props.id] || {},
      animated: false,
      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,
      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipeBackResult: null,
      browserSwipe: false
    };
    return _this;
  }

  createClass(View, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.id) {
        scrollsCache[this.props.id] = this.state.scrolls;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      this.props.popout && !prevProps.popout && this.blurActiveElement();
      this.props.modal && !prevProps.modal && this.blurActiveElement(); // Нужен переход

      if (prevProps.activePanel !== this.props.activePanel && !prevState.swipingBack && !prevState.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.props.id === prevProps.activePanel || panel.props.id === _this2.props.activePanel;
        });
        var isBack = firstLayer && firstLayer.props.id === this.props.activePanel;
        this.blurActiveElement();
        this.setState({
          visiblePanels: [prevProps.activePanel, this.props.activePanel],
          prevPanel: prevProps.activePanel,
          nextPanel: this.props.activePanel,
          activePanel: null,
          animated: true,
          scrolls: _objectSpread$3(_objectSpread$3({}, prevState.scrolls), {}, defineProperty({}, prevProps.activePanel, this.window.pageYOffset)),
          isBack: isBack
        });
      } // Закончилась анимация свайпа назад


      if (prevProps.activePanel !== this.props.activePanel && prevState.swipingBack) {
        var nextPanel = this.props.activePanel;
        var prevPanel = prevProps.activePanel;
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipeBackResult: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextPanel,
          visiblePanels: [nextPanel],
          scrolls: removeObjectKeys(prevState.scrolls, [prevState.swipeBackPrevPanel])
        }, function () {
          _this2.document.dispatchEvent(createCustomEvent(_this2.window, transitionEndEventName));

          window.scrollTo(0, prevState.scrolls[_this2.state.activePanel]);
          prevProps.onTransition && prevProps.onTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel
          });
        });
      }

      var scrolls = this.state.scrolls; // Начался переход

      if (!prevState.animated && this.state.animated) {
        this.document.dispatchEvent(createCustomEvent(this.window, transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        var nextPanelElement = this.pickPanel(this.state.nextPanel);
        var prevPanelElement = this.pickPanel(this.state.prevPanel);
        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];

        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }

        this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
      } // Начался свайп назад


      if (!prevState.swipingBack && this.state.swipingBack) {
        this.document.dispatchEvent(createCustomEvent(this.window, transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        this.props.onSwipeBackStart && this.props.onSwipeBackStart();

        var _nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);

        var _prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      } // Началась анимация завершения свайпа назад.


      if (!prevState.swipeBackResult && this.state.swipeBackResult) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      } // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)


      if (prevState.swipeBackResult === SwipeBackResults.fail && !this.state.swipeBackResult) {
        this.window.scrollTo(0, scrolls[this.state.activePanel]);
      } // Закончился Safari свайп


      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: "shouldDisableTransitionMotion",
    value: function shouldDisableTransitionMotion() {
      return this.props.configProvider.transitionMotionEnabled === false || !this.props.splitCol.animate;
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(elem, eventHandler) {
      {
        clearTimeout(this.transitionFinishTimeout);
        this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (this.shouldDisableTransitionMotion()) {
        eventHandler();
        return;
      }

      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "pickPanel",
    value: function pickPanel(id) {
      var elem = this.document.getElementById(id);

      if (!elem) {
        console.warn("Element #".concat(id, " not found"));
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: "onSwipeBackSuccess",
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: "onSwipeBackCancel",
    value: function onSwipeBackCancel() {
      var _this3 = this;

      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipeBackResult: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      }, function () {
        _this3.document.dispatchEvent(createCustomEvent(_this3.window, transitionEndEventName));
      });
    }
  }, {
    key: "calcPanelSwipeStyles",
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipeBackResult) {
        return {};
      }

      var prevPanelTranslate = "".concat(this.state.swipeBackShift, "px");
      var nextPanelTranslate = "".concat(-50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2, "%");
      var prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

      if (this.state.swipeBackResult) {
        return isPrev ? {
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        } : {};
      }

      if (isNext) {
        return {
          transform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)")
        };
      }

      if (isPrev) {
        return {
          transform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        };
      }

      return {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          popout = _this$props2.popout,
          modal = _this$props2.modal,
          platform = _this$props2.platform;
      var _this$state = this.state,
          prevPanel = _this$state.prevPanel,
          nextPanel = _this$state.nextPanel,
          activePanel = _this$state.activePanel,
          swipeBackPrevPanel = _this$state.swipeBackPrevPanel,
          swipeBackNextPanel = _this$state.swipeBackNextPanel,
          swipeBackResult = _this$state.swipeBackResult;
      var hasPopout = !!popout;
      var hasModal = !!modal;
      var panels = this.panels.filter(function (panel) {
        var panelId = panel.props.id;
        return _this4.state.visiblePanels.includes(panelId) || panelId === swipeBackPrevPanel || panelId === swipeBackNextPanel;
      });
      var modifiers = {
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack,
        'View--no-motion': this.shouldDisableTransitionMotion()
      };
      return /*#__PURE__*/react.createElement(Touch, {
        Component: "section",
        className: classNames(getClassname('View', platform), this.props.className, modifiers),
        style: style,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd
      }, /*#__PURE__*/react.createElement("div", {
        className: "View__panels"
      }, panels.map(function (panel) {
        var panelId = panel.props.id;
        return /*#__PURE__*/react.createElement("div", {
          className: classNames('View__panel', {
            'View__panel--active': panelId === activePanel,
            'View__panel--prev': panelId === prevPanel,
            'View__panel--next': panelId === nextPanel,
            'View__panel--swipe-back-prev': panelId === swipeBackPrevPanel,
            'View__panel--swipe-back-next': panelId === swipeBackNextPanel,
            'View__panel--swipe-back-success': swipeBackResult === SwipeBackResults.success,
            'View__panel--swipe-back-failed': swipeBackResult === SwipeBackResults.fail
          }),
          style: _this4.calcPanelSwipeStyles(panelId),
          key: panelId
        }, /*#__PURE__*/react.createElement("div", {
          className: "View__panel-in"
        }, panel));
      })), hasPopout && /*#__PURE__*/react.createElement("div", {
        className: "View__popout"
      }, popout), hasModal && /*#__PURE__*/react.createElement("div", {
        className: "View__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "panels",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return View;
}(react.Component);

defineProperty(View, "defaultProps", {
  history: []
});

defineProperty(View, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var View$1 = withContext(withContext(withPlatform(View), SplitContext, 'splitCol'), ConfigProviderContext, 'configProvider');

var PanelContext = /*#__PURE__*/react.createContext({});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Panel = /*#__PURE__*/function (_Component) {
  inherits(Panel, _Component);

  var _super = _createSuper$4(Panel);

  function Panel(props) {
    var _this;

    classCallCheck(this, Panel);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "childContext", void 0);

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    _this.childContext = {
      panel: props.id
    };
    return _this;
  }

  createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          centered = _this$props.centered,
          children = _this$props.children,
          platform = _this$props.platform,
          getRootRef = _this$props.getRootRef,
          sizeX = _this$props.sizeX,
          restProps = objectWithoutProperties(_this$props, ["className", "centered", "children", "platform", "getRootRef", "sizeX"]);

      return /*#__PURE__*/react.createElement(PanelContext.Provider, {
        value: this.childContext
      }, /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('Panel', platform), className, "Panel--".concat(sizeX), defineProperty({
          'Panel--centered': centered
        }, "Panel--sizeX-".concat(sizeX), true))
      }), /*#__PURE__*/react.createElement(Touch, {
        className: "Panel__in"
      }, platform === IOS && /*#__PURE__*/react.createElement("div", {
        className: "Panel__fade"
      }), /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-before"
      }), centered ? /*#__PURE__*/react.createElement("div", {
        className: "Panel__centered"
      }, children) : children, /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-after"
      }))));
    }
  }]);

  return Panel;
}(react.Component);

defineProperty(Panel, "defaultProps", {
  children: '',
  centered: false
});

var Panel$1 = withAdaptivity(withPlatform(Panel), {
  sizeX: true
});

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

var TouchRootContext = /*#__PURE__*/react.createContext(false);

function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left,
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

var hasMouse;
var hasTouchEvents;
var hasHover;

if (IS_PLATFORM_IOS) {
  hasMouse = false;
  hasHover = false;
  hasTouchEvents = true;
} else {
  hasTouchEvents = 'ontouchstart' in document;

  if (hasTouchEvents) {
    hasMouse = window.matchMedia && matchMedia('(any-pointer)').matches ? matchMedia('(any-pointer: fine)').matches : /android|mobile|tablet/i.test(navigator.userAgent);
    hasHover = hasMouse && (window.matchMedia && matchMedia('(hover)').matches ? matchMedia('(hover: hover)').matches : false);
  } else {
    hasMouse = true;
    hasHover = true;
  }
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ts = function ts() {
  return +Date.now();
};

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;
var storage = {};
/*
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 */

function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();
    delete storage[id];
  });
}

var Tappable = /*#__PURE__*/function (_Component) {
  inherits(Tappable, _Component);

  var _super = _createSuper$5(Tappable);

  function Tappable(props) {
    var _this;

    classCallCheck(this, Tappable);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "id", void 0);

    defineProperty(assertThisInitialized(_this), "isSlide", void 0);

    defineProperty(assertThisInitialized(_this), "insideTouchRoot", void 0);

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "timeout", void 0);

    defineProperty(assertThisInitialized(_this), "wavesTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onStart", function (_ref) {
      var originalEvent = _ref.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        deactivateOtherInstances();
        return;
      }

      if (_this.props.platform === ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {
        stop: _this.stop,
        activeTimeout: window.setTimeout(_this.start, ACTIVE_DELAY)
      };
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (_ref2) {
      var originalEvent = _ref2.originalEvent,
          shiftXAbs = _ref2.shiftXAbs,
          shiftYAbs = _ref2.shiftYAbs;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (shiftXAbs > 20 || shiftYAbs > 20) {
        _this.isSlide = true;

        _this.stop();
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (_ref3) {
      var originalEvent = _ref3.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();
      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;

        _this.stop();

        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);

          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    });

    defineProperty(assertThisInitialized(_this), "onDown", function (e) {
      if (_this.props.platform === ANDROID) {
        var _getOffsetRect = getOffsetRect(_this.container),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = coordX(e) - left;
        var y = coordY(e) - top;
        var key = 'wave' + Date.now().toString();

        _this.setState(function (state) {
          return {
            clicks: _objectSpread$4(_objectSpread$4({}, state.clicks), {}, defineProperty({}, key, {
              x: x,
              y: y
            }))
          };
        });

        _this.wavesTimeout = window.setTimeout(function () {
          _this.setState(function (state) {
            var clicks = _objectSpread$4({}, state.clicks);

            delete clicks[key];
            return {
              clicks: clicks
            };
          });
        }, 225);
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnter", function () {
      _this.setState({
        hovered: true
      });
    });

    defineProperty(assertThisInitialized(_this), "onLeave", function () {
      _this.setState({
        hovered: false
      });
    });

    defineProperty(assertThisInitialized(_this), "start", function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }

      deactivateOtherInstances(_this.id);
    });

    defineProperty(assertThisInitialized(_this), "stop", function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }

      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    });

    defineProperty(assertThisInitialized(_this), "getStorage", function () {
      return storage[_this.id];
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    defineProperty(assertThisInitialized(_this), "containerHasTransparentBackground", function () {
      if (!_this.container) {
        return true;
      }

      if (!_this.container.style.backgroundColor) {
        return true;
      }

      if (_this.container.style.backgroundColor === 'transparent') {
        return true;
      }

      return false;
    });

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    _this.isSlide = false;
    return _this;
  }

  createClass(Tappable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);
        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          clicks = _this$state.clicks,
          active = _this$state.active,
          hovered = _this$state.hovered;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Component = _this$props.Component,
          activeEffectDelay = _this$props.activeEffectDelay,
          stopPropagation = _this$props.stopPropagation,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["children", "className", "Component", "activeEffectDelay", "stopPropagation", "getRootRef", "platform"]);

      var hoverClassModificator = this.containerHasTransparentBackground() ? 'shadowHovered' : 'opacityHovered';
      var classes = classNames(getClassname('Tappable', platform), className, defineProperty({
        'Tappable--active': active,
        'Tappable--inactive': !active
      }, "Tappable--".concat(hoverClassModificator), hasHover && hovered));
      var RootComponent = restProps.disabled ? Component : Touch;
      var props = {};

      if (!restProps.disabled) {
        props.Component = Component;
        /* eslint-disable */

        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
        props.onEnter = this.onEnter;
        props.onLeave = this.onLeave;
        /* eslint-enable */

        props.getRootRef = this.getRef;
      } else {
        props.ref = this.getRef;
      }

      return /*#__PURE__*/react.createElement(TouchRootContext.Consumer, null, function (insideTouchRoot) {
        _this2.insideTouchRoot = insideTouchRoot;
        return /*#__PURE__*/react.createElement(RootComponent, _extends_1({}, restProps, {
          className: classes
        }, props), children, platform === ANDROID && /*#__PURE__*/react.createElement("span", {
          className: "Tappable__waves"
        }, Object.keys(clicks).map(function (k) {
          return /*#__PURE__*/react.createElement("span", {
            className: "Tappable__wave",
            style: {
              top: clicks[k].y,
              left: clicks[k].x
            },
            key: k
          });
        })), hasHover && /*#__PURE__*/react.createElement("span", {
          className: "Tappable__hoverShadow"
        }));
      });
    }
  }]);

  return Tappable;
}(react.Component);

defineProperty(Tappable, "defaultProps", {
  Component: 'div',
  role: 'button',
  stopPropagation: false,
  disabled: false,
  activeEffectDelay: ACTIVE_EFFECT_DELAY
});

var Tappable$1 = withPlatform(Tappable);

function usePlatform() {
  var ssrContext = react.useContext(SSRContext);

  var _useContext = react.useContext(ConfigProviderContext),
      platform = _useContext.platform;

  return ssrContext.platform || platform;
}

var PanelHeaderButton = function PanelHeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      label = _ref.label,
      restProps = objectWithoutProperties(_ref, ["className", "children", "primary", "label"]);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassname('PanelHeaderButton', platform), className, {
      'PanelHeaderButton--primary': primary,
      'PanelHeaderButton--primitive': isPrimitive
    })
  }), children, label);
};

PanelHeaderButton.defaultProps = {
  primary: false
};

function withPanelContext(Component) {
  function WithPanelContext(props) {
    var _useContext = react.useContext(PanelContext),
        panel = _useContext.panel; // @ts-ignore


    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      panel: panel
    }));
  }

  return WithPanelContext;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FixedLayout = /*#__PURE__*/function (_React$Component) {
  inherits(FixedLayout, _React$Component);

  var _super = _createSuper$6(FixedLayout);

  function FixedLayout() {
    var _this;

    classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      position: 'absolute',
      top: null,
      width: ''
    });

    defineProperty(assertThisInitialized(_this), "el", void 0);

    defineProperty(assertThisInitialized(_this), "onMountResizeTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onViewTransitionStart", function (e) {
      var panelScroll = e.detail.scrolls[_this.props.panel] || 0;

      _this.setState({
        position: 'absolute',
        top: _this.el.offsetTop + panelScroll,
        width: ''
      });
    });

    defineProperty(assertThisInitialized(_this), "onViewTransitionEnd", function () {
      _this.setState({
        position: null,
        top: null
      });

      _this.doResize();
    });

    defineProperty(assertThisInitialized(_this), "doResize", function () {
      var colRef = _this.props.splitCol.colRef;

      if (colRef && colRef.current) {
        var node = colRef.current;
        var width = node.offsetWidth;

        _this.setState({
          width: "".concat(width, "px"),
          position: null
        });
      } else {
        _this.setState({
          width: '',
          position: null
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (element) {
      _this.el = element;
      setRef(element, _this.props.getRootRef);
    });

    return _this;
  }

  createClass(FixedLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.onMountResizeTimeout = setTimeout(function () {
        return _this2.doResize();
      });
      window.addEventListener('resize', this.doResize);
      this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.onMountResizeTimeout);
      window.removeEventListener('resize', this.doResize);
      this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          vertical = _this$props.vertical,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          filled = _this$props.filled,
          splitCol = _this$props.splitCol,
          panel = _this$props.panel,
          restProps = objectWithoutProperties(_this$props, ["className", "children", "style", "vertical", "getRootRef", "platform", "filled", "splitCol", "panel"]);

      return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('FixedLayout', platform), {
          'FixedLayout--filled': filled
        }, "FixedLayout--".concat(vertical), className),
        style: _objectSpread$5(_objectSpread$5({}, style), this.state)
      }), /*#__PURE__*/react.createElement("div", {
        className: "FixedLayout__in"
      }, children));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return FixedLayout;
}(react.Component);

defineProperty(FixedLayout, "contextTypes", {
  document: propTypes.any
});

var FixedLayout$1 = withContext(withPlatform(withPanelContext(FixedLayout)), SplitContext, 'splitCol');

var Separator = function Separator(_ref) {
  var className = _ref.className,
      wide = _ref.wide,
      expanded = _ref.expanded,
      restProps = objectWithoutProperties(_ref, ["className", "wide", "expanded"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Separator', platform), className, {
      'Separator--wide': wide
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: classNames('Separator__in', {
      'Separator__in--expanded': expanded
    })
  }));
};

var Separator$1 = /*#__PURE__*/react.memo(Separator);

var PanelHeader = function PanelHeader(_ref) {
  var className = _ref.className,
      left = _ref.left,
      addon = _ref.addon,
      children = _ref.children,
      right = _ref.right,
      separator = _ref.separator,
      visor = _ref.visor,
      transparent = _ref.transparent,
      shadow = _ref.shadow,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["className", "left", "addon", "children", "right", "separator", "visor", "transparent", "shadow", "getRef", "getRootRef", "sizeX"]);

  var platform = usePlatform();

  var _useContext = react.useContext(ConfigProviderContext),
      webviewType = _useContext.webviewType;

  var needShadow = shadow && sizeX === SizeType.REGULAR;
  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('PanelHeader', platform), {
      'PanelHeader--trnsp': transparent,
      'PanelHeader--shadow': needShadow,
      'PanelHeader--vis': visor,
      'PanelHeader--sep': separator && visor,
      'PanelHeader--vkapps': webviewType === WebviewType.VKAPPS,
      'PanelHeader--no-left': left === undefined,
      'PanelHeader--no-right': right === undefined
    }, className),
    ref: getRootRef
  }), /*#__PURE__*/react.createElement(FixedLayout$1, {
    vertical: "top",
    className: classNames('PanelHeader__fixed', {
      'PanelHeader__fixed--shadow': needShadow
    }),
    getRootRef: getRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__left"
  }, left, platform !== ANDROID && addon), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__content"
  }, isPrimitive ? /*#__PURE__*/react.createElement("span", null, children) : children), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__right"
  }, webviewType !== WebviewType.VKAPPS && right))), separator && visor && /*#__PURE__*/react.createElement(Separator$1, {
    className: sizeX === SizeType.COMPACT ? 'PanelHeader__separator' : '',
    expanded: sizeX === SizeType.REGULAR
  }));
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
};
var PanelHeader$1 = withAdaptivity(PanelHeader, {
  sizeX: true
});

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

var sprite = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSpriteSymbol = addSpriteSymbol;
exports.useIsomorphicLayoutEffect = void 0;

var _browserSprite = _interopRequireDefault(browserSprite);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite$1;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite$1 = new _browserSprite.default({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite$1.attach(spriteNode);
    } else {
      browserSprite$1.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite$1 = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite$1) {
    browserSprite$1.add(symbol);
  }
}

var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;

});

var SvgIcon_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIcon = void 0;

var _react = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var svgStyle = {
  display: 'block'
};

var SvgIcon = function SvgIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      viewBox = _ref.viewBox,
      id = _ref.id,
      className = _ref.className,
      style = _ref.style,
      fill = _ref.fill,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["width", "height", "viewBox", "id", "className", "style", "fill", "getRootRef"]);

  var size = Math.max(width, height);
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: "Icon Icon--".concat(size, " Icon--w-").concat(width, " Icon--h-").concat(height, " Icon--").concat(id, " ").concat(className),
    style: _objectSpread({}, style, {
      width: width,
      height: height
    })
  }), /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: viewBox,
    width: width,
    height: height,
    style: svgStyle
  }, /*#__PURE__*/_react.default.createElement("use", {
    xlinkHref: "#".concat(id),
    style: {
      fill: 'currentColor',
      color: fill
    }
  })));
};

exports.SvgIcon = SvgIcon;
SvgIcon.defaultProps = {
  className: '',
  style: {}
};

});

var Caption = function Caption(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      level = _ref.level,
      caps = _ref.caps,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "level", "caps"]);

  var platform = usePlatform();
  var captionWeight = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      captionWeight = 'medium';
    }
  }

  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Caption', platform), "Caption--w-".concat(captionWeight), "Caption--l-".concat(level), {
      'Caption--caps': caps
    }, className)
  }), children);
};

var Subhead = function Subhead(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      Component = _ref.Component,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "Component"]);

  var platform = usePlatform();
  var SubheadComponent = Component;
  var subheadWeight = platform === ANDROID && weight === 'semibold' ? 'medium' : weight;

  if (!Component) {
    SubheadComponent = platform === ANDROID ? 'h4' : 'h5';
  }

  return /*#__PURE__*/react.createElement(SubheadComponent, _extends_1({}, restProps, {
    className: classNames(getClassname('Subhead', platform), "Subhead--w-".concat(subheadWeight), className)
  }), children);
};

var Headline = function Headline(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      Component = _ref.Component,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "Component"]);

  var platform = usePlatform();
  var HeadlineComponent = Component;

  if (!Component) {
    HeadlineComponent = platform === ANDROID ? 'h3' : 'h4';
  }

  var headlineWeight = weight;

  if (platform === ANDROID && weight === 'semibold') {
    headlineWeight = 'medium';
  }

  return /*#__PURE__*/react.createElement(HeadlineComponent, _extends_1({}, restProps, {
    className: classNames(getClassname('Headline', platform), "Headline--w-".concat(headlineWeight), className)
  }), children);
};

var getComponent = function getComponent(level) {
  if (!level) {
    return 'div';
  }

  return 'h' + level;
};

var getAndroidTitleWeight = function getAndroidTitleWeight(level, weight) {
  if (level === '3') {
    return weight === 'regular' ? weight : 'medium';
  }

  if (level === '2' && weight === 'semibold') {
    return 'medium';
  }

  if (weight === 'heavy') {
    return 'bold';
  }

  return weight;
};

var Title = function Title(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      level = _ref.level,
      Component = _ref.Component,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "level", "Component"]);

  var platform = usePlatform();
  var TitleComponent = Component || getComponent(level);
  var titleWeight = platform === ANDROID ? getAndroidTitleWeight(level, weight) : weight;

  if (platform === ANDROID && level === '3') {
    return /*#__PURE__*/react.createElement(Headline, _extends_1({
      Component: TitleComponent
    }, restProps, {
      weight: titleWeight,
      className: className
    }), children);
  }

  return /*#__PURE__*/react.createElement(TitleComponent, _extends_1({}, restProps, {
    className: classNames(getClassname('Title', platform), "Title--w-".concat(titleWeight), "Title--l-".concat(level), className)
  }), children);
};

var done = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'done_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="done_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M6 10.2L3.5 7.7a.99.99 0 10-1.4 1.4l3.193 3.193a1 1 0 001.414 0L14.3 4.7a.99.99 0 00-1.4-1.4L6 10.2z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Done = function Icon16Done(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Done.mountIcon = mountIcon;
var _default = Icon16Done;
exports.default = _default;

});

var SelectedIcon = /*@__PURE__*/getDefaultExportFromCjs(done);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

/*
 * Задает стиль трансформации элементу с учетом префиксов
 */
function setTransformStyle(element, transform) {
  element.style.transform = transform;
  element.style.webkitTransform = transform;
}

var ModalRootContext = /*#__PURE__*/react.createContext({
  updateModalHeight: function updateModalHeight() {
    return undefined;
  }
});

var ModalType;

(function (ModalType) {
  ModalType["PAGE"] = "page";
  ModalType["CARD"] = "card";
})(ModalType || (ModalType = {}));

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function numberInRange(number, range) {
  return number >= range[0] && number <= range[1];
}

function rangeTranslate(number) {
  return Math.max(0, Math.min(98, number));
}

var ModalRootTouch = /*#__PURE__*/function (_Component) {
  inherits(ModalRootTouch, _Component);

  var _super = _createSuper$7(ModalRootTouch);

  function ModalRootTouch(props) {
    var _this;

    classCallCheck(this, ModalRootTouch);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "modalsState", void 0);

    defineProperty(assertThisInitialized(_this), "documentScrolling", void 0);

    defineProperty(assertThisInitialized(_this), "activeTransitions", void 0);

    defineProperty(assertThisInitialized(_this), "maskElementRef", void 0);

    defineProperty(assertThisInitialized(_this), "maskAnimationFrame", void 0);

    defineProperty(assertThisInitialized(_this), "modalRootContext", void 0);

    defineProperty(assertThisInitialized(_this), "frameIds", void 0);

    defineProperty(assertThisInitialized(_this), "preventTouch", function (event) {
      if (!event) {
        return false;
      }

      while (event.originalEvent) {
        event = event.originalEvent;
      }

      if (event.preventDefault) {
        event.preventDefault();
      }

      return false;
    });

    defineProperty(assertThisInitialized(_this), "updateModalHeight", function () {
      var _this$state = _this.state,
          activeModal = _this$state.activeModal,
          nextModal = _this$state.nextModal;
      var modalId = activeModal || nextModal;
      var modalState = modalId ? _this.modalsState[modalId] : undefined;

      if (modalState && modalState.type === ModalType.PAGE && modalState.dynamicContentHeight) {
        if (_this.state.switching) {
          _this.waitTransitionFinish(modalState, function () {
            requestAnimationFrame(function () {
              return _this.checkPageContentHeight();
            });
          });
        } else {
          requestAnimationFrame(function () {
            return _this.checkPageContentHeight();
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onTouchMove", function (e) {
      if (_this.state.switching) {
        return;
      }

      var activeModal = _this.state.activeModal || _this.state.nextModal;

      if (!activeModal) {
        return;
      }

      var modalState = _this.modalsState[activeModal];

      if (modalState.type === ModalType.PAGE) {
        return _this.onPageTouchMove(e, modalState);
      }

      if (modalState.type === ModalType.CARD) {
        return _this.onCardTouchMove(e, modalState);
      }
    });

    defineProperty(assertThisInitialized(_this), "onTouchEnd", function (e) {
      var activeModal = _this.state.activeModal || _this.state.nextModal;

      if (!activeModal) {
        return;
      }

      var modalState = _this.modalsState[activeModal];

      if (modalState.type === ModalType.PAGE) {
        return _this.onPageTouchEnd(e, modalState);
      }

      if (modalState.type === ModalType.CARD) {
        return _this.onCardTouchEnd(modalState);
      }
    });

    defineProperty(assertThisInitialized(_this), "onScroll", function (e) {
      var activeModal = _this.state.activeModal;
      var target = e.target;

      if (activeModal && target.closest('.ModalPage__content')) {
        var modalState = _this.modalsState[activeModal];
        modalState.contentScrolled = true;
        clearTimeout(modalState.contentScrollStopTimeout);
        modalState.contentScrollStopTimeout = window.setTimeout(function () {
          if (modalState.contentScrolled) {
            modalState.contentScrolled = false;
          }
        }, 250);
      }
    });

    defineProperty(assertThisInitialized(_this), "prevNextSwitchEndHandler", function () {
      _this.activeTransitions = Math.max(0, _this.activeTransitions - 1);

      if (_this.activeTransitions > 0) {
        return;
      }

      var activeModal = _this.state.nextModal;
      var newState = {
        prevModal: null,
        nextModal: null,
        visibleModals: [activeModal],
        activeModal: activeModal,
        animated: false,
        switching: false
      };

      if (!activeModal) {
        newState.history = [];
      }

      _this.setState(newState);
    });

    defineProperty(assertThisInitialized(_this), "doCloseModal", function (modalState) {
      if (isFunction(modalState.onClose)) {
        modalState.onClose();
      } else if (isFunction(_this.props.onClose)) {
        _this.props.onClose(modalState.id);
      } else {
        console.error('[ModalRoot] onClose is undefined');
      }
    });

    defineProperty(assertThisInitialized(_this), "onMaskClick", function () {
      _this.triggerActiveModalClose();
    });

    var _activeModal = props.activeModal;
    _this.state = {
      activeModal: null,
      prevModal: null,
      nextModal: _activeModal,
      visibleModals: _activeModal ? [_activeModal] : [],
      animated: !!_activeModal,
      switching: false,
      history: _activeModal ? [_activeModal] : [],
      isBack: false,
      inited: false,
      touchDown: false,
      dragging: false
    };
    _this.activeTransitions = 0;
    _this.maskElementRef = /*#__PURE__*/react.createRef();

    _this.initModalsState();

    _this.modalRootContext = {
      updateModalHeight: _this.updateModalHeight
    };
    _this.frameIds = {};
    return _this;
  }

  createClass(ModalRootTouch, [{
    key: "initModalsState",
    value: function initModalsState() {
      this.modalsState = this.modals.reduce(function (acc, Modal) {
        var modalProps = Modal.props;
        var state = {
          id: Modal.props.id,
          onClose: Modal.props.onClose,
          dynamicContentHeight: !!modalProps.dynamicContentHeight
        }; // ModalPage props

        if (typeof modalProps.settlingHeight === 'number') {
          state.settlingHeight = modalProps.settlingHeight;
        }

        acc[state.id] = state;
        return acc;
      }, {});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initActiveModal();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleDocumentScrolling(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.activeModal !== prevProps.activeModal && !this.state.switching) {
        var nextModal = this.props.activeModal;
        var prevModal = prevProps.activeModal;

        if (nextModal !== null && !this.modalsState[nextModal]) {
          return console.warn("[ModalRoot.componentDidUpdate] nextModal ".concat(nextModal, " not found"));
        }

        var history = toConsumableArray(this.state.history);

        var isBack = false;

        if (nextModal === null) {
          history = [];
        } else if (history.includes(nextModal)) {
          history = history.splice(0, history.indexOf(nextModal) + 1);
          isBack = true;
        } else {
          history.push(nextModal);
        }

        return this.setState({
          activeModal: null,
          nextModal: nextModal,
          prevModal: prevModal,
          visibleModals: [nextModal, prevModal],
          history: history,
          isBack: isBack,
          animated: true,
          inited: false,
          switching: false
        }, function () {
          if (nextModal === null) {
            _this2.closeActiveModal();
          } else {
            _this2.initActiveModal();
          }
        });
      }

      if (this.state.switching && !prevState.switching) {
        requestAnimationFrame(function () {
          return _this2.switchPrevNext();
        });
      }

      if (!this.state.activeModal && !this.state.prevModal && !this.state.nextModal) {
        this.toggleDocumentScrolling(true);
      } else {
        this.toggleDocumentScrolling(false);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement instanceof HTMLElement) {
        this.document.activeElement.blur();
      }
    }
    /* Отключает скролл документа */

  }, {
    key: "toggleDocumentScrolling",
    value: function toggleDocumentScrolling(enabled) {
      if (this.documentScrolling === enabled) {
        return;
      }

      this.documentScrolling = enabled;

      if (enabled) {
        // Здесь нужен последний аргумент с такими же параметрами, потому что
        // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
        // https://github.com/VKCOM/VKUI/issues/444
        // @ts-ignore (В интерфейсе EventListenerOptions нет поля passive)
        this.window.removeEventListener('touchmove', this.preventTouch, {
          passive: false
        });
      } else {
        this.window.addEventListener('touchmove', this.preventTouch, {
          passive: false
        });
      }
    }
  }, {
    key: "pickModal",
    value: function pickModal(modalId) {
      return this.document.getElementById('modal-' + modalId);
    }
    /**
     * Инициализирует модалку перед анимацией открытия
     */

  }, {
    key: "initActiveModal",
    value: function initActiveModal() {
      var activeModal = this.state.activeModal || this.state.nextModal;

      if (!activeModal) {
        return;
      }

      var modalElement = this.pickModal(activeModal);
      var modalState = this.modalsState[activeModal];

      if (modalElement.querySelector('.ModalPage')) {
        modalState.type = ModalType.PAGE;
      } else if (modalElement.querySelector('.ModalCard')) {
        modalState.type = ModalType.CARD;
      }

      switch (modalState.type) {
        case ModalType.PAGE:
          modalState.settlingHeight = modalState.settlingHeight || 75;
          this.initPageModal(modalState, modalElement);
          break;

        case ModalType.CARD:
          this.initCardModal(modalState, modalElement);
          break;

        default:
          console.warn('[ModalRoot.initActiveModal] modalState.type is unknown');
      }

      this.setState({
        inited: true,
        switching: true
      });
    }
  }, {
    key: "initPageModal",
    value: function initPageModal(modalState, modalElement) {
      var contentElement = modalElement.querySelector('.ModalPage__content');
      var contentHeight = contentElement.firstElementChild.offsetHeight;
      var prevTranslateY = modalState.translateY;
      modalState.expandable = contentHeight > contentElement.clientHeight;
      modalState.modalElement = modalElement;
      modalState.innerElement = modalElement.querySelector('.ModalPage__in-wrap');
      modalState.headerElement = modalElement.querySelector('.ModalPage__header');
      modalState.contentElement = modalElement.querySelector('.ModalPage__content');
      modalState.footerElement = modalElement.querySelector('.ModalPage__footer');
      var collapsed = false;
      var expanded = false;
      var translateYFrom;
      var translateY;
      var expandedRange;
      var collapsedRange;
      var hiddenRange;

      if (modalState.expandable) {
        translateYFrom = 100 - modalState.settlingHeight;
        var shiftHalf = translateYFrom / 2;
        var visiblePart = 100 - translateYFrom;
        expandedRange = [0, shiftHalf];
        collapsedRange = [shiftHalf, translateYFrom + visiblePart / 4];
        hiddenRange = [translateYFrom + visiblePart / 4, 100];
        collapsed = translateYFrom > 0;
        expanded = translateYFrom <= 0;
        translateY = translateYFrom;
      } else {
        var headerHeight = modalState.headerElement.offsetHeight;
        var height = contentHeight + headerHeight;
        translateYFrom = 100 - height / modalState.innerElement.parentElement.offsetHeight * 100;
        translateY = translateYFrom;
        expandedRange = [translateY, translateY + 25];
        collapsedRange = [translateY + 25, translateY + 25];
        hiddenRange = [translateY + 25, translateY + 100];
      } // Если модалка может открываться на весь экран, и новый сдвиг больше предыдущего, то откроем её на весь экран


      if (modalState.expandable && translateY > prevTranslateY) {
        translateY = 0;
      }

      modalState.expandedRange = expandedRange;
      modalState.collapsedRange = collapsedRange;
      modalState.hiddenRange = hiddenRange;
      modalState.translateY = translateY;
      modalState.translateYFrom = translateYFrom;
      modalState.collapsed = collapsed;
      modalState.expanded = expanded;
    }
  }, {
    key: "initCardModal",
    value: function initCardModal(modalState, modalElement) {
      modalState.modalElement = modalElement;
      modalState.innerElement = modalElement.querySelector('.ModalCard__in');
      modalState.translateY = 0;
    }
  }, {
    key: "checkPageContentHeight",
    value: function checkPageContentHeight() {
      var activeModal = this.state.activeModal;
      var modalElement = this.pickModal(activeModal);

      if (modalElement) {
        var modalState = this.modalsState[activeModal];

        var prevModalState = _objectSpread$6({}, modalState);

        this.initPageModal(modalState, modalElement);

        var currentModalState = _objectSpread$6({}, modalState);

        var needAnimate = false;

        if (prevModalState.expandable === currentModalState.expandable) {
          if (prevModalState.translateYFrom !== currentModalState.translateYFrom) {
            needAnimate = true;
          }
        } else {
          needAnimate = true;
        }

        if (needAnimate) {
          this.animateTranslate(modalState, modalState.translateY);
          this.animatePageHeader(modalState);
        }
      }
    }
  }, {
    key: "closeActiveModal",
    value: function closeActiveModal() {
      var prevModal = this.state.prevModal;

      if (!prevModal) {
        return console.warn("[ModalRoot.closeActiveModal] prevModal is ".concat(prevModal));
      }

      var prevModalState = this.modalsState[prevModal];
      this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);
      this.animateTranslate(prevModalState, 100);
      this.setMaskOpacity(prevModalState, 0);
    }
  }, {
    key: "onPageTouchMove",
    value: function onPageTouchMove(event, modalState) {
      var shiftY = event.shiftY,
          startT = event.startT,
          originalEvent = event.originalEvent;
      var target = originalEvent.target;

      if (!event.isY) {
        if (target.closest('.ModalPage')) {
          originalEvent.preventDefault();
        }

        return;
      }

      if (!target.closest('.ModalPage__in')) {
        return originalEvent.preventDefault();
      }

      originalEvent.stopPropagation();
      var expandable = modalState.expandable,
          contentScrolled = modalState.contentScrolled,
          collapsed = modalState.collapsed,
          expanded = modalState.expanded;

      if (!this.state.touchDown) {
        modalState.touchStartTime = startT;
        modalState.touchStartContentScrollTop = modalState.contentElement.scrollTop;
        this.setState({
          touchDown: true
        });
      }

      if (contentScrolled) {
        return;
      }

      if (modalState.touchMovePositive === null) {
        modalState.touchMovePositive = shiftY > 0;
      }

      if (!modalState.expandable || collapsed || expanded && modalState.touchMovePositive && modalState.touchStartContentScrollTop === 0 || target.closest('.ModalPage__header')) {
        originalEvent.preventDefault();

        if (!expandable && shiftY < 0) {
          return;
        }

        !this.state.dragging && this.setState({
          dragging: true
        });
        var shiftYPercent = shiftY / this.window.innerHeight * 100;
        var shiftYCurrent = rubber(shiftYPercent, 72, 0.8, this.props.platform === ANDROID);
        modalState.touchShiftYPercent = shiftYPercent;
        modalState.translateYCurrent = rangeTranslate(modalState.translateY + shiftYCurrent);
        this.animateTranslate(modalState, modalState.translateYCurrent);
        this.setMaskOpacity(modalState);
      }
    }
  }, {
    key: "onCardTouchMove",
    value: function onCardTouchMove(event, modalState) {
      var originalEvent = event.originalEvent,
          shiftY = event.shiftY,
          startT = event.startT;
      var target = originalEvent.target;

      if (target.closest('.ModalCard__container')) {
        if (!this.state.touchDown) {
          modalState.touchStartTime = startT;
          this.setState({
            touchDown: true,
            dragging: true
          });
        }

        var shiftYPercent = shiftY / modalState.innerElement.offsetHeight * 100;
        var shiftYCurrent = rubber(shiftYPercent, 72, 1.2, this.props.platform === ANDROID);
        modalState.touchShiftYPercent = shiftYPercent;
        modalState.translateYCurrent = Math.max(0, modalState.translateY + shiftYCurrent);
        this.animateTranslate(modalState, modalState.translateYCurrent);
        this.setMaskOpacity(modalState);
      }
    }
  }, {
    key: "onPageTouchEnd",
    value: function onPageTouchEnd(event, modalState) {
      var _this3 = this;

      var startY = event.startY,
          shiftY = event.shiftY;
      modalState.contentScrolled = false;
      modalState.touchMovePositive = null;
      var next;

      if (this.state.dragging) {
        var shiftYEndPercent = (startY + shiftY) / this.window.innerHeight * 100;
        var translateY = modalState.translateYCurrent;
        var expectTranslateY = translateY / (Date.now() - modalState.touchStartTime.getTime()) * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
        translateY = rangeTranslate(translateY + expectTranslateY);

        if (numberInRange(translateY, modalState.expandedRange)) {
          translateY = modalState.expandedRange[0];
        } else if (numberInRange(translateY, modalState.collapsedRange)) {
          translateY = modalState.translateYFrom;
        } else if (numberInRange(translateY, modalState.hiddenRange)) {
          translateY = 100;
        } else {
          translateY = modalState.translateYFrom;
        }

        if (translateY !== 100 && shiftYEndPercent >= 75) {
          translateY = 100;
        }

        modalState.translateY = translateY;
        modalState.translateYCurrent = translateY;
        modalState.collapsed = translateY > 0 && translateY < shiftYEndPercent;
        modalState.expanded = translateY === 0;
        modalState.hidden = translateY === 100;

        if (modalState.hidden) {
          this.doCloseModal(modalState);
        }

        next = function next() {
          if (!modalState.hidden) {
            _this3.animateTranslate(modalState, modalState.translateY);
          }

          _this3.setMaskOpacity(modalState);
        };
      }

      this.setState({
        touchDown: false,
        dragging: false
      }, next);
    }
  }, {
    key: "onCardTouchEnd",
    value: function onCardTouchEnd(modalState) {
      var _this4 = this;

      var next;

      if (this.state.dragging) {
        var translateY = modalState.translateYCurrent;
        var expectTranslateY = translateY / (Date.now() - modalState.touchStartTime.getTime()) * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
        translateY = Math.max(0, translateY + expectTranslateY);

        if (translateY >= 30) {
          translateY = 100;
        } else {
          translateY = 0;
        }

        modalState.translateY = translateY;
        modalState.hidden = translateY === 100;

        if (modalState.hidden) {
          this.doCloseModal(modalState);
        }

        next = function next() {
          if (!modalState.hidden) {
            _this4.animateTranslate(modalState, modalState.translateY);
          }

          _this4.setMaskOpacity(modalState);
        };
      }

      this.setState({
        touchDown: false,
        dragging: false
      }, next);
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(modalState, eventHandler) {
      var onceHandler; {
        setTimeout(eventHandler, this.props.platform === ANDROID ? 320 : 400);
      }
    }
  }, {
    key: "switchPrevNext",
    value: function switchPrevNext() {
      var _this5 = this;

      var _this$state2 = this.state,
          prevModal = _this$state2.prevModal,
          nextModal = _this$state2.nextModal;
      var prevModalState = this.modalsState[prevModal];
      var nextModalState = this.modalsState[nextModal];

      if (!prevModalState && !nextModalState) {
        return console.warn("[ModalRoot.switchPrevNext] prevModal is ".concat(prevModal, ", nextModal is ").concat(nextModal));
      }

      var prevIsPage = !!prevModalState && prevModalState.type === ModalType.PAGE;
      var prevIsCard = !!prevModalState && prevModalState.type === ModalType.CARD;
      var nextIsPage = !!nextModalState && nextModalState.type === ModalType.PAGE;
      var nextIsCard = !!nextModalState && nextModalState.type === ModalType.CARD; // Ждём полного скрытия предыдущей модалки

      if (prevModalState && (nextIsCard || prevIsCard && nextIsPage)) {
        this.waitTransitionFinish(prevModalState, function () {
          _this5.activeTransitions += 1;

          _this5.waitTransitionFinish(nextModalState, _this5.prevNextSwitchEndHandler);

          _this5.animateTranslate(nextModalState, nextModalState.translateY);
        });
        return this.animateTranslate(prevModalState, 100);
      }

      if (prevModalState && nextIsPage) {
        this.activeTransitions += 1;
        this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);

        if (prevIsPage && prevModalState.translateY <= nextModalState.translateYFrom && !this.state.isBack) {
          this.animateTranslate(prevModalState, nextModalState.translateYFrom + 10);
        } else {
          this.animateTranslate(prevModalState, 100);
        }
      }

      this.activeTransitions += 1;
      this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler);
      this.animateTranslate(nextModalState, nextModalState.translateY);
    }
  }, {
    key: "animateTranslate",

    /**
     * Анимирует сдвиг модалки
     *
     * @param {ModalsStateEntry} modalState
     * @param {number} percent Процент сдвига: 0 – полностью открыта, 100 – полностью закрыта
     */
    value: function animateTranslate(modalState, percent) {
      var frameId = "animateTranslateFrame".concat(modalState.id);
      cancelAnimationFrame(this.frameIds[frameId]);
      this.frameIds[frameId] = requestAnimationFrame(function () {
        setTransformStyle(modalState.innerElement, "translateY(".concat(percent, "%)"));

        if (modalState.type === ModalType.PAGE && modalState.footerElement) {
          var footerHeight = modalState.footerElement.offsetHeight;
          var factor = modalState.innerElement.offsetHeight * (percent / 100);
          setTransformStyle(modalState.footerElement, "translateY(calc(".concat(footerHeight, "px * -").concat(factor / footerHeight, "))"));
        }
      });

      if (modalState.type === ModalType.PAGE && modalState.expandable) {
        this.animatePageHeader(modalState, percent);
      }
    }
    /* Анимирует тень шапки */

  }, {
    key: "animatePageHeader",
    value: function animatePageHeader(modalState) {
      var currentPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (currentPercent === null) {
        currentPercent = modalState.translateY;
      }

      var headerOpenPercent = currentPercent < 15 ? Math.max(0, 15 - currentPercent) / 15 : 0;
      requestAnimationFrame(function () {
        var headerShadow = modalState.headerElement.querySelector('.ModalPageHeader__shadow');

        if (headerShadow) {
          headerShadow.style.opacity = headerOpenPercent.toString();
        }
      });
    }
    /* Устанавливает прозрачность для полупрозрачной подложки */

  }, {
    key: "setMaskOpacity",
    value: function setMaskOpacity(modalState) {
      var _this6 = this;

      var forceOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (forceOpacity === null && this.state.history[0] !== modalState.id) {
        return;
      }

      cancelAnimationFrame(this.maskAnimationFrame);
      this.maskAnimationFrame = requestAnimationFrame(function () {
        if (_this6.maskElementRef.current) {
          var translateY = modalState.translateY,
              translateYCurrent = modalState.translateYCurrent;
          var opacity = forceOpacity === null ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0 : forceOpacity;
          _this6.maskElementRef.current.style.opacity = Math.max(0, Math.min(100, opacity)).toString();
        }
      });
    }
    /**
     * Закрывает текущую модалку
     */

  }, {
    key: "triggerActiveModalClose",
    value: function triggerActiveModalClose() {
      var activeModalState = this.modalsState[this.state.activeModal];

      if (activeModalState) {
        this.doCloseModal(activeModalState);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$state3 = this.state,
          prevModal = _this$state3.prevModal,
          activeModal = _this$state3.activeModal,
          nextModal = _this$state3.nextModal,
          visibleModals = _this$state3.visibleModals,
          animated = _this$state3.animated,
          touchDown = _this$state3.touchDown,
          dragging = _this$state3.dragging,
          switching = _this$state3.switching;

      if (!activeModal && !prevModal && !nextModal && !animated) {
        return null;
      }

      return /*#__PURE__*/react.createElement(TouchRootContext.Provider, {
        value: true
      }, /*#__PURE__*/react.createElement(ModalRootContext.Provider, {
        value: this.modalRootContext
      }, /*#__PURE__*/react.createElement(Touch, {
        className: classNames(getClassname('ModalRoot', this.props.platform), {
          'ModalRoot--vkapps': this.props.configProvider.webviewType === WebviewType.VKAPPS,
          'ModalRoot--touched': touchDown,
          'ModalRoot--switching': switching
        }),
        onMove: this.onTouchMove,
        onEnd: this.onTouchEnd,
        onScroll: this.onScroll
      }, /*#__PURE__*/react.createElement("div", {
        className: "ModalRoot__mask",
        onClick: this.onMaskClick,
        ref: this.maskElementRef
      }), /*#__PURE__*/react.createElement("div", {
        className: "ModalRoot__viewport"
      }, this.modals.map(function (Modal) {
        var modalId = Modal.props.id;

        if (!visibleModals.includes(Modal.props.id)) {
          return null;
        }

        var modalState = _objectSpread$6({}, _this7.modalsState[modalId]);

        var isPage = modalState.type === ModalType.PAGE;
        var key = "modal-".concat(modalId);
        return /*#__PURE__*/react.createElement("div", {
          key: key,
          id: key,
          className: classNames('ModalRoot__modal', {
            'ModalRoot__modal--active': modalId === activeModal,
            'ModalRoot__modal--prev': modalId === prevModal,
            'ModalRoot__modal--next': modalId === nextModal,
            'ModalRoot__modal--dragging': dragging,
            'ModalRoot__modal--expandable': isPage && modalState.expandable,
            'ModalRoot__modal--expanded': isPage && modalState.expanded,
            'ModalRoot__modal--collapsed': isPage && modalState.collapsed
          })
        }, Modal);
      })))));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "modals",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return ModalRootTouch;
}(react.Component);

defineProperty(ModalRootTouch, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var ModalRootTouch$1 = withContext(withPlatform(ModalRootTouch), ConfigProviderContext, 'configProvider');

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ModalRootDesktop = /*#__PURE__*/function (_Component) {
  inherits(ModalRootDesktop, _Component);

  var _super = _createSuper$8(ModalRootDesktop);

  function ModalRootDesktop(props) {
    var _this;

    classCallCheck(this, ModalRootDesktop);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "modalsState", void 0);

    defineProperty(assertThisInitialized(_this), "maskElementRef", void 0);

    defineProperty(assertThisInitialized(_this), "maskAnimationFrame", void 0);

    defineProperty(assertThisInitialized(_this), "modalRootContext", void 0);

    defineProperty(assertThisInitialized(_this), "activeTransitions", void 0);

    defineProperty(assertThisInitialized(_this), "handleKeyDownEsc", function (e) {
      if (e.key === 'Escape') {
        _this.triggerActiveModalClose();
      }
    });

    defineProperty(assertThisInitialized(_this), "componentWillUnmount", function () {
      document.removeEventListener('keydown', _this.handleKeyDownEsc);
    });

    defineProperty(assertThisInitialized(_this), "updateModalHeight", function () {
      var _this$state = _this.state,
          activeModal = _this$state.activeModal,
          nextModal = _this$state.nextModal;
      var modalId = activeModal || nextModal;
      var modalState = modalId ? _this.modalsState[modalId] : undefined;

      if (modalState && modalState.type === ModalType.PAGE && modalState.dynamicContentHeight) {
        if (_this.state.switching) {
          _this.waitTransitionFinish(modalState, function () {
            requestAnimationFrame(function () {
              return _this.checkPageContentHeight();
            });
          });
        } else {
          requestAnimationFrame(function () {
            return _this.checkPageContentHeight();
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "prevNextSwitchEndHandler", function () {
      _this.activeTransitions = Math.max(0, _this.activeTransitions - 1);

      if (_this.activeTransitions > 0) {
        return;
      }

      var activeModal = _this.state.nextModal;
      var newState = {
        prevModal: null,
        nextModal: null,
        visibleModals: [activeModal],
        activeModal: activeModal,
        animated: false,
        switching: false
      };

      if (!activeModal) {
        newState.history = [];
      }

      _this.setState(newState);
    });

    defineProperty(assertThisInitialized(_this), "doCloseModal", function (modalState) {
      if (isFunction(modalState.onClose)) {
        modalState.onClose();
      } else if (isFunction(_this.props.onClose)) {
        _this.props.onClose(modalState.id);
      } else {
        console.error('[ModalRoot] onClose is undefined');
      }
    });

    defineProperty(assertThisInitialized(_this), "onMaskClick", function () {
      _this.triggerActiveModalClose();
    });

    var _activeModal = props.activeModal;
    _this.state = {
      activeModal: null,
      prevModal: null,
      nextModal: _activeModal,
      visibleModals: _activeModal ? [_activeModal] : [],
      animated: !!_activeModal,
      switching: false,
      history: _activeModal ? [_activeModal] : [],
      isBack: false,
      inited: false
    };
    _this.maskElementRef = /*#__PURE__*/react.createRef();
    _this.activeTransitions = 0;

    _this.initModalsState();

    _this.modalRootContext = {
      updateModalHeight: _this.updateModalHeight
    };
    return _this;
  }

  createClass(ModalRootDesktop, [{
    key: "initModalsState",
    value: function initModalsState() {
      this.modalsState = this.modals.reduce(function (acc, Modal) {
        var modalProps = Modal.props;
        var state = {
          id: Modal.props.id,
          onClose: Modal.props.onClose,
          dynamicContentHeight: !!modalProps.dynamicContentHeight
        }; // ModalPage props

        if (typeof modalProps.settlingHeight === 'number') {
          state.settlingHeight = modalProps.settlingHeight;
        }

        acc[state.id] = state;
        return acc;
      }, {});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initActiveModal();
      document.addEventListener('keydown', this.handleKeyDownEsc);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.activeModal !== prevProps.activeModal) {
        var nextModal = this.props.activeModal;
        var prevModal = prevProps.activeModal;

        if (nextModal !== null && !this.modalsState[nextModal]) {
          return console.warn("[ModalRoot.componentDidUpdate] nextModal ".concat(nextModal, " not found"));
        }

        var history = toConsumableArray(this.state.history);

        var isBack = false;

        if (nextModal === null) {
          history = [];
        } else if (history.includes(nextModal)) {
          history = history.splice(0, history.indexOf(nextModal) + 1);
          isBack = true;
        } else {
          history.push(nextModal);
        }

        return this.setState({
          activeModal: null,
          nextModal: nextModal,
          prevModal: prevModal,
          visibleModals: [nextModal, prevModal],
          history: history,
          isBack: isBack,
          animated: true,
          inited: false,
          switching: false
        }, function () {
          if (nextModal === null) {
            _this2.closeActiveModal();
          } else {
            _this2.initActiveModal();
          }
        });
      }

      if (this.state.switching && !prevState.switching) {
        requestAnimationFrame(function () {
          return _this2.switchPrevNext();
        });
      }
    }
  }, {
    key: "pickModal",
    value: function pickModal(modalId) {
      return this.document.getElementById('modal-' + modalId);
    }
    /**
     * Инициализирует модалку перед анимацией открытия
     */

  }, {
    key: "initActiveModal",
    value: function initActiveModal() {
      var activeModal = this.state.activeModal || this.state.nextModal;

      if (!activeModal) {
        return;
      }

      var modalElement = this.pickModal(activeModal);
      var modalState = this.modalsState[activeModal];

      if (modalElement.querySelector('.ModalPage')) {
        modalState.type = ModalType.PAGE;
      } else if (modalElement.querySelector('.ModalCard')) {
        modalState.type = ModalType.CARD;
      }

      switch (modalState.type) {
        case ModalType.PAGE:
          modalState.settlingHeight = modalState.settlingHeight || 75;
          this.initPageModal(modalState, modalElement);
          break;

        case ModalType.CARD:
          this.initCardModal(modalState, modalElement);
          break;

        default:
          console.warn('[ModalRoot.initActiveModal] modalState.type is unknown');
      }

      this.setState({
        inited: true,
        switching: true
      });
    }
  }, {
    key: "initPageModal",
    value: function initPageModal(modalState, modalElement) {
      modalState.modalElement = modalElement;
      modalState.innerElement = modalElement.querySelector('.ModalPage__in-wrap');
      modalState.headerElement = modalElement.querySelector('.ModalPage__header');
      modalState.contentElement = modalElement.querySelector('.ModalPage__content');
      modalState.footerElement = modalElement.querySelector('.ModalPage__footer');
    }
  }, {
    key: "initCardModal",
    value: function initCardModal(modalState, modalElement) {
      modalState.modalElement = modalElement;
      modalState.innerElement = modalElement.querySelector('.ModalCard__in');
    }
  }, {
    key: "checkPageContentHeight",
    value: function checkPageContentHeight() {
      var activeModal = this.state.activeModal;
      var modalElement = this.pickModal(activeModal);

      if (modalElement) {
        var modalState = this.modalsState[activeModal];
        this.initPageModal(modalState, modalElement);
      }
    }
  }, {
    key: "closeActiveModal",
    value: function closeActiveModal() {
      var prevModal = this.state.prevModal;

      if (!prevModal) {
        return console.warn("[ModalRoot.closeActiveModal] prevModal is ".concat(prevModal));
      }

      var prevModalState = this.modalsState[prevModal];
      this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);
      this.animateModalOpacity(prevModalState, false);
      this.setMaskOpacity(prevModalState, 0);
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(modalState, eventHandler) {
      var onceHandler; {
        setTimeout(eventHandler, this.props.platform === ANDROID ? 320 : 400);
      }
    }
  }, {
    key: "switchPrevNext",
    value: function switchPrevNext() {
      var _this3 = this;

      var _this$state2 = this.state,
          prevModal = _this$state2.prevModal,
          nextModal = _this$state2.nextModal;
      var prevModalState = this.modalsState[prevModal];
      var nextModalState = this.modalsState[nextModal];

      if (!prevModalState && !nextModalState) {
        return console.warn("[ModalRoot.switchPrevNext] prevModal is ".concat(prevModal, ", nextModal is ").concat(nextModal));
      }

      var prevIsCard = !!prevModalState && prevModalState.type === ModalType.CARD;
      var nextIsPage = !!nextModalState && nextModalState.type === ModalType.PAGE;
      var nextIsCard = !!nextModalState && nextModalState.type === ModalType.CARD; // Ждём полного скрытия предыдущей модалки

      if (prevModalState && (nextIsCard || prevIsCard && nextIsPage)) {
        this.activeTransitions += 1;
        this.waitTransitionFinish(prevModalState, function () {
          _this3.waitTransitionFinish(nextModalState, _this3.prevNextSwitchEndHandler);

          _this3.animateModalOpacity(nextModalState, true);
        });
        requestAnimationFrame(function () {
          _this3.animateModalOpacity(prevModalState, false);
        });
        return;
      }

      if (prevModalState && nextIsPage) {
        this.activeTransitions += 1;
        this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);
        requestAnimationFrame(function () {
          _this3.animateModalOpacity(prevModalState, false);
        });
      }

      this.activeTransitions += 1;
      this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler);
      requestAnimationFrame(function () {
        _this3.animateModalOpacity(nextModalState, true);
      });
    }
  }, {
    key: "animateModalOpacity",

    /* Анимирует сдивг модалки */
    value: function animateModalOpacity(modalState, display) {
      modalState.innerElement.style.opacity = display ? '1' : '0';
    }
    /* Анимирует тень шапки */

  }, {
    key: "animatePageHeader",
    value: function animatePageHeader(modalState) {
      var currentPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (currentPercent === null) {
        currentPercent = modalState.translateY;
      }

      var headerOpenPercent = currentPercent < 15 ? Math.max(0, 15 - currentPercent) / 15 : 0;
      requestAnimationFrame(function () {
        var headerShadow = modalState.headerElement.querySelector('.ModalPageHeader__shadow');

        if (headerShadow) {
          headerShadow.style.opacity = headerOpenPercent.toString();
        }
      });
    }
    /* Устанавливает прозрачность для полупрозрачной подложки */

  }, {
    key: "setMaskOpacity",
    value: function setMaskOpacity(modalState) {
      var _this4 = this;

      var forceOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (forceOpacity === null && this.state.history[0] !== modalState.id) {
        return;
      }

      cancelAnimationFrame(this.maskAnimationFrame);
      this.maskAnimationFrame = requestAnimationFrame(function () {
        if (_this4.maskElementRef.current) {
          var translateY = modalState.translateY,
              translateYCurrent = modalState.translateYCurrent;
          var opacity = forceOpacity === null ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0 : forceOpacity;
          _this4.maskElementRef.current.style.opacity = Math.max(0, Math.min(100, opacity)).toString();
        }
      });
    }
    /**
     * Закрывает текущую модалку
     */

  }, {
    key: "triggerActiveModalClose",
    value: function triggerActiveModalClose() {
      var activeModalState = this.modalsState[this.state.activeModal];

      if (activeModalState) {
        this.doCloseModal(activeModalState);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          prevModal = _this$state3.prevModal,
          activeModal = _this$state3.activeModal,
          nextModal = _this$state3.nextModal,
          visibleModals = _this$state3.visibleModals,
          animated = _this$state3.animated;

      if (!activeModal && !prevModal && !nextModal && !animated) {
        return null;
      }

      return /*#__PURE__*/react.createElement(ModalRootContext.Provider, {
        value: this.modalRootContext
      }, /*#__PURE__*/react.createElement("div", {
        className: classNames(getClassname('ModalRoot', this.props.platform), {
          'ModalRoot--vkapps': this.props.configProvider.webviewType === WebviewType.VKAPPS
        })
      }, /*#__PURE__*/react.createElement("div", {
        className: "ModalRoot__mask",
        onClick: this.onMaskClick,
        ref: this.maskElementRef
      }), /*#__PURE__*/react.createElement("div", {
        className: "ModalRoot__viewport"
      }, this.modals.map(function (Modal) {
        var modalId = Modal.props.id;

        if (!visibleModals.includes(Modal.props.id)) {
          return null;
        }

        var key = "modal-".concat(modalId);
        return /*#__PURE__*/react.createElement("div", {
          key: key,
          id: key,
          className: classNames('ModalRoot__modal', {
            'ModalRoot__modal--active': modalId === activeModal,
            'ModalRoot__modal--prev': modalId === prevModal,
            'ModalRoot__modal--next': modalId === nextModal
          })
        }, Modal);
      }))));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "modals",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return ModalRootDesktop;
}(react.Component);

defineProperty(ModalRootDesktop, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var ModalRootDesktop$1 = withContext(withPlatform(ModalRootDesktop), ConfigProviderContext, 'configProvider');

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ModalRoot = /*#__PURE__*/function (_Component) {
  inherits(ModalRoot, _Component);

  var _super = _createSuper$9(ModalRoot);

  function ModalRoot() {
    classCallCheck(this, ModalRoot);

    return _super.apply(this, arguments);
  }

  createClass(ModalRoot, [{
    key: "render",
    value: function render() {
      var viewWidth = this.props.viewWidth;
      var isDesktop = viewWidth >= ViewWidth.TABLET;
      var RootComponent = isDesktop ? ModalRootDesktop$1 : ModalRootTouch$1;
      return /*#__PURE__*/react.createElement(RootComponent, this.props);
    }
  }]);

  return ModalRoot;
}(react.Component);

var ModalRoot$1 = withAdaptivity(ModalRoot, {
  viewWidth: true
});

var Text = function Text(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight"]);

  var platform = usePlatform();
  var textWeight = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      textWeight = 'medium';
    }
  }

  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Text', platform), "Text--w-".concat(textWeight), className)
  }), children);
};

var getContent = function getContent(size, children, hasIcons, sizeY, platform) {
  switch (size) {
    case 'l':
      return sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Text, {
        weight: "medium",
        className: "Button__content"
      }, children) : /*#__PURE__*/react.createElement(Title, {
        level: "3",
        weight: "medium",
        Component: "div",
        className: "Button__content"
      }, children);

    case 'm':
      return sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Subhead, {
        weight: "medium",
        className: "Button__content",
        Component: "div"
      }, children) : /*#__PURE__*/react.createElement(Text, {
        weight: "medium",
        className: "Button__content"
      }, children);

    case 's':
    default:
      if (hasIcons) {
        return /*#__PURE__*/react.createElement(Caption, {
          caps: platform !== OS.VKCOM,
          level: platform === OS.VKCOM ? '1' : sizeY === SizeType.COMPACT ? '3' : '2',
          weight: platform === OS.VKCOM || sizeY === SizeType.COMPACT ? 'medium' : 'semibold',
          className: 'Button__content' + (platform !== OS.VKCOM ? '--caps' : '')
        }, children);
      }

      return sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Caption, {
        weight: "medium",
        level: "1",
        className: "Button__content"
      }, children) : /*#__PURE__*/react.createElement(Subhead, {
        weight: "medium",
        Component: "div",
        className: "Button__content"
      }, children);
  }
};

var Button = function Button(props) {
  var _classNames;

  var platform = usePlatform();

  var className = props.className,
      size = props.size,
      mode = props.mode,
      stretched = props.stretched,
      align = props.align,
      children = props.children,
      before = props.before,
      after = props.after,
      getRootRef = props.getRootRef,
      Component = props.Component,
      sizeY = props.sizeY,
      restProps = objectWithoutProperties(props, ["className", "size", "mode", "stretched", "align", "children", "before", "after", "getRootRef", "Component", "sizeY"]);

  var hasIcons = Boolean(before || after);
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    className: classNames(getClassname('Button', platform), className, "Button--sz-".concat(size), "Button--lvl-".concat(mode), "Button--aln-".concat(align || 'center'), "Button--sizeY-".concat(sizeY), (_classNames = {}, defineProperty(_classNames, 'Button--str', stretched), defineProperty(_classNames, 'Button--with-icon', hasIcons), _classNames)),
    getRootRef: getRootRef,
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/react.createElement("div", {
    className: "Button__in"
  }, before && /*#__PURE__*/react.createElement("div", {
    className: "Button__before"
  }, before), children && getContent(size, children, hasIcons, sizeY, platform), after && /*#__PURE__*/react.createElement("div", {
    className: "Button__after"
  }, after)));
};

Button.defaultProps = {
  mode: 'primary',
  Component: 'button',
  size: 's',
  stretched: false,
  stopPropagation: true
};
var Button$1 = withAdaptivity(Button, {
  sizeY: true
});

var dismiss = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'dismiss_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dismiss_24"><g fill="currentColor" fill-rule="nonzero"><circle opacity=".12" cx="12" cy="12" r="12" /><path d="M12 10.727l3.464-3.463a.9.9 0 111.272 1.272L13.273 12l3.463 3.464a.9.9 0 11-1.272 1.272L12 13.273l-3.464 3.463a.9.9 0 11-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 011.272-1.272L12 10.727z" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Dismiss = function Icon24Dismiss(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Dismiss.mountIcon = mountIcon;
var _default = Icon24Dismiss;
exports.default = _default;

});

var Icon24Dismiss = /*@__PURE__*/getDefaultExportFromCjs(dismiss);

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ModalCard = /*#__PURE__*/function (_Component) {
  inherits(ModalCard, _Component);

  var _super = _createSuper$a(ModalCard);

  function ModalCard() {
    var _this;

    classCallCheck(this, ModalCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "onButtonClick", function (event) {
      var target = event.currentTarget; // eslint-disable-next-line @typescript-eslint/unbound-method

      var action = _this.props.actions[Number(target.dataset.index)].action;

      event.persist();

      if (typeof action === 'function') {
        action(event);
      }
    });

    return _this;
  }

  createClass(ModalCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          icon = _this$props.icon,
          header = _this$props.header,
          caption = _this$props.caption,
          children = _this$props.children,
          actions = _this$props.actions,
          actionsLayout = _this$props.actionsLayout,
          onClose = _this$props.onClose,
          viewWidth = _this$props.viewWidth,
          platform = _this$props.platform,
          className = _this$props.className;
      var isDesktop = viewWidth >= ViewWidth.TABLET;
      var canShowCloseBtn = platform === IOS || isDesktop;
      return /*#__PURE__*/react.createElement("div", {
        className: classNames(getClassname('ModalCard', platform), {
          'ModalCard--desktop': isDesktop
        }, className)
      }, /*#__PURE__*/react.createElement("div", {
        className: "ModalCard__in"
      }, /*#__PURE__*/react.createElement("div", {
        className: "ModalCard__container"
      }, icon && /*#__PURE__*/react.createElement("div", {
        className: "ModalCard__icon"
      }, icon), header && /*#__PURE__*/react.createElement("div", {
        className: "ModalCard__title"
      }, header), caption && /*#__PURE__*/react.createElement("div", {
        className: "ModalCard__caption"
      }, caption), children, actions.length > 0 && /*#__PURE__*/react.createElement("div", {
        className: classNames('ModalCard__actions', {
          'ModalCard__actions--v': actionsLayout === 'vertical'
        })
      }, actions.map(function (_ref, i) {
        var title = _ref.title,
            mode = _ref.mode;
        return /*#__PURE__*/react.createElement(Button$1, {
          key: i,
          "data-index": i,
          size: "m",
          mode: mode,
          onClick: _this2.onButtonClick
        }, title);
      })), canShowCloseBtn && /*#__PURE__*/react.createElement(PanelHeaderButton, {
        className: "ModalCard__dismiss",
        onClick: onClose
      }, /*#__PURE__*/react.createElement(Icon24Dismiss, null)))));
    }
  }]);

  return ModalCard;
}(react.Component);

defineProperty(ModalCard, "defaultProps", {
  actions: [],
  actionsLayout: 'horizontal'
});

var ModalCard$1 = withAdaptivity(withPlatform(ModalCard), {
  viewWidth: true
});

var IconButton = function IconButton(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      restProps = objectWithoutProperties(_ref, ["className", "icon"]);

  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassname('IconButton', platform), className)
  }), icon);
};

var Card = function Card(_ref) {
  var size = _ref.size,
      mode = _ref.mode,
      children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ["size", "mode", "children", "style", "className"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    style: style,
    className: classNames(className, getClassname('Card', platform), "Card--sz-".concat(size), "Card--md-".concat(mode))
  }), /*#__PURE__*/react.createElement("div", {
    className: "Card__in"
  }, children));
};

Card.defaultProps = {
  size: 'm',
  mode: 'tint'
};

var CardGrid = function CardGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ["children", "className", "style"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    style: style,
    className: classNames(className, getClassname('CardGrid', platform))
  }), children);
};

var CellButton = function CellButton(_ref) {
  var className = _ref.className,
      align = _ref.align,
      mode = _ref.mode,
      before = _ref.before,
      children = _ref.children,
      stopPropagation = _ref.stopPropagation,
      Component = _ref.Component,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["className", "align", "mode", "before", "children", "stopPropagation", "Component", "sizeX"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    className: classNames(getClassname('CellButton', platform), className, "CellButton--sizeX-".concat(sizeX), "CellButton--lvl-".concat(mode), "CellButton--aln-".concat(align)),
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/react.createElement("div", {
    className: "CellButton__in"
  }, before && /*#__PURE__*/react.createElement("div", {
    className: "CellButton__before"
  }, before), children && /*#__PURE__*/react.createElement("div", {
    className: "CellButton__content"
  }, children)));
};

CellButton.defaultProps = {
  mode: 'primary',
  Component: 'button',
  align: 'left',
  stopPropagation: true
};
var CellButton$1 = withAdaptivity(CellButton, {
  sizeX: true
});

var Header = function Header(_ref) {
  var className = _ref.className,
      mode = _ref.mode,
      children = _ref.children,
      subtitle = _ref.subtitle,
      indicator = _ref.indicator,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "mode", "children", "subtitle", "indicator", "aside", "getRootRef"]);

  var platform = usePlatform();
  var baseClassNames = getClassname('Header', platform);
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className, "Header--mode-".concat(mode), {
      'Header--pi': typeof indicator === 'string' || typeof indicator === 'number'
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: "Header__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Header__content"
  }, children, subtitle && /*#__PURE__*/react.createElement("div", {
    className: "Header__subtitle"
  }, subtitle)), indicator && /*#__PURE__*/react.createElement("div", {
    className: "Header__indicator"
  }, indicator), aside && /*#__PURE__*/react.createElement("div", {
    className: "Header__aside"
  }, aside)));
};

Header.defaultProps = {
  mode: 'primary'
};

var Group = function Group(props) {
  var header = props.header,
      description = props.description,
      className = props.className,
      children = props.children,
      separator = props.separator,
      getRootRef = props.getRootRef,
      sizeX = props.sizeX,
      restProps = objectWithoutProperties(props, ["header", "description", "className", "children", "separator", "getRootRef", "sizeX"]);

  var platform = usePlatform();
  var baseClassNames = getClassname('Group', platform);
  return /*#__PURE__*/react.createElement("section", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className)
  }), /*#__PURE__*/react.createElement("div", {
    className: classNames('Group__inner', "Group__inner--sizeX-".concat(sizeX))
  }, header, children, description && /*#__PURE__*/react.createElement("div", {
    className: "Group__description"
  }, description)), separator !== 'hide' && /*#__PURE__*/react.createElement(Separator$1, {
    className: classNames('Group__separator', {
      'Group__separator--force': separator === 'show'
    }),
    expanded: sizeX === SizeType.REGULAR
  }));
};

Group.defaultProps = {
  separator: 'auto'
};
Group = withAdaptivity(Group, {
  sizeX: true
});
var Group$1 = Group;

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ["className", "children"]);

  var platform = usePlatform();
  var baseClassName = getClassname('List', platform);
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(baseClassName, className)
  }), children);
};

var cancel = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'cancel_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cancel_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Cancel = function Icon24Cancel(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Cancel.mountIcon = mountIcon;
var _default = Icon24Cancel;
exports.default = _default;

});

var Icon24Cancel = /*@__PURE__*/getDefaultExportFromCjs(cancel);

var reorder = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'reorder_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M21 18a1 1 0 01-1 1H4a1 1 0 010-2h16a1 1 0 011 1zm0-4a1 1 0 01-1 1H4a1 1 0 010-2h16a1 1 0 011 1zm0-4a1 1 0 01-1 1H4a1 1 0 010-2h16a1 1 0 011 1zM3 6a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Reorder = function Icon24Reorder(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Reorder.mountIcon = mountIcon;
var _default = Icon24Reorder;
exports.default = _default;

});

var Icon24Reorder = /*@__PURE__*/getDefaultExportFromCjs(reorder);

var reorder_ios = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'reorder_ios_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path opacity=".1" d="M0 0h24v24H0z" /><path d="M2.75 7h18.5a.75.75 0 110 1.5H2.75a.75.75 0 010-1.5zm0 4h18.5a.75.75 0 110 1.5H2.75a.75.75 0 110-1.5zm0 4h18.5a.75.75 0 110 1.5H2.75a.75.75 0 110-1.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24ReorderIos = function Icon24ReorderIos(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24ReorderIos.mountIcon = mountIcon;
var _default = Icon24ReorderIos;
exports.default = _default;

});

var Icon24ReorderIos = /*@__PURE__*/getDefaultExportFromCjs(reorder_ios);

var chevron = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 24';
var id = 'chevron_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path d="M4.706 7.706a1 1 0 010-1.412l.088-.088a.997.997 0 011.414.002l5.084 5.084a.998.998 0 010 1.416l-5.084 5.084a1.002 1.002 0 01-1.414.002l-.088-.088a.995.995 0 010-1.412L9 12 4.706 7.706z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Chevron = function Icon24Chevron(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Chevron.mountIcon = mountIcon;
var _default = Icon24Chevron;
exports.default = _default;

});

var Icon24Chevron = /*@__PURE__*/getDefaultExportFromCjs(chevron);

var SimpleCell = function SimpleCell(_ref) {
  var before = _ref.before,
      indicator = _ref.indicator,
      children = _ref.children,
      after = _ref.after,
      description = _ref.description,
      className = _ref.className,
      expandable = _ref.expandable,
      multiline = _ref.multiline,
      Component = _ref.Component,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["before", "indicator", "children", "after", "description", "className", "expandable", "multiline", "Component", "sizeX"]);

  var platform = usePlatform();
  var hasAfter = hasReactNode(after) || expandable && platform === IOS;
  var RootComponent = restProps.disabled ? Component : Tappable$1;
  Component = restProps.disabled ? undefined : Component;
  return /*#__PURE__*/react.createElement(RootComponent, _extends_1({}, restProps, {
    Component: restProps.href ? 'a' : Component,
    className: classNames(className, getClassname('SimpleCell', platform), "SimpleCell--sizeX-".concat(sizeX), {
      'SimpleCell--exp': expandable,
      'SimpleCell--mult': multiline
    })
  }), before, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__main"
  }, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__children"
  }, children), description && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__description"
  }, description)), hasReactNode(indicator) && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__indicator"
  }, indicator), hasAfter && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__after"
  }, after, expandable && platform === IOS && /*#__PURE__*/react.createElement(Icon24Chevron, null)));
};

SimpleCell.defaultProps = {
  Component: 'div'
};
var SimpleCell$1 = withAdaptivity(SimpleCell, {
  sizeX: true
});

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Cell = /*#__PURE__*/function (_Component) {
  inherits(Cell, _Component);

  var _super = _createSuper$b(Cell);

  function Cell(props) {
    var _this;

    classCallCheck(this, Cell);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "rootEl", void 0);

    defineProperty(assertThisInitialized(_this), "removeButton", void 0);

    defineProperty(assertThisInitialized(_this), "onRemoveActivateClick", function (e) {
      e.nativeEvent.stopPropagation();
      e.preventDefault();

      _this.setState({
        isRemoveActivated: true
      });

      _this.document.addEventListener('click', _this.deactivateRemove);
    });

    defineProperty(assertThisInitialized(_this), "deactivateRemove", function () {
      _this.setState({
        isRemoveActivated: false,
        removeOffset: 0
      });

      _this.document.removeEventListener('click', _this.deactivateRemove);
    });

    defineProperty(assertThisInitialized(_this), "onRemoveClick", function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      _this.props.onRemove && _this.props.onRemove(e, _this.rootEl);
    });

    defineProperty(assertThisInitialized(_this), "getRemoveRef", function (el) {
      return _this.removeButton = el;
    });

    defineProperty(assertThisInitialized(_this), "getRootRef", function (element) {
      _this.rootEl = element;
      setRef(element, _this.props.getRootRef);
    });

    defineProperty(assertThisInitialized(_this), "dragShift", void 0);

    defineProperty(assertThisInitialized(_this), "listEl", void 0);

    defineProperty(assertThisInitialized(_this), "siblings", void 0);

    defineProperty(assertThisInitialized(_this), "dragStartIndex", void 0);

    defineProperty(assertThisInitialized(_this), "dragEndIndex", void 0);

    defineProperty(assertThisInitialized(_this), "dragDirection", void 0);

    defineProperty(assertThisInitialized(_this), "onDragStart", function () {
      _this.setState({
        dragging: true
      });

      _this.dragShift = 0;
      _this.listEl = _this.rootEl.closest('.List');
      _this.listEl && _this.listEl.classList.add('List--dragging');
      _this.siblings = Array.prototype.slice.call(_this.rootEl.parentElement.childNodes);
      _this.dragStartIndex = _this.siblings.indexOf(_this.rootEl);
    });

    defineProperty(assertThisInitialized(_this), "onDragMove", function (e) {
      e.originalEvent.preventDefault();

      if (_this.state.removeOffset) {
        return;
      }

      _this.rootEl.style.transform = "translateY(".concat(e.shiftY, "px)");

      var rootGesture = _this.rootEl.getBoundingClientRect();

      _this.dragDirection = _this.dragShift - e.shiftY < 0 ? 'down' : 'up';
      _this.dragShift = e.shiftY;
      _this.dragEndIndex = _this.dragStartIndex;

      _this.siblings.forEach(function (sibling, siblingIndex) {
        var siblingGesture = sibling.getBoundingClientRect();

        if (_this.dragStartIndex < siblingIndex) {
          if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
            if (_this.dragDirection === 'down') {
              sibling.style.transform = 'translateY(-100%)';
            }

            _this.dragEndIndex++;
          }

          if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 && _this.dragDirection === 'up') {
            sibling.style.transform = 'translateY(0)';
          }
        } else if (_this.dragStartIndex > siblingIndex) {
          if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
            if (_this.dragDirection === 'up') {
              sibling.style.transform = 'translateY(100%)';
            }

            _this.dragEndIndex--;
          }

          if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 && _this.dragDirection === 'down') {
            sibling.style.transform = 'translateY(0)';
          }
        }
      });
    });

    defineProperty(assertThisInitialized(_this), "onDragEnd", function () {
      _this.setState({
        dragging: false
      });

      _this.listEl && _this.listEl.classList.remove('List--dragging');
      _this.props.onDragFinish && _this.props.onDragFinish({
        from: _this.dragStartIndex,
        to: _this.dragEndIndex
      });

      _this.siblings.forEach(function (sibling) {
        return sibling.style.transform = null;
      });

      delete _this.dragShift;
      delete _this.listEl;
      delete _this.siblings;
      delete _this.dragStartIndex;
      delete _this.dragEndIndex;
      delete _this.dragDirection;
    });

    defineProperty(assertThisInitialized(_this), "onDragClick", function (e) {
      e.nativeEvent.stopPropagation();
      e.preventDefault();
    });

    _this.state = {
      isRemoveActivated: false,
      removeOffset: 0,
      dragging: false
    };
    return _this;
  }

  createClass(Cell, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.deactivateRemove);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
        this.setState({
          removeOffset: this.removeButton.offsetWidth
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onRemove = _this$props.onRemove,
          removePlaceholder = _this$props.removePlaceholder,
          onDragFinish = _this$props.onDragFinish,
          className = _this$props.className,
          style = _this$props.style,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          before = _this$props.before,
          after = _this$props.after,
          disabled = _this$props.disabled,
          removable = _this$props.removable,
          draggable = _this$props.draggable,
          selectable = _this$props.selectable,
          Component = _this$props.Component,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          name = _this$props.name,
          checked = _this$props.checked,
          defaultChecked = _this$props.defaultChecked,
          restProps = objectWithoutProperties(_this$props, ["onRemove", "removePlaceholder", "onDragFinish", "className", "style", "getRootRef", "platform", "before", "after", "disabled", "removable", "draggable", "selectable", "Component", "onChange", "onClick", "name", "checked", "defaultChecked"]);

      return /*#__PURE__*/react.createElement("div", {
        className: classNames(getClassname('Cell', platform), {
          'Cell--dragging': this.state.dragging
        }, className),
        style: style,
        ref: this.getRootRef
      }, /*#__PURE__*/react.createElement("div", {
        className: "Cell__in",
        style: platform === IOS && removable ? {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        } : null
      }, /*#__PURE__*/react.createElement(SimpleCell$1, _extends_1({}, restProps, {
        onClick: draggable || removable ? undefined : onClick,
        disabled: draggable || removable || disabled,
        Component: selectable ? 'label' : Component,
        before: /*#__PURE__*/react.createElement(react.Fragment, null, platform === IOS && removable && /*#__PURE__*/react.createElement("div", {
          className: "Cell__remove-marker",
          onClick: this.onRemoveActivateClick
        }), selectable && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", {
          type: "checkbox",
          className: "Cell__checkbox",
          name: name,
          onChange: onChange,
          defaultChecked: defaultChecked,
          checked: checked
        }), /*#__PURE__*/react.createElement("div", {
          className: "Cell__marker"
        }, /*#__PURE__*/react.createElement(SelectedIcon, null))), platform === ANDROID && draggable && /*#__PURE__*/react.createElement(Touch, {
          onStart: this.onDragStart,
          onMoveY: this.onDragMove,
          onEnd: this.onDragEnd,
          onClick: this.onDragClick,
          className: "Cell__dragger"
        }, /*#__PURE__*/react.createElement(Icon24Reorder, null)), before),
        after: /*#__PURE__*/react.createElement(react.Fragment, null, platform === ANDROID && removable && /*#__PURE__*/react.createElement("div", {
          className: "Cell__remove-marker"
        }, /*#__PURE__*/react.createElement(IconButton, {
          icon: /*#__PURE__*/react.createElement(Icon24Cancel, null),
          onClick: this.onRemoveClick
        })), platform === IOS && draggable && /*#__PURE__*/react.createElement(Touch, {
          className: "Cell__dragger",
          onStart: this.onDragStart,
          onMoveY: this.onDragMove,
          onEnd: this.onDragEnd,
          onClick: this.onDragClick
        }, /*#__PURE__*/react.createElement(Icon24ReorderIos, null)), after)
      }))), platform === IOS && removable && /*#__PURE__*/react.createElement("div", {
        ref: this.getRemoveRef,
        className: "Cell__remove",
        onClick: this.onRemoveClick,
        style: {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        }
      }, /*#__PURE__*/react.createElement("span", {
        className: "Cell__remove-in"
      }, removePlaceholder)));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Cell;
}(react.Component);

defineProperty(Cell, "defaultProps", {
  removePlaceholder: 'Удалить'
});

defineProperty(Cell, "contextTypes", {
  document: propTypes.any
});

var Cell$1 = withPlatform(Cell);

var Div = function Div(_ref) {
  var className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "children", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassname('Div', platform), className)
  }), children);
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      shadow = _ref.shadow,
      mode = _ref.mode,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["src", "size", "shadow", "mode", "style", "className", "children", "getRootRef"]);

  var Component = src ? 'img' : 'div';
  var platform = usePlatform();
  var borderRadius;

  switch (mode) {
    case 'default':
      borderRadius = '50%';
      break;

    case 'image':
      borderRadius = 4;
      break;

    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: classNames(getClassname('Avatar', platform), className, "Avatar--type-".concat(mode), "Avatar--sz-".concat(size)),
    ref: getRootRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "Avatar__in",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    className: "Avatar__img",
    src: src,
    style: _objectSpread$7(_objectSpread$7({}, style), {}, {
      borderRadius: borderRadius
    })
  })), shadow && /*#__PURE__*/react.createElement("span", {
    className: "Avatar__shadow",
    style: {
      borderRadius: borderRadius
    }
  }), children && /*#__PURE__*/react.createElement("div", {
    className: "Avatar__children",
    style: {
      width: size,
      height: size,
      borderRadius: borderRadius
    }
  }, children)));
};

Avatar.defaultProps = {
  size: 48,
  mode: 'default',
  shadow: true
};

var Progress = function Progress(props) {
  var value = props.value,
      className = props.className,
      getRootRef = props.getRootRef,
      restProps = objectWithoutProperties(props, ["value", "className", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassname('Progress', platform), className)
  }), /*#__PURE__*/react.createElement("div", {
    className: "Progress__bg"
  }), /*#__PURE__*/react.createElement("div", {
    className: "Progress__in",
    style: {
      width: "".concat(value, "%")
    }
  }));
};

Progress.defaultProps = {
  value: 0
};

var Placeholder = function Placeholder(props) {
  var className = props.className,
      icon = props.icon,
      header = props.header,
      action = props.action,
      children = props.children,
      stretched = props.stretched;
  return /*#__PURE__*/react.createElement("div", {
    className: classNames('Placeholder', {
      'Placeholder--stretched': stretched
    }, className)
  }, /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__in"
  }, icon && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__icon"
  }, icon), header && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__header"
  }, header), children && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__text"
  }, children), action && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__action"
  }, action)));
};

var dismiss_substract = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'dismiss_substract_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dismiss_substract_24"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4.736 7.264a.9.9 0 00-1.272 0L12 10.727 8.536 7.264l-.092-.08a.9.9 0 00-1.18.08l-.08.092a.9.9 0 00.08 1.18L10.727 12l-3.463 3.464a.9.9 0 101.272 1.272L12 13.273l3.464 3.463.092.08a.9.9 0 001.18-.08l.08-.092a.9.9 0 00-.08-1.18L13.273 12l3.463-3.464a.9.9 0 000-1.272z" fill="currentColor" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24DismissSubstract = function Icon24DismissSubstract(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24DismissSubstract.mountIcon = mountIcon;
var _default = Icon24DismissSubstract;
exports.default = _default;

});

var Icon24DismissSubstract = /*@__PURE__*/getDefaultExportFromCjs(dismiss_substract);

var dismiss_dark = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'dismiss_dark_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dismiss_dark_24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" fill="#000" fill-rule="nonzero" opacity=".24" r="12" /><path d="M4 4h16v16H4z" /><path d="M16.736 7.264a.9.9 0 010 1.272L13.273 12l3.463 3.464a.9.9 0 01.08 1.18l-.08.092a.9.9 0 01-1.272 0L12 13.273l-3.464 3.463a.9.9 0 11-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 01-.08-1.18l.08-.092a.9.9 0 011.272 0L12 10.727l3.464-3.463a.9.9 0 011.272 0z" fill="#fff" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24DismissDark = function Icon24DismissDark(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24DismissDark.mountIcon = mountIcon;
var _default = Icon24DismissDark;
exports.default = _default;

});

var Icon24DismissDark = /*@__PURE__*/getDefaultExportFromCjs(dismiss_dark);

var Banner = function Banner(props) {
  var platform = usePlatform();

  var className = props.className,
      mode = props.mode,
      imageTheme = props.imageTheme,
      size = props.size,
      before = props.before,
      asideMode = props.asideMode,
      header = props.header,
      subheader = props.subheader,
      text = props.text,
      children = props.children,
      background = props.background,
      actions = props.actions,
      onDismiss = props.onDismiss,
      restProps = objectWithoutProperties(props, ["className", "mode", "imageTheme", "size", "before", "asideMode", "header", "subheader", "text", "children", "background", "actions", "onDismiss"]);

  var InnerComponent = asideMode === 'expand' ? Tappable$1 : 'div';
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Banner', platform), "Banner--md-".concat(mode), "Banner--sz-".concat(size), {
      'Banner--inverted': mode === 'image' && imageTheme === 'dark'
    }, className)
  }), /*#__PURE__*/react.createElement(InnerComponent, {
    className: "Banner__in"
  }, mode === 'image' && background && /*#__PURE__*/react.createElement("div", {
    className: "Banner__bg"
  }, background), before && /*#__PURE__*/react.createElement("div", {
    className: "Banner__before"
  }, before), /*#__PURE__*/react.createElement("div", {
    className: "Banner__content"
  }, header && /*#__PURE__*/react.createElement("div", {
    className: "Banner__header"
  }, header), subheader && /*#__PURE__*/react.createElement("div", {
    className: "Banner__subheader"
  }, subheader), text && /*#__PURE__*/react.createElement("div", {
    className: "Banner__text"
  }, text), actions && /*#__PURE__*/react.createElement("div", {
    className: "Banner__actions"
  }, actions)), asideMode === 'expand' && /*#__PURE__*/react.createElement("div", {
    className: "Banner__expand"
  }, /*#__PURE__*/react.createElement(Icon24Chevron, null)), asideMode === 'dismiss' && /*#__PURE__*/react.createElement("div", {
    className: "Banner__dismiss"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Banner__dismissIcon",
    onClick: onDismiss
  }, platform === ANDROID && /*#__PURE__*/react.createElement(Icon24Cancel, null), platform === IOS && (mode === 'image' ? /*#__PURE__*/react.createElement(Icon24DismissDark, null) : /*#__PURE__*/react.createElement(Icon24DismissSubstract, null))))));
};

Banner.defaultProps = {
  mode: 'tint',
  size: 's',
  imageTheme: 'dark'
};

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var FormLayout = function FormLayout(props) {
  var children = props.children,
      Component = props.Component,
      className = props.className,
      getRef = props.getRef,
      onSubmit = props.onSubmit,
      restProps = objectWithoutProperties(props, ["children", "Component", "className", "getRef", "onSubmit"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    className: classNames(getClassname('FormLayout', platform), className),
    onSubmit: onSubmit,
    ref: getRef
  }), /*#__PURE__*/react.createElement("div", {
    className: "FormLayout__container"
  }, react.Children.toArray(children).map(function (field, i) {
    if (field) {
      var _field$props = field.props,
          status = _field$props.status,
          top = _field$props.top,
          bottom = _field$props.bottom;
      return /*#__PURE__*/react.createElement("div", {
        className: classNames('FormLayout__row', defineProperty({}, "FormLayout__row--s-".concat(status), !!status)),
        key: field.key || "row-".concat(i)
      }, top && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-top"
      }, top), field, bottom && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-bottom"
      }, bottom));
    } else {
      return null;
    }
  })), Component === 'form' && /*#__PURE__*/react.createElement("input", {
    type: "submit",
    className: "FormLayout__submit",
    value: ""
  }));
};

FormLayout.defaultProps = {
  Component: 'form',
  onSubmit: preventDefault
};

var FormLayoutGroup = function FormLayoutGroup(_ref) {
  var children = _ref.children,
      top = _ref.top,
      bottom = _ref.bottom,
      className = _ref.className,
      status = _ref.status,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'vertical' : _ref$mode,
      restProps = objectWithoutProperties(_ref, ["children", "top", "bottom", "className", "status", "mode"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({
    className: classNames(getClassname('FormLayoutGroup', platform), "FormLayoutGroup--".concat(mode), className)
  }, restProps), mode === 'vertical' ? children : react.Children.toArray(children).map(function (field, index) {
    if (field) {
      var _field$props = field.props,
          _status = _field$props.status,
          _top = _field$props.top,
          _bottom = _field$props.bottom;
      return /*#__PURE__*/react.createElement("div", {
        className: classNames('FormLayoutGroup__cell', defineProperty({}, "FormLayout__row--s-".concat(_status), !!_status)),
        key: field.key || "row-".concat(index)
      }, _top && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-top"
      }, _top), field, _bottom && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-bottom"
      }, _bottom));
    } else {
      return null;
    }
  }));
};

var FormField = function FormField(_ref) {
  var Component = _ref.Component,
      className = _ref.className,
      children = _ref.children,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      restProps = objectWithoutProperties(_ref, ["Component", "className", "children", "status", "getRootRef", "top", "bottom"]);

  var platform = usePlatform();

  var _useState = react.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var handleMouseEnter = function handleMouseEnter(e) {
    e.stopPropagation();
    setHover(true);
  };

  var handleMouseLeave = function handleMouseLeave(e) {
    e.stopPropagation();
    setHover(false);
  };

  return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    ref: getRootRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: classNames(getClassname('FormField', platform), defineProperty({}, "FormField--s-".concat(status), status !== 'default'), className)
  }), children, /*#__PURE__*/react.createElement("div", {
    className: classNames('FormField__border', {
      'FormField__border--hover': hover
    })
  }));
};

FormField.defaultProps = {
  status: 'default',
  Component: 'div'
};

var Input = function Input(_ref) {
  var align = _ref.align,
      status = _ref.status,
      getRef = _ref.getRef,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      sizeY = _ref.sizeY,
      restProps = objectWithoutProperties(_ref, ["align", "status", "getRef", "className", "getRootRef", "top", "bottom", "sizeY"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(FormField, {
    className: classNames(getClassname('Input', platform), className, defineProperty({}, "Input--".concat(align), !!align), "Input--sizeY-".concat(sizeY)),
    status: status,
    getRootRef: getRootRef
  }, /*#__PURE__*/react.createElement("input", _extends_1({}, restProps, {
    className: "Input__el",
    ref: getRef
  })));
};

Input.defaultProps = {
  type: 'text'
};
var Input$1 = withAdaptivity(Input, {
  sizeY: true
});

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Textarea = /*#__PURE__*/function (_PureComponent) {
  inherits(Textarea, _PureComponent);

  var _super = _createSuper$c(Textarea);

  function Textarea(props) {
    var _this;

    classCallCheck(this, Textarea);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "isControlledOutside", void 0);

    defineProperty(assertThisInitialized(_this), "element", void 0);

    defineProperty(assertThisInitialized(_this), "getRef", function (element) {
      _this.element = element;
      setRef(element, _this.props.getRef);
    });

    defineProperty(assertThisInitialized(_this), "resize", function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;
        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);
        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({
            height: scrollHeight - diff
          });
        }

        _this.setState({
          height: 0
        }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({
            height: height
          });

          if (_this.props.onResize) {
            _this.props.onResize(el);
          }
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
      _this.state = {};
    } else {
      _this.state = {
        value: props.defaultValue || ''
      };
    }

    return _this;
  }

  createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        window.requestAnimationFrame(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          onChange = _this$props.onChange,
          grow = _this$props.grow,
          style = _this$props.style,
          onResize = _this$props.onResize,
          className = _this$props.className,
          getRootRef = _this$props.getRootRef,
          getRef = _this$props.getRef,
          status = _this$props.status,
          top = _this$props.top,
          bottom = _this$props.bottom,
          sizeY = _this$props.sizeY,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["defaultValue", "value", "onChange", "grow", "style", "onResize", "className", "getRootRef", "getRef", "status", "top", "bottom", "sizeY", "platform"]);

      var height = this.state.height || style.height || 66;
      return /*#__PURE__*/react.createElement(FormField, {
        className: classNames(getClassname('Textarea', platform), className, "Textarea--sizeY-".concat(sizeY)),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, /*#__PURE__*/react.createElement("textarea", _extends_1({}, restProps, {
        className: "Textarea__el",
        value: this.value,
        onChange: this.onChange,
        ref: this.getRef,
        style: {
          height: height
        }
      })));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Textarea;
}(react.PureComponent);

defineProperty(Textarea, "defaultProps", {
  style: {},
  defaultValue: '',
  grow: true
});

var Textarea$1 = withPlatform(withAdaptivity(Textarea, {
  sizeY: true
}));

var Radio = function Radio(props) {
  var children = props.children,
      description = props.description,
      style = props.style,
      className = props.className,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      top = props.top,
      bottom = props.bottom,
      sizeY = props.sizeY,
      restProps = objectWithoutProperties(props, ["children", "description", "style", "className", "getRef", "getRootRef", "top", "bottom", "sizeY"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, {
    Component: "label",
    style: style,
    className: classNames(getClassname('Radio', platform), className, "Radio--sizeY-".concat(sizeY)),
    activeEffectDelay: platform === IOS ? 100 : ACTIVE_EFFECT_DELAY,
    disabled: restProps.disabled,
    getRootRef: getRootRef
  }, /*#__PURE__*/react.createElement("input", _extends_1({}, restProps, {
    type: "radio",
    className: "Radio__input",
    ref: getRef
  })), /*#__PURE__*/react.createElement("div", {
    className: "Radio__container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Radio__icon"
  }), /*#__PURE__*/react.createElement("div", {
    className: "Radio__content"
  }, children, description && /*#__PURE__*/react.createElement("div", {
    className: "Radio__description"
  }, description))));
};

var Radio$1 = withAdaptivity(Radio, {
  sizeY: true
});

var dropdown = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 12';
var id = 'dropdown_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" id="dropdown_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v12H0z" /><path d="M4.454 3.691A.9.9 0 103.346 5.11l4.096 3.203a.9.9 0 001.109 0l4.1-3.203a.9.9 0 10-1.108-1.418L7.997 6.46l-3.543-2.77z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Dropdown = function Icon16Dropdown(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 12
  }));
};

Icon16Dropdown.mountIcon = mountIcon;
var _default = Icon16Dropdown;
exports.default = _default;

});

var Icon16Dropdown = /*@__PURE__*/getDefaultExportFromCjs(dropdown);

var dropdown$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 20 16';
var id = 'dropdown_20';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" id="dropdown_20"><path d="M5.703 5.122a1.125 1.125 0 10-1.406 1.756l5 4c.411.33.995.33 1.406 0l5-4a1.125 1.125 0 10-1.406-1.756L10 8.559 5.703 5.122z" fill="currentColor" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon20Dropdown = function Icon20Dropdown(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon20Dropdown.mountIcon = mountIcon;
var _default = Icon20Dropdown;
exports.default = _default;

});

var Icon20Dropdown = /*@__PURE__*/getDefaultExportFromCjs(dropdown$1);

var dropdown$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'dropdown_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dropdown_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 14.198L6.64 9.732a1 1 0 10-1.28 1.536l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.536L12 14.198z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Dropdown = function Icon24Dropdown(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Dropdown.mountIcon = mountIcon;
var _default = Icon24Dropdown;
exports.default = _default;

});

var Icon24Dropdown = /*@__PURE__*/getDefaultExportFromCjs(dropdown$2);

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NativeSelect = /*#__PURE__*/function (_React$Component) {
  inherits(NativeSelect, _React$Component);

  var _super = _createSuper$d(NativeSelect);

  function NativeSelect(props) {
    var _this;

    classCallCheck(this, NativeSelect);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "isControlledOutside", void 0);

    defineProperty(assertThisInitialized(_this), "selectEl", void 0);

    defineProperty(assertThisInitialized(_this), "onChange", function (e) {
      _this.setTitle();

      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.currentTarget.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "setTitle", function () {
      var selectedOption = _this.selectEl.options[_this.selectEl.selectedIndex];
      selectedOption && _this.setState({
        title: selectedOption.text,
        notSelected: selectedOption.value === '' && _this.props.hasOwnProperty('placeholder')
      });
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (element) {
      _this.selectEl = element;
      setRef(element, _this.props.getRef);
    });

    var state = {
      title: '',
      notSelected: false
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  createClass(NativeSelect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value || prevProps.children !== this.props.children) {
        this.setTitle();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTitle();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          style = _this$props.style,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          align = _this$props.align,
          status = _this$props.status,
          placeholder = _this$props.placeholder,
          children = _this$props.children,
          className = _this$props.className,
          getRef = _this$props.getRef,
          getRootRef = _this$props.getRootRef,
          top = _this$props.top,
          bottom = _this$props.bottom,
          disabled = _this$props.disabled,
          sizeX = _this$props.sizeX,
          sizeY = _this$props.sizeY,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["style", "value", "defaultValue", "onChange", "align", "status", "placeholder", "children", "className", "getRef", "getRootRef", "top", "bottom", "disabled", "sizeX", "sizeY", "platform"]);

      return /*#__PURE__*/react.createElement(FormField, {
        Component: "label",
        className: classNames(getClassname('Select', platform), (_classNames = {}, defineProperty(_classNames, 'Select--not-selected', this.state.notSelected), defineProperty(_classNames, "Select--align-".concat(align), !!align), defineProperty(_classNames, "Select--sizeX--".concat(sizeX), !!sizeX), defineProperty(_classNames, "Select--sizeY--".concat(sizeY), !!sizeY), defineProperty(_classNames, 'Select--disabled', disabled), _classNames), className),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, /*#__PURE__*/react.createElement("select", _extends_1({}, restProps, {
        disabled: disabled,
        className: "Select__el",
        onChange: this.onChange,
        value: this.value,
        ref: this.getRef
      }), placeholder && /*#__PURE__*/react.createElement("option", {
        value: ""
      }, placeholder), children), /*#__PURE__*/react.createElement("div", {
        className: "Select__container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Select__title"
      }, this.state.title), sizeX === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Icon16Dropdown, null) : sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Icon20Dropdown, null) : /*#__PURE__*/react.createElement(Icon24Dropdown, null)));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return NativeSelect;
}(react.Component);

var NativeSelect$1 = withPlatform(withAdaptivity(NativeSelect, {
  sizeX: true,
  sizeY: true
}));

var SelectMimicry = function SelectMimicry(_ref) {
  var _classNames;

  var className = _ref.className,
      tabIndex = _ref.tabIndex,
      placeholder = _ref.placeholder,
      children = _ref.children,
      align = _ref.align,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      multiline = _ref.multiline,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      sizeX = _ref.sizeX,
      sizeY = _ref.sizeY,
      restProps = objectWithoutProperties(_ref, ["className", "tabIndex", "placeholder", "children", "align", "status", "getRootRef", "multiline", "disabled", "onClick", "sizeX", "sizeY"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(FormField, _extends_1({}, restProps, {
    tabIndex: disabled ? null : tabIndex,
    className: classNames(getClassname('Select', platform), 'Select--mimicry', (_classNames = {
      'Select--not-selected': !children,
      'Select--multiline': multiline,
      'Select--disabled': disabled
    }, defineProperty(_classNames, "Select--align-".concat(align), !!align), defineProperty(_classNames, "Select--sizeX--".concat(sizeX), !!sizeX), defineProperty(_classNames, "Select--sizeY--".concat(sizeY), !!sizeY), _classNames), className),
    getRootRef: getRootRef,
    status: status,
    onClick: disabled ? null : onClick
  }), /*#__PURE__*/react.createElement("div", {
    className: "Select__container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Select__title"
  }, children || placeholder), sizeX === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Icon16Dropdown, null) : sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Icon20Dropdown, null) : /*#__PURE__*/react.createElement(Icon24Dropdown, null)));
};

SelectMimicry.defaultProps = {
  tabIndex: 0
};
var SelectMimicry$1 = withAdaptivity(SelectMimicry, {
  sizeX: true,
  sizeY: true
});

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CustomScrollView = /*#__PURE__*/function (_React$Component) {
  inherits(CustomScrollView, _React$Component);

  var _super = _createSuper$e(CustomScrollView);

  function CustomScrollView() {
    var _this;

    classCallCheck(this, CustomScrollView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "ratio", NaN);

    defineProperty(assertThisInitialized(_this), "lastTrackerTop", 0);

    defineProperty(assertThisInitialized(_this), "clientHeight", 0);

    defineProperty(assertThisInitialized(_this), "trackerHeight", 0);

    defineProperty(assertThisInitialized(_this), "scrollHeight", 0);

    defineProperty(assertThisInitialized(_this), "transformProp", '');

    defineProperty(assertThisInitialized(_this), "startY", 0);

    defineProperty(assertThisInitialized(_this), "trackerTop", 0);

    defineProperty(assertThisInitialized(_this), "box", /*#__PURE__*/react.createRef());

    defineProperty(assertThisInitialized(_this), "barY", /*#__PURE__*/react.createRef());

    defineProperty(assertThisInitialized(_this), "trackerY", /*#__PURE__*/react.createRef());

    defineProperty(assertThisInitialized(_this), "resize", function () {
      var clientHeight = _this.box.current.clientHeight;
      var scrollHeight = _this.box.current.scrollHeight;
      var ratio = clientHeight / scrollHeight;
      var trackerHeight = Math.max(clientHeight * ratio, 40);
      _this.ratio = ratio;
      _this.clientHeight = clientHeight;
      _this.scrollHeight = scrollHeight;
      _this.trackerHeight = trackerHeight;

      if (ratio >= 1) {
        _this.barY.current.style.display = 'none';
      } else {
        _this.barY.current.style.display = '';
        _this.trackerY.current.style.height = "".concat(trackerHeight, "px");

        _this.setTrackerPositionFromScroll(_this.box.current.scrollTop);
      }
    });

    defineProperty(assertThisInitialized(_this), "scroll", function () {
      if (_this.ratio >= 1) {
        return;
      }

      _this.setTrackerPositionFromScroll(_this.box.current.scrollTop);
    });

    defineProperty(assertThisInitialized(_this), "onDragStart", function (e) {
      e.preventDefault();
      _this.startY = e.clientY;
      _this.trackerTop = _this.lastTrackerTop;
      document.addEventListener('mousemove', _this.onMove);
      document.addEventListener('mouseup', _this.onUp);

      _this.trackerY.current.classList.add('CustomScrollView__trackerY--dragging');

      _this.box.current.classList.add('CustomScrollView__box--dragging');
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (e) {
      e.preventDefault();
      var diff = e.clientY - _this.startY;
      var position = Math.min(Math.max(_this.trackerTop + diff, 0), _this.clientHeight - _this.trackerHeight);

      _this.setScrollPositionFromTracker(position);
    });

    defineProperty(assertThisInitialized(_this), "onUp", function (e) {
      e.preventDefault();
      document.removeEventListener('mousemove', _this.onMove);
      document.removeEventListener('mouseup', _this.onUp);

      _this.trackerY.current.classList.remove('CustomScrollView__trackerY--dragging');

      _this.box.current.classList.remove('CustomScrollView__box--dragging');
    });

    return _this;
  }

  createClass(CustomScrollView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.chooseTransformProp();
      this.resize();

      if (this.props.windowResize) {
        window.addEventListener('resize', this.resize);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.resize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "chooseTransformProp",
    value: function chooseTransformProp() {
      var style = this.trackerY.current.style;
      var prop = '';

      if ('transform' in style) {
        prop = 'transform';
      } else if ('webkitTransform' in style) {
        prop = 'webkitTransform';
      }

      this.transformProp = prop;
    }
  }, {
    key: "setTrackerPosition",
    value: function setTrackerPosition(scrollTop) {
      this.lastTrackerTop = scrollTop;
      this.trackerY.current.style[this.transformProp] = "translate(0, ".concat(scrollTop, "px)");
    }
  }, {
    key: "setTrackerPositionFromScroll",
    value: function setTrackerPositionFromScroll(scrollTop) {
      var progress = scrollTop / (this.scrollHeight - this.clientHeight);
      this.setTrackerPosition((this.clientHeight - this.trackerHeight) * progress);
    }
  }, {
    key: "setScrollPositionFromTracker",
    value: function setScrollPositionFromTracker(trackerTop) {
      var progress = trackerTop / (this.clientHeight - this.trackerHeight);
      this.box.current.scrollTop = (this.scrollHeight - this.clientHeight) * progress;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "CustomScrollView"
      }, /*#__PURE__*/react.createElement("div", {
        className: "CustomScrollView__box",
        tabIndex: -1,
        ref: this.box,
        onScroll: this.scroll
      }, this.props.children), /*#__PURE__*/react.createElement("div", {
        className: "CustomScrollView__barY",
        ref: this.barY
      }, /*#__PURE__*/react.createElement("div", {
        className: "CustomScrollView__trackerY",
        ref: this.trackerY,
        onMouseDown: this.onDragStart
      })));
    }
  }]);

  return CustomScrollView;
}(react.Component);

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CustomSelect = /*#__PURE__*/function (_React$Component) {
  inherits(CustomSelect, _React$Component);

  var _super = _createSuper$f(CustomSelect);

  function CustomSelect(props) {
    var _this;

    classCallCheck(this, CustomSelect);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "state", void 0);

    defineProperty(assertThisInitialized(_this), "keyboardInput", void 0);

    defineProperty(assertThisInitialized(_this), "node", void 0);

    defineProperty(assertThisInitialized(_this), "scrollViewRef", /*#__PURE__*/react.createRef());

    defineProperty(assertThisInitialized(_this), "resetKeyboardInput", function () {
      _this.keyboardInput = '';
    });

    defineProperty(assertThisInitialized(_this), "getSelectedItem", function () {
      var selectedOptionIndex = _this.state.selectedOptionIndex;
      var options = _this.props.options;

      if (!options.length) {
        return null;
      }

      return options[selectedOptionIndex];
    });

    defineProperty(assertThisInitialized(_this), "open", function () {
      _this.setState(function (_ref) {
        var selectedOptionIndex = _ref.selectedOptionIndex;
        return {
          opened: true,
          focusedOptionIndex: selectedOptionIndex
        };
      }, function () {
        var selectedOptionIndex = _this.state.selectedOptionIndex;

        if (_this.isValidIndex(selectedOptionIndex)) {
          _this.scrollToElement(selectedOptionIndex, true);
        }
      });
    });

    defineProperty(assertThisInitialized(_this), "close", function () {
      _this.resetKeyboardInput();

      _this.setState(function () {
        return {
          opened: false,
          focusedOptionIndex: -1
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "selectFocused", function () {
      var focusedOptionIndex = _this.state.focusedOptionIndex;

      _this.select(focusedOptionIndex);
    });

    defineProperty(assertThisInitialized(_this), "select", function (index) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name,
          options = _this$props.options;

      if (!_this.isValidIndex(index)) {
        return;
      }

      var item = options[index];

      _this.setState(function () {
        return {
          selectedOptionIndex: index
        };
      });

      onChange && onChange({
        value: item.value,
        name: name || ''
      });

      _this.close();
    });

    defineProperty(assertThisInitialized(_this), "onClick", function () {
      _this.state.opened ? _this.close() : _this.open();
    });

    defineProperty(assertThisInitialized(_this), "onFocus", function () {
      var onFocus = _this.props.onFocus;

      _this.setState(function () {
        return {
          focused: true
        };
      });

      onFocus && onFocus();
    });

    defineProperty(assertThisInitialized(_this), "onBlur", function () {
      var onBlur = _this.props.onBlur;

      _this.resetKeyboardInput();

      _this.setState(function () {
        return {
          opened: false,
          focused: false
        };
      });

      onBlur && onBlur();
    });

    defineProperty(assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var thisNode = _this.node;

      if (_this.state.opened && thisNode && !thisNode.contains(event.target)) {
        _this.onBlur();
      }
    });

    defineProperty(assertThisInitialized(_this), "focusOptionByIndex", function (index) {
      var focusedOptionIndex = _this.state.focusedOptionIndex;
      var options = _this.props.options;
      var oldIndex = focusedOptionIndex;

      if (index < 0) {
        index = options.length - 1;
      } else if (index >= options.length) {
        index = 0;
      }

      if (index === oldIndex) {
        return;
      }

      _this.scrollToElement(index);

      _this.setState(function () {
        return {
          focusedOptionIndex: index
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "focusOption", function (type) {
      var focusedOptionIndex = _this.state.focusedOptionIndex;
      var index = focusedOptionIndex;

      if (type === 'next') {
        index = focusedOptionIndex + 1;
      } else if (type === 'prev') {
        index = focusedOptionIndex - 1;
      }

      _this.focusOptionByIndex(index);
    });

    defineProperty(assertThisInitialized(_this), "handleOptionHover", function (e) {
      var options = _this.props.options;
      var label = e.currentTarget.title;

      if (!label) {
        return;
      }

      var index = options.findIndex(function (option) {
        return option.label === label;
      });

      _this.setState(function () {
        return {
          focusedOptionIndex: index
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "handleOptionDown", function (e) {
      e.preventDefault();
    });

    defineProperty(assertThisInitialized(_this), "resetFocusedOption", function () {
      _this.setState(function () {
        return {
          focusedOptionIndex: -1
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "onKeyboardInput", function (key) {
      var options = _this.props.options;
      var fullInput = _this.keyboardInput + key;
      var optionIndex = options.findIndex(function (option) {
        return option.label.toLowerCase().includes(fullInput);
      });

      if (optionIndex > -1) {
        _this.focusOptionByIndex(optionIndex);
      }

      _this.keyboardInput = fullInput;
    });

    defineProperty(assertThisInitialized(_this), "handleKeyDownSelect", function (event) {
      var opened = _this.state.opened;

      if (event.key.length === 1 && event.key !== ' ') {
        _this.onKeyboardInput(event.key);

        return;
      }

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          opened ? _this.focusOption('prev') : _this.open();
          break;

        case 'ArrowDown':
          event.preventDefault();
          opened ? _this.focusOption('next') : _this.open();
          break;

        case 'Escape':
          event.preventDefault();

          _this.close();

          break;

        case 'Enter':
        case 'Spacebar':
        case ' ':
          event.preventDefault();
          opened ? _this.selectFocused() : _this.open();
          break;
      }
    });

    defineProperty(assertThisInitialized(_this), "handleKeyUp", debounce(_this.resetKeyboardInput, 1000));

    defineProperty(assertThisInitialized(_this), "renderOption", function (item, index) {
      var _this$state = _this.state,
          focusedOptionIndex = _this$state.focusedOptionIndex,
          selectedOptionIndex = _this$state.selectedOptionIndex;
      var hovered = index === focusedOptionIndex;
      var selected = index === selectedOptionIndex;
      return /*#__PURE__*/react.createElement("div", {
        key: index,
        role: "option",
        title: item.label,
        "aria-posinset": index,
        "aria-selected": selected,
        onClick: _this.selectFocused,
        onMouseDown: _this.handleOptionDown,
        onMouseEnter: _this.handleOptionHover,
        className: classNames('CustomSelect__option', defineProperty({}, 'CustomSelect__option--hover', hovered))
      }, item.label, selected && /*#__PURE__*/react.createElement("div", {
        className: "CustomSelect__selectedIcon"
      }, /*#__PURE__*/react.createElement(SelectedIcon, {
        fill: "var(--accent)"
      })));
    });

    var value = props.value;
    _this.keyboardInput = '';
    _this.state = {
      opened: false,
      focused: false,
      focusedOptionIndex: -1,
      selectedOptionIndex: props.options.findIndex(function (option) {
        return option.value === value;
      })
    };
    return _this;
  }

  createClass(CustomSelect, [{
    key: "isValidIndex",
    value: function isValidIndex(index) {
      return index >= 0 && index < this.props.options.length;
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement(index) {
      var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scrollView = this.scrollViewRef.current;
      var dropdown = scrollView.box.current;
      var item = dropdown ? dropdown.children[index] : null;

      if (!item) {
        return;
      }

      var dropdownHeight = dropdown.offsetHeight;
      var scrollTop = dropdown.scrollTop;
      var itemTop = item.offsetTop;
      var itemHeight = item.offsetHeight;

      if (center) {
        dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
      } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
        dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
      } else if (itemTop < scrollTop) {
        dropdown.scrollTop = itemTop;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, false);
      document.addEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick, false);
      document.removeEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.options !== this.props.options || prevProps.value !== this.props.value) {
        this.setState({
          selectedOptionIndex: this.props.options.findIndex(function (option) {
            return option.value === _this2.props.value;
          })
        });
      }
    }
  }, {
    key: "renderWithCustomScrollbar",
    value: function renderWithCustomScrollbar() {
      var _classNames2, _classNames3;

      var opened = this.state.opened;

      var _this$props2 = this.props,
          name = _this$props2.name,
          className = _this$props2.className,
          getRef = _this$props2.getRef,
          popupDirection = _this$props2.popupDirection,
          options = _this$props2.options,
          sizeY = _this$props2.sizeY,
          platform = _this$props2.platform,
          onChange = _this$props2.onChange,
          restProps = objectWithoutProperties(_this$props2, ["name", "className", "getRef", "popupDirection", "options", "sizeY", "platform", "onChange"]);

      var selected = this.getSelectedItem();
      var label = !selected ? '' : selected.label;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SelectMimicry$1, _extends_1({}, restProps, {
        "aria-hidden": true,
        onClick: this.onClick,
        onKeyDown: this.handleKeyDownSelect,
        onKeyUp: this.handleKeyUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        className: classNames((_classNames2 = {}, defineProperty(_classNames2, 'CustomSelect__open', opened), defineProperty(_classNames2, 'CustomSelect__open--popupDirectionTop', popupDirection === 'top'), _classNames2), className)
      }), label), name && /*#__PURE__*/react.createElement("input", {
        type: "hidden",
        ref: getRef,
        name: name,
        value: selected ? String(selected.value) : ''
      }), opened && /*#__PURE__*/react.createElement("div", {
        className: classNames((_classNames3 = {}, defineProperty(_classNames3, getClassname('CustomSelect__options', platform), opened), defineProperty(_classNames3, 'CustomSelect__options--popupDirectionTop', popupDirection === 'top'), defineProperty(_classNames3, "CustomSelect__options--sizeY-".concat(sizeY), !!sizeY), _classNames3)),
        onMouseLeave: this.resetFocusedOption
      }, /*#__PURE__*/react.createElement(CustomScrollView, {
        ref: this.scrollViewRef
      }, options.map(this.renderOption))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react.createElement("div", {
        className: "CustomSelect__container",
        ref: function ref(node) {
          return _this3.node = node;
        }
      }, this.renderWithCustomScrollbar());
    }
  }]);

  return CustomSelect;
}(react.Component);

var CustomSelect$1 = withPlatform(withAdaptivity(CustomSelect, {
  sizeY: true
}));

var Select = function Select(props) {
  var nativeSelectRef = react.useRef(); // Use custom select if device has connected a mouse

  if (hasMouse) {
    var _children = props.children,
        _getRef = props.getRef,
        _getRootRef = props.getRootRef,
        _restProps = objectWithoutProperties(props, ["children", "getRef", "getRootRef"]);

    var _options = [];

    if (Array.isArray(_children)) {
      // filter <option> elements from children root and ignore others
      _options = _children.filter(function (node) {
        return /*#__PURE__*/react.isValidElement(node) && node.type === 'option';
      }).map(function (element) {
        var _element$props$value$, _element$props, _element$props$value, _element$props$childr, _element$props2, _element$props2$child;

        var value = (_element$props$value$ = (_element$props = element.props) === null || _element$props === void 0 ? void 0 : (_element$props$value = _element$props.value) === null || _element$props$value === void 0 ? void 0 : _element$props$value.toString()) !== null && _element$props$value$ !== void 0 ? _element$props$value$ : '';
        var label = (_element$props$childr = (_element$props2 = element.props) === null || _element$props2 === void 0 ? void 0 : (_element$props2$child = _element$props2.children) === null || _element$props2$child === void 0 ? void 0 : _element$props2$child.toString()) !== null && _element$props$childr !== void 0 ? _element$props$childr : '';
        return {
          value: value,
          label: label
        };
      });
    }

    var value = _restProps.hasOwnProperty('value') ? _restProps.value : _restProps.defaultValue;
    return /*#__PURE__*/react.createElement(CustomSelect$1, _extends_1({
      options: _options,
      getRef: _getRef,
      getRootRef: _getRootRef,
      value: value
    }, _restProps));
  }

  var options = props.options,
      children = props.children,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      restProps = objectWithoutProperties(props, ["options", "children", "onChange", "onFocus", "onBlur", "getRef", "getRootRef"]);

  var handleFocus = function handleFocus() {
    onFocus && onFocus();
  };

  var handleBlur = function handleBlur() {
    onBlur && onBlur();
  };

  var handleChange = function handleChange(e) {
    var _nativeSelectRef$curr, _nativeSelectRef$curr2, _options$selectedInde;

    // values from DOM api is always strings
    // search for value from input options if present
    var selectedIndex = (_nativeSelectRef$curr = (_nativeSelectRef$curr2 = nativeSelectRef.current) === null || _nativeSelectRef$curr2 === void 0 ? void 0 : _nativeSelectRef$curr2.selectedIndex) !== null && _nativeSelectRef$curr !== void 0 ? _nativeSelectRef$curr : -1;
    var value = Array.isArray(options) ? (_options$selectedInde = options[selectedIndex]) === null || _options$selectedInde === void 0 ? void 0 : _options$selectedInde.value : e.target.value;
    onChange && onChange({
      value: value,
      name: e.target.name
    });
  };

  var getRefWrapper = function getRefWrapper(element) {
    nativeSelectRef.current = element;
    setRef(element, getRef);
  };

  return /*#__PURE__*/react.createElement(NativeSelect$1, _extends_1({
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    getRef: getRefWrapper,
    getRootRef: getRootRef
  }, restProps), !!children ? children : options.map(function (_ref, key) {
    var label = _ref.label,
        value = _ref.value;
    return /*#__PURE__*/react.createElement("option", {
      value: "".concat(value),
      key: key
    }, label);
  }));
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var DefaultMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

var DatePicker = /*#__PURE__*/function (_Component) {
  inherits(DatePicker, _Component);

  var _super = _createSuper$g(DatePicker);

  function DatePicker(props) {
    var _this;

    classCallCheck(this, DatePicker);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "parseInputDate", function (date) {
      var splited = date.split('-');
      return {
        day: Number(splited[2]),
        month: Number(splited[1]),
        year: Number(splited[0])
      };
    });

    defineProperty(assertThisInitialized(_this), "getDaysInMonth", function (year, month) {
      return new Date(year, month, 0).getDate();
    });

    defineProperty(assertThisInitialized(_this), "getMonthMaxDay", function () {
      var _this$state = _this.state,
          month = _this$state.month,
          year = _this$state.year;

      if (!month) {
        return 31;
      }

      if (!year) {
        return _this.getDaysInMonth(2016, month);
      }

      return _this.getDaysInMonth(year, month);
    });

    defineProperty(assertThisInitialized(_this), "getDayOptions", function () {
      var maxMonthDay = _this.getMonthMaxDay();

      var array = new Array(maxMonthDay);

      for (var i = 0; i < maxMonthDay; i++) {
        var _value = i + 1;

        array[i] = {
          label: String(_value),
          value: _value
        };
      }

      return array;
    });

    defineProperty(assertThisInitialized(_this), "getMonthOptions", function () {
      var monthNames = _this.props.monthNames;
      return (monthNames || DefaultMonths).map(function (name, index) {
        var value = index + 1;
        return {
          label: name,
          value: value
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "getYearOptions", function () {
      var _this$props = _this.props,
          max = _this$props.max,
          min = _this$props.min;
      var yearOptions = [];
      var maxYear = max.year;
      var minYear = min.year;

      for (var _value2 = maxYear; _value2 >= minYear; _value2--) {
        yearOptions.push({
          label: String(_value2),
          value: _value2
        });
      }

      return yearOptions;
    });

    defineProperty(assertThisInitialized(_this), "onSelectChange", function (_ref) {
      var value = _ref.value,
          name = _ref.name;
      var onDateChange = _this.props.onDateChange;

      _this.setState(function () {
        return defineProperty({}, name, value);
      }, function () {
        onDateChange && onDateChange(_this.state);
      });
    });

    defineProperty(assertThisInitialized(_this), "onStringChange", function (e) {
      var onDateChange = _this.props.onDateChange;
      var value = e.currentTarget.value;

      var date = _this.parseInputDate(value);

      _this.setState(function () {
        return _objectSpread$8({}, date);
      });

      onDateChange && onDateChange(date);
    });

    _this.state = props.defaultValue ? props.defaultValue : {
      day: 0,
      month: 0,
      year: 0
    };
    return _this;
  } // Переводим state к формату гг-мм-дд


  createClass(DatePicker, [{
    key: "convertToInputFormat",
    value: function convertToInputFormat(date) {
      var day = date.day,
          month = date.month,
          year = date.year;
      return "".concat(year, "-").concat(leadingZero(month), "-").concat(leadingZero(day));
    }
  }, {
    key: "customView",
    value: function customView() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          dayPlaceholder = _this$props2.dayPlaceholder,
          monthPlaceholder = _this$props2.monthPlaceholder,
          yearPlaceholder = _this$props2.yearPlaceholder,
          popupDirection = _this$props2.popupDirection,
          status = _this$props2.status;
      var _this$state2 = this.state,
          day = _this$state2.day,
          month = _this$state2.month,
          year = _this$state2.year;
      return /*#__PURE__*/react.createElement("div", {
        className: "DatePicker"
      }, /*#__PURE__*/react.createElement("div", {
        className: "DatePicker__container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "DatePicker__day"
      }, /*#__PURE__*/react.createElement(Select, {
        name: "day",
        value: day,
        options: this.getDayOptions(),
        status: status,
        placeholder: dayPlaceholder,
        popupDirection: popupDirection,
        onChange: this.onSelectChange
      })), /*#__PURE__*/react.createElement("div", {
        className: "DatePicker__month"
      }, /*#__PURE__*/react.createElement(Select, {
        name: "month",
        value: month,
        options: this.getMonthOptions(),
        status: status,
        placeholder: monthPlaceholder,
        popupDirection: popupDirection,
        onChange: this.onSelectChange
      })), /*#__PURE__*/react.createElement("div", {
        className: "DatePicker__year"
      }, /*#__PURE__*/react.createElement(Select, {
        name: "year",
        value: year,
        options: this.getYearOptions(),
        status: status,
        placeholder: yearPlaceholder,
        popupDirection: popupDirection,
        onChange: this.onSelectChange
      }))), /*#__PURE__*/react.createElement("input", {
        type: "hidden",
        name: name,
        value: this.convertToInputFormat(this.state)
      }));
    }
  }, {
    key: "nativeView",
    value: function nativeView() {
      var _this$props3 = this.props,
          top = _this$props3.top,
          name = _this$props3.name,
          min = _this$props3.min,
          max = _this$props3.max,
          status = _this$props3.status;
      var _this$state3 = this.state,
          day = _this$state3.day,
          month = _this$state3.month,
          year = _this$state3.year;

      if (day && month && year) {
        return /*#__PURE__*/react.createElement(Input$1, {
          top: top,
          name: name,
          status: status,
          type: "date",
          defaultValue: this.convertToInputFormat(this.state),
          onChange: this.onStringChange,
          min: this.convertToInputFormat(min),
          max: this.convertToInputFormat(max)
        });
      }

      return /*#__PURE__*/react.createElement(Input$1, {
        top: top,
        name: name,
        status: status,
        type: "date",
        onChange: this.onStringChange,
        min: this.convertToInputFormat(min),
        max: this.convertToInputFormat(max)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return hasMouse ? this.customView() : this.nativeView();
    }
  }]);

  return DatePicker;
}(react.Component);

var DatePicker$1 = withAdaptivity(DatePicker, {});

var cancel_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 28 28';
var id = 'cancel_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cancel_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M6.293 6.293a1 1 0 011.414 0L14 12.585l6.293-6.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L15.415 14l6.292 6.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L14 15.415l-6.293 6.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414L12.585 14 6.293 7.707a1 1 0 01-.083-1.32z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28CancelOutline = function Icon28CancelOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28CancelOutline.mountIcon = mountIcon;
var _default = Icon28CancelOutline;
exports.default = _default;

});

var Icon28CancelOutline = /*@__PURE__*/getDefaultExportFromCjs(cancel_outline);

var PanelHeaderClose = function PanelHeaderClose(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ["children"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(PanelHeaderButton, restProps, platform === ANDROID ? /*#__PURE__*/react.createElement(Icon28CancelOutline, null) : children);
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена'
};

var chevron_back = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 20 28';
var id = 'chevron_back_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v28H0z" /><path d="M4.56 12.94L13 4.5a1.414 1.414 0 012 2L7.5 14l7.5 7.5a1.414 1.414 0 01-2 2l-8.44-8.44a1.5 1.5 0 010-2.12z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28ChevronBack = function Icon28ChevronBack(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ChevronBack.mountIcon = mountIcon;
var _default = Icon28ChevronBack;
exports.default = _default;

});

var Icon28ChevronBack = /*@__PURE__*/getDefaultExportFromCjs(chevron_back);

var arrow_left_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 28 28';
var id = 'arrow_left_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path d="M12.293 6.293a1 1 0 011.414 1.414L8.414 13H22a1 1 0 01.993.883L23 14a1 1 0 01-1 1H8.414l5.293 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-7-7-.073-.082A1.005 1.005 0 015 14l.004.09A1.006 1.006 0 015 14.02V14a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28ArrowLeftOutline = function Icon28ArrowLeftOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ArrowLeftOutline.mountIcon = mountIcon;
var _default = Icon28ArrowLeftOutline;
exports.default = _default;

});

var Icon28ArrowLeftOutline = /*@__PURE__*/getDefaultExportFromCjs(arrow_left_outline);

var PanelHeaderBack = function PanelHeaderBack(props) {
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(PanelHeaderButton, props, platform === ANDROID ? /*#__PURE__*/react.createElement(Icon28ArrowLeftOutline, null) : /*#__PURE__*/react.createElement(Icon28ChevronBack, null));
};

var PanelHeaderBack$1 = /*#__PURE__*/react.memo(PanelHeaderBack);

export { ANDROID, Avatar, Banner, Button$1 as Button, Card, CardGrid, Cell$1 as Cell, CellButton$1 as CellButton, DatePicker$1 as DatePicker, Div, FixedLayout$1 as FixedLayout, FormLayout, FormLayoutGroup, Group$1 as Group, Header, IOS, Input$1 as Input, List, ModalCard$1 as ModalCard, ModalRoot$1 as ModalRoot, Panel$1 as Panel, PanelHeader$1 as PanelHeader, PanelHeaderBack$1 as PanelHeaderBack, PanelHeaderClose, Placeholder, Progress, Radio$1 as Radio, Root$1 as Root, Select, SelectMimicry$1 as SelectMimicry, Separator$1 as Separator, SimpleCell$1 as SimpleCell, Tappable$1 as Tappable, Text, Textarea$1 as Textarea, Title, View$1 as View, classNames, getClassname as getClassName, usePlatform, withPlatform };
