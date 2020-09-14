import { r as react } from '../common/index-2cd4dd6b.js';
import { b as browserSprite$1, e as es6ObjectAssign, a as browserSymbol } from '../common/browser-sprite-329c1bbb.js';

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite = new browserSprite$1({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite.attach(spriteNode);
    } else {
      browserSprite.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite) {
    browserSprite.add(symbol);
  }
}
var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

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
  return /*#__PURE__*/react.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: "Icon Icon--".concat(size, " Icon--w-").concat(width, " Icon--h-").concat(height, " Icon--").concat(id, " ").concat(className),
    style: _objectSpread({}, style, {
      width: width,
      height: height
    })
  }), /*#__PURE__*/react.createElement("svg", {
    viewBox: viewBox,
    width: width,
    height: height,
    style: svgStyle
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#".concat(id),
    style: {
      fill: 'currentColor',
      color: fill
    }
  })));
};
SvgIcon.defaultProps = {
  className: '',
  style: {}
};

var viewBox = '0 0 24 24';
var id = 'cancel_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cancel_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    addSpriteSymbol(new browserSymbol({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Cancel = function Icon24Cancel(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Cancel.mountIcon = mountIcon;

var viewBox$1 = '0 0 24 24';
var id$1 = 'comment_outline_24';
var content$1 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M16.895 4h-9.79c-1.152 0-1.74.113-2.35.44A3.171 3.171 0 003.44 5.755c-.327.61-.44 1.198-.44 2.35v5.79c0 1.152.113 1.74.44 2.35.302.565.75 1.013 1.315 1.315l.14.071c.517.25 1.05.352 1.954.367L7.1 18v2.215c0 .432.17.846.472 1.155l.116.108a1.65 1.65 0 002.217-.085L13.366 18h3.53c1.151 0 1.738-.113 2.35-.44a3.171 3.171 0 001.314-1.315c.327-.61.44-1.198.44-2.35v-5.79c0-1.152-.113-1.74-.44-2.35a3.171 3.171 0 00-1.315-1.315c-.61-.327-1.198-.44-2.35-.44zM6.912 5.801l9.983-.001c.88 0 1.187.06 1.502.228.25.134.441.325.575.575.169.315.228.622.228 1.502v5.79l-.004.368c-.017.607-.081.867-.224 1.134-.134.25-.325.441-.575.575-.315.169-.622.228-1.502.228H13l-.117.008a.9.9 0 00-.513.25L8.9 19.856V17.1a.9.9 0 00-.9-.9h-.895l-.368-.004c-.607-.017-.867-.081-1.134-.224a1.372 1.372 0 01-.575-.575c-.169-.315-.228-.622-.228-1.502v-5.79l.004-.368c.017-.607.081-.867.224-1.134.134-.25.325-.441.575-.575.291-.156.574-.218 1.309-.227z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$1 = false;

function mountIcon$1() {
  if (!isMounted$1) {
    addSpriteSymbol(new browserSymbol({
      id: id$1,
      viewBox: viewBox$1,
      content: content$1
    }));
    isMounted$1 = true;
  }
}

var Icon24CommentOutline = function Icon24CommentOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$1();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$1,
    id: id$1,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24CommentOutline.mountIcon = mountIcon$1;

var viewBox$2 = '0 0 24 24';
var id$2 = 'dismiss_overlay_24';
var content$2 = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dismiss_overlay_24"><path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z" fill="#99a2ad" stroke="#fff" stroke-width="2" /><path d="M16.736 7.264a.9.9 0 010 1.272L13.273 12l3.463 3.464a.9.9 0 01.08 1.18l-.08.092a.9.9 0 01-1.272 0L12 13.273l-3.464 3.463a.9.9 0 11-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 01-.08-1.18l.08-.092a.9.9 0 011.272 0L12 10.727l3.464-3.463a.9.9 0 011.272 0z" fill="#fff" /></symbol>';
var isMounted$2 = false;

function mountIcon$2() {
  if (!isMounted$2) {
    addSpriteSymbol(new browserSymbol({
      id: id$2,
      viewBox: viewBox$2,
      content: content$2
    }));
    isMounted$2 = true;
  }
}

var Icon24DismissOverlay = function Icon24DismissOverlay(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$2();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$2,
    id: id$2,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24DismissOverlay.mountIcon = mountIcon$2;

var viewBox$3 = '0 0 24 24';
var id$3 = 'done_24';
var content$3 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="done_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9 16.2l-3.5-3.5a.99.99 0 10-1.4 1.4l4.193 4.193a1 1 0 001.414 0L20.3 7.7a.99.99 0 00-1.4-1.4L9 16.2z" fill="currentColor" /></g></symbol>';
var isMounted$3 = false;

function mountIcon$3() {
  if (!isMounted$3) {
    addSpriteSymbol(new browserSymbol({
      id: id$3,
      viewBox: viewBox$3,
      content: content$3
    }));
    isMounted$3 = true;
  }
}

var Icon24Done = function Icon24Done(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$3();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$3,
    id: id$3,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Done.mountIcon = mountIcon$3;

var viewBox$4 = '0 0 24 24';
var id$4 = 'like_outline_24';
var content$4 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="like_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M15.992 4.006c-1.451.064-2.753.637-3.881 1.694l-.117.113-.122-.118C10.662 4.576 9.275 4 7.734 4 4.577 4 2 6.56 2 9.717c0 3.088 1.127 4.552 6.182 8.546l2.688 2.098a1.837 1.837 0 002.26 0l2.364-1.843.933-.74C20.965 14.144 22 12.676 22 9.718 22 6.56 19.423 4 16.266 4zm.274 1.794c2.165 0 3.934 1.757 3.934 3.917l-.005.294c-.076 2.156-1.062 3.341-5.509 6.852l-2.663 2.078a.038.038 0 01-.046 0l-2.364-1.843-.874-.691c-4.142-3.31-4.939-4.44-4.939-6.69C3.8 7.557 5.569 5.8 7.734 5.8c1.333 0 2.507.618 3.57 1.915a.9.9 0 001.398-.007C13.739 6.416 14.909 5.8 16.266 5.8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$4 = false;

function mountIcon$4() {
  if (!isMounted$4) {
    addSpriteSymbol(new browserSymbol({
      id: id$4,
      viewBox: viewBox$4,
      content: content$4
    }));
    isMounted$4 = true;
  }
}

var Icon24LikeOutline = function Icon24LikeOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$4();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$4,
    id: id$4,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24LikeOutline.mountIcon = mountIcon$4;

var viewBox$5 = '0 0 24 24';
var id$5 = 'share_outline_24';
var content$5 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="share_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M11.996 3.725A2.15 2.15 0 0010 5.87l-.001 2.117-.02.005a9.904 9.904 0 00-7.827 10.721c.083.811 1.116 1.103 1.611.455l.187-.237a9.082 9.082 0 015.836-3.265l.213-.026.001 2.494a2.15 2.15 0 003.476 1.692l7.824-6.132a2.15 2.15 0 000-3.384l-7.824-6.132a2.15 2.15 0 00-1.326-.458zm.154 1.795a.35.35 0 01.216.075l7.824 6.132a.35.35 0 010 .55l-7.824 6.133a.35.35 0 01-.566-.276l-.001-3.447a.9.9 0 00-.915-.9l-.233.004-.342.017a10.88 10.88 0 00-6.119 2.365l-.174.144.024-.135a8.103 8.103 0 016.968-6.537.9.9 0 00.791-.893L11.8 5.87a.35.35 0 01.35-.35z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$5 = false;

function mountIcon$5() {
  if (!isMounted$5) {
    addSpriteSymbol(new browserSymbol({
      id: id$5,
      viewBox: viewBox$5,
      content: content$5
    }));
    isMounted$5 = true;
  }
}

var Icon24ShareOutline = function Icon24ShareOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$5();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$5,
    id: id$5,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24ShareOutline.mountIcon = mountIcon$5;

var viewBox$6 = '0 0 24 24';
var id$6 = 'view_24';
var content$6 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="view_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 19c-6 0-10-5.6-10-7 0-1.4 4-7 10-7s10 5.6 10 7c0 1.4-4 7-10 7zm0-2a5 5 0 100-10 5 5 0 000 10zm.001-2.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" /></g></symbol>';
var isMounted$6 = false;

function mountIcon$6() {
  if (!isMounted$6) {
    addSpriteSymbol(new browserSymbol({
      id: id$6,
      viewBox: viewBox$6,
      content: content$6
    }));
    isMounted$6 = true;
  }
}

var Icon24View = function Icon24View(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$6();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$6,
    id: id$6,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24View.mountIcon = mountIcon$6;

var viewBox$7 = '0 0 28 28';
var id$7 = 'calendar_outline_28';
var content$7 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="calendar_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19 1a1 1 0 011 1v1.16c.84.133 1.384.35 1.93.641A5.452 5.452 0 0124.2 6.07c.475.889.748 1.77.794 3.93L25 10v7.308l-.005.61c-.041 2.22-.315 3.113-.796 4.013a5.452 5.452 0 01-2.268 2.268c-.978.523-1.948.801-4.623.801h-6.616l-.61-.005c-2.22-.041-3.113-.315-4.013-.796a5.452 5.452 0 01-2.268-2.268c-.502-.94-.778-1.87-.8-4.31L3 10.691V10c.053-2.16.326-3.042.801-3.93A5.452 5.452 0 016.07 3.8 5.679 5.679 0 018 3.16V2a1 1 0 112 0v1.007c.217-.005.447-.007.692-.007h6.616c.245 0 .476.002.694.007L18 2a1 1 0 011-1zm3.999 11H5v5.591l.01.57c.039 1.506.198 2.159.555 2.826.337.63.818 1.111 1.448 1.448.746.4 1.473.551 3.396.564h7.182l.57-.009c1.506-.039 2.159-.198 2.826-.555a3.453 3.453 0 001.448-1.448c.4-.746.551-1.473.564-3.396V12zm-3.953 5c.433 0 .774.081 1.059.234.285.152.509.376.661.661.153.285.234.626.234 1.059v.092c0 .433-.081.774-.234 1.059a1.59 1.59 0 01-.661.661c-.285.153-.626.234-1.059.234h-.092c-.433 0-.774-.081-1.059-.234a1.59 1.59 0 01-.661-.661c-.153-.285-.234-.626-.234-1.059v-.092c0-.433.081-.774.234-1.059a1.59 1.59 0 01.661-.661c.285-.153.626-.234 1.059-.234h.092zM17.591 5H10.41L10 5.007V6a1 1 0 11-2 0v-.807c-.381.087-.683.21-.987.372a3.453 3.453 0 00-1.448 1.448c-.37.69-.527 1.365-.559 2.986L22.993 10l-.003-.16c-.039-1.507-.198-2.16-.555-2.827a3.453 3.453 0 00-1.448-1.448 3.835 3.835 0 00-.986-.372L20 6a1 1 0 01-2 0l.002-.994-.41-.005z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$7 = false;

function mountIcon$7() {
  if (!isMounted$7) {
    addSpriteSymbol(new browserSymbol({
      id: id$7,
      viewBox: viewBox$7,
      content: content$7
    }));
    isMounted$7 = true;
  }
}

var Icon28CalendarOutline = function Icon28CalendarOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$7();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$7,
    id: id$7,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28CalendarOutline.mountIcon = mountIcon$7;

var viewBox$8 = '0 0 28 28';
var id$8 = 'picture_outline_28';
var content$8 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="picture_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M16.308 3c2.59 0 3.818.237 5.094.92a6.452 6.452 0 012.678 2.678c.683 1.276.92 2.504.92 5.094v4.616c0 2.59-.237 3.818-.92 5.094a6.452 6.452 0 01-2.678 2.678c-1.276.683-2.504.92-5.094.92h-4.616c-2.59 0-3.818-.237-5.094-.92a6.452 6.452 0 01-2.678-2.678C3.237 20.126 3 18.898 3 16.308v-4.616c0-2.59.237-3.818.92-5.094A6.452 6.452 0 016.598 3.92C7.874 3.237 9.102 3 11.692 3h4.616zm1.671 12.442l-4.202 5.187a1 1 0 01-1.417.14l-2.299-1.916-3.098 3.099c.181.134.374.256.578.365.947.506 1.863.683 4.15.683h4.617c2.288 0 3.204-.177 4.15-.683a4.452 4.452 0 001.859-1.858c.147-.275.266-.547.361-.85l-4.699-4.167zM16.31 5h-4.617c-2.288 0-3.204.177-4.15.683a4.452 4.452 0 00-1.859 1.858C5.177 8.488 5 9.404 5 11.691v4.617c0 2.257.172 3.18.663 4.113l3.63-3.628a1 1 0 011.347-.061l2.221 1.85 4.222-5.211a1 1 0 011.44-.12l4.466 3.96c.007-.276.011-.575.011-.903v-4.616c0-2.288-.177-3.204-.683-4.15a4.452 4.452 0 00-1.858-1.859C19.512 5.177 18.596 5 16.309 5zM10.5 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$8 = false;

function mountIcon$8() {
  if (!isMounted$8) {
    addSpriteSymbol(new browserSymbol({
      id: id$8,
      viewBox: viewBox$8,
      content: content$8
    }));
    isMounted$8 = true;
  }
}

var Icon28PictureOutline = function Icon28PictureOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$8();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$8,
    id: id$8,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28PictureOutline.mountIcon = mountIcon$8;

var viewBox$9 = '0 0 28 28';
var id$9 = 'target_outline_28';
var content$9 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="target_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2a1 1 0 011 1l.001 1.05c4.724.469 8.48 4.226 8.95 8.95H25a1 1 0 010 2l-1.05.001a10.003 10.003 0 01-8.949 8.95L15 25a1 1 0 01-2 0v-1.05a10.003 10.003 0 01-8.95-8.949L3 15a1 1 0 010-2h1.05A10.003 10.003 0 0113 4.05V3a1 1 0 011-1zm1.001 4.062L15 7a1 1 0 01-2 0v-.938A8.004 8.004 0 006.062 13H7a1 1 0 010 2l-.938.001A8.004 8.004 0 0013 21.938V21a1 1 0 012 0l.001.938a8.004 8.004 0 006.937-6.937L21 15a1 1 0 010-2h.938a8.004 8.004 0 00-6.937-6.938zM14 12a2 2 0 110 4 2 2 0 010-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$9 = false;

function mountIcon$9() {
  if (!isMounted$9) {
    addSpriteSymbol(new browserSymbol({
      id: id$9,
      viewBox: viewBox$9,
      content: content$9
    }));
    isMounted$9 = true;
  }
}

var Icon28TargetOutline = function Icon28TargetOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$9();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$9,
    id: id$9,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28TargetOutline.mountIcon = mountIcon$9;

export { Icon24Cancel, Icon24CommentOutline, Icon24DismissOverlay, Icon24Done, Icon24LikeOutline, Icon24ShareOutline, Icon24View, Icon28CalendarOutline, Icon28PictureOutline, Icon28TargetOutline };
