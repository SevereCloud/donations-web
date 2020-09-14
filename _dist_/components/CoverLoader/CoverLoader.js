function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from '../../../web_modules/react.js';
import { Text, getClassName, classNames, Tappable, withPlatform, ANDROID, IOS } from '../../../web_modules/@vkontakte/vkui.js';
import { Icon24Cancel, Icon24DismissOverlay } from '../../../web_modules/@vkontakte/icons.js';

class CoverLoader extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "change", input => {
      if (input.target.files && input.target.files[0]) {
        let reader = new FileReader();

        reader.onload = e => {
          if (e.target && typeof e.target.result === 'string') {
            this.setState({
              value: e.target.result
            });

            if (this.props.onLoadImage) {
              this.props.onLoadImage(e.target.result);
            }
          }
        };

        reader.readAsDataURL(input.target.files[0]);
      }

      if (this.props.onChange) {
        this.props.onChange(input);
      }
    });

    _defineProperty(this, "dismiss", e => {
      this.setState({
        value: undefined
      });

      if (this.props.onDismiss) {
        this.props.onDismiss(e);
      }
    });

    this.state = {
      value: this.props.image
    };
  }

  render() {
    const {
      className,
      title,
      before,
      getRef,
      getRootRef,
      style,
      platform,
      onChange,
      onDismiss,
      onLoadImage,
      error,
      errorText,
      width,
      ...restProps
    } = this.props;
    const {
      value
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tappable, {
      disabled: !!value,
      className: classNames(className, getClassName('CoverLoader', platform), {
        'CoverLoader--load': !!value,
        'CoverLoader--square': !!width && width < 160,
        CoverLoader__error: error
      }),
      style: { ...style,
        backgroundImage: `url(${value})`,
        width: width
      },
      getRootRef: getRootRef,
      Component: "label"
    }, /*#__PURE__*/React.createElement("input", _extends({
      disabled: !!value
    }, restProps, {
      className: "CoverLoader__input",
      type: "file",
      accept: "image/*",
      ref: getRef,
      onChange: this.change
    })), /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__in"
    }, before && /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__before"
    }, before), /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__content"
    }, title)), !!value && /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__dismiss"
    }, /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__dismissIcon",
      onClick: this.dismiss
    }, platform === ANDROID && /*#__PURE__*/React.createElement(Icon24Cancel, null), platform === IOS && /*#__PURE__*/React.createElement(Icon24DismissOverlay, null)))), error && /*#__PURE__*/React.createElement(Text, {
      weight: "regular",
      className: "CoverLoader__error_text"
    }, errorText));
  }

}

export default withPlatform(CoverLoader);