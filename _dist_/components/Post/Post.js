function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { SimpleCell, usePlatform, getClassName, classNames, Avatar } from '../../../web_modules/@vkontakte/vkui.js';
import PostBar from '../PostBar/PostBar.js';

const Post = ({
  className,
  author,
  date,
  likes,
  comments,
  reposts,
  views,
  children,
  ...restProps
}) => {
  const platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(className, getClassName('Post', platform))
  }), /*#__PURE__*/React.createElement("div", {
    className: "Post__header"
  }, /*#__PURE__*/React.createElement(SimpleCell, {
    disabled: true,
    description: date,
    before: /*#__PURE__*/React.createElement(Avatar, {
      size: 48,
      src: author.photo_100
    })
  }, author.name)), /*#__PURE__*/React.createElement("div", {
    className: "Post__content"
  }, children), /*#__PURE__*/React.createElement(PostBar, {
    likes: likes,
    comments: comments,
    reposts: reposts,
    views: views
  }));
};

export default Post;