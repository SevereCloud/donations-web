function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { usePlatform, getClassName, classNames } from '../../../web_modules/@vkontakte/vkui.js';

const CardDivider = ({
  className,
  getRootRef,
  ...restProps
}) => {
  const platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassName('CardDivider', platform), className)
  }));
};

export default CardDivider;