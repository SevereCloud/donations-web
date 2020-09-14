function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { usePlatform, getClassName, classNames, Tappable } from '../../../web_modules/@vkontakte/vkui.js';
import { Icon24CommentOutline, Icon24LikeOutline, Icon24ShareOutline, Icon24View } from '../../../web_modules/@vkontakte/icons.js';

const PostBar = ({
  className,
  likes,
  comments,
  reposts,
  views,
  children,
  ...restProps
}) => {
  const platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(className, getClassName('PostBar', platform))
  }), /*#__PURE__*/React.createElement(Tappable, {
    className: "PostBar__button"
  }, /*#__PURE__*/React.createElement(Icon24LikeOutline, null), likes || ''), /*#__PURE__*/React.createElement(Tappable, {
    className: "PostBar__button"
  }, /*#__PURE__*/React.createElement(Icon24CommentOutline, null), comments || ''), /*#__PURE__*/React.createElement(Tappable, {
    className: "PostBar__button"
  }, /*#__PURE__*/React.createElement(Icon24ShareOutline, null), reposts || ''), /*#__PURE__*/React.createElement("div", {
    className: "PostBar__views"
  }, /*#__PURE__*/React.createElement(Icon24View, {
    width: 20,
    height: 20
  }), views));
};

export default PostBar;