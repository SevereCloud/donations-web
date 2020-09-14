import React from '../../../web_modules/react.js';
import { PanelHeader, Div, PanelHeaderBack, CellButton, Placeholder, Button, FixedLayout, Avatar, Cell } from '../../../web_modules/@vkontakte/vkui.js';
import { achievementDescription } from '../../lib.js';
export class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removable: false
    };
  }

  render() {
    const {
      setPanel,
      goBack,
      achievements,
      choseNew,
      choseEdit,
      remove
    } = this.props;
    const {
      removable
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u041D\u0430\u0433\u0440\u0430\u0434\u044B"), achievements.length && /*#__PURE__*/React.createElement(React.Fragment, null, achievements.map((achievement, index) => /*#__PURE__*/React.createElement(Cell, {
      before: /*#__PURE__*/React.createElement(Avatar, {
        mode: "image",
        src: achievement.image
      }),
      description: achievementDescription(achievement),
      key: index,
      removable: removable,
      onClick: () => choseEdit(index),
      onRemove: () => remove(index)
    }, achievement.name)), !removable && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CellButton, {
      onClick: () => this.setState({
        removable: true
      }),
      mode: "danger"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0433\u0440\u0430\u0434\u0443"), /*#__PURE__*/React.createElement(CellButton, {
      onClick: choseNew
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0433\u0440\u0430\u0434\u0443"))) || /*#__PURE__*/React.createElement(Placeholder, {
      action: /*#__PURE__*/React.createElement(Button, {
        size: "m",
        onClick: choseNew
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0433\u0440\u0430\u0434\u0443"),
      stretched: true
    }, "\u0423 \u0412\u0430\u0441 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043D\u0430\u0433\u0440\u0430\u0434."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, removable && achievements.length && /*#__PURE__*/React.createElement(Button, {
      size: "l",
      stretched: true,
      onClick: () => this.setState({
        removable: false
      })
    }, "\u0413\u043E\u0442\u043E\u0432\u043E") || /*#__PURE__*/React.createElement(Button, {
      size: "l",
      stretched: true,
      onClick: () => setPanel('posting')
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0431\u043E\u0440"))));
  }

}