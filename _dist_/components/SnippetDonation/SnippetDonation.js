function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { Progress, SimpleCell, Separator, usePlatform, getClassName, classNames } from '../../../web_modules/@vkontakte/vkui.js';

const SnippetDonation = ({
  className,
  background,
  title,
  description,
  progress,
  value,
  action,
  ...restProps
}) => {
  const platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(className, getClassName('SnippetDonation', platform))
  }), /*#__PURE__*/React.createElement("div", {
    className: "SnippetDonation__background"
  }, background), /*#__PURE__*/React.createElement("div", {
    className: "SnippetDonation__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "SnippetDonation__cell"
  }, /*#__PURE__*/React.createElement(SimpleCell, {
    disabled: true,
    description: description
  }, title)), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    className: "SnippetDonation__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "SnippetDonation__before"
  }, /*#__PURE__*/React.createElement("div", {
    className: "SnippetDonation__progress"
  }, progress), /*#__PURE__*/React.createElement(Progress, {
    value: value
  })), /*#__PURE__*/React.createElement("div", {
    className: "SnippetDonation__action"
  }, action))));
};

export default SnippetDonation;