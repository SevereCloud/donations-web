import React from '../../web_modules/react.js';
import { View, Panel, PanelHeader, Placeholder, Button } from '../../web_modules/@vkontakte/vkui.js';
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      activePanel,
      setView
    } = this.props;
    const {} = this.state;
    return /*#__PURE__*/React.createElement(View, {
      id: id,
      activePanel: activePanel
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: true
    }, "\u041F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(Placeholder, {
      style: {
        background: 'transparent'
      },
      action: /*#__PURE__*/React.createElement(Button, {
        size: "m",
        onClick: () => setView('creating')
      }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0431\u043E\u0440"),
      stretched: true
    }, "\u0423 \u0412\u0430\u0441 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u0431\u043E\u0440\u043E\u0432.", /*#__PURE__*/React.createElement("br", null), "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0434\u043E\u0431\u0440\u043E\u0435 \u0434\u0435\u043B\u043E.")));
  }

}