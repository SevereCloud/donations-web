function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../../web_modules/react.js';
import { PanelHeader, Div, Button, FixedLayout, Input, Select, PanelHeaderClose, FormLayout } from '../../../web_modules/@vkontakte/vkui.js';
import CoverLoader from '../../components/CoverLoader/CoverLoader.js';
import { Icon28PictureOutline } from '../../../web_modules/@vkontakte/icons.js';
const defaultAchievement = {
  name: '',
  image: '',
  type: 'repost'
};
export class AchievementEdit extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setAchievement", achievement => {
      const newAchievement = Object.assign({}, this.state.achievement, achievement);
      this.setState({
        achievement: newAchievement
      });
    });

    this.state = {
      achievement: props.achievement || defaultAchievement
    };
  }

  render() {
    const {
      update,
      goBack
    } = this.props;
    const {
      achievement
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderClose, {
        onClick: () => goBack()
      }, "\u041E\u0442\u043C\u0435\u043D\u0430") // right={
      //   <PanelHeaderSubmit onClick={() => update(achievement)}>
      //     Готово
      //   </PanelHeaderSubmit>
      // }

    }, "\u041D\u0430\u0433\u0440\u0430\u0434\u0430"), /*#__PURE__*/React.createElement(Div, {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(CoverLoader, {
      title: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
      before: /*#__PURE__*/React.createElement(Icon28PictureOutline, null),
      image: achievement.image,
      width: 140,
      onLoadImage: image => this.setAchievement({
        image: image
      }),
      onDismiss: () => this.setAchievement({
        image: ''
      })
    })), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(Input, {
      top: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B",
      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B",
      value: achievement.name,
      onChange: e => this.setAchievement({
        name: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Select, {
      top: "\u0422\u0438\u043F \u043D\u0430\u0433\u0440\u0430\u0434\u044B",
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043D\u0430\u0433\u0440\u0430\u0434\u044B",
      value: achievement.type,
      onChange: e => this.setAchievement({
        type: e.value
      })
    }, /*#__PURE__*/React.createElement("option", {
      value: "repost"
    }, "\u0417\u0430 \u0440\u0435\u043F\u043E\u0441\u0442"), /*#__PURE__*/React.createElement("option", {
      value: "amount"
    }, "\u0417\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443")), achievement.type === 'amount' && /*#__PURE__*/React.createElement(Input, {
      top: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430, \u20BD",
      type: "number",
      pattern: "[0-9]*",
      placeholder: "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u0437\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443",
      value: achievement.min || undefined,
      onChange: e => {
        const achievementMin = parseFloat(e.target.value); // prevent passing NaN or negative numbers as donation.need value

        if (!isNaN(achievementMin) && achievementMin >= 0) {
          this.setAchievement({
            min: achievementMin
          });
        } else {
          this.setAchievement({
            min: 0
          });
        }
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      disabled: !(achievement.image && achievement.type && achievement.name && (achievement.type === 'amount' ? achievement.min > 0 : true)),
      size: "l",
      stretched: true,
      onClick: () => update(achievement)
    }, this.props.achievement ? 'Сохранить награду' : 'Создать награду'))));
  }

}