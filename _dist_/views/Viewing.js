import React from '../../web_modules/react.js';
import { View, Panel, Title, Separator, Text, Div, FixedLayout, Button } from '../../web_modules/@vkontakte/vkui.js';
import ViewState, { StateProgressWithAnimation } from '../components/ViewState/ViewState.js';
import PostBar from '../components/PostBar/PostBar.js';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation.js';
import { moneyFormat } from '../lib.js';
export class Viewing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      donation
    } = this.props;
    const {} = this.state;
    return /*#__PURE__*/React.createElement(View, {
      id: id,
      activePanel: "main"
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundImage: `url(${donation?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 140
      }
    }), donation && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Title, {
      level: "1",
      weight: "bold"
    }, donation.title), /*#__PURE__*/React.createElement(Text, {
      weight: "medium",
      style: {
        opacity: 0.67
      }
    }, "\u0410\u0432\u0442\u043E\u0440 ", donation.author.name), /*#__PURE__*/React.createElement(Text, {
      weight: "regular",
      style: {
        opacity: 0.33
      }
    }, "\u0421\u0431\u043E\u0440 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 5 \u0434\u043D\u0435\u0439")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(StateProgressWithAnimation, {
      label: "\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043E 20 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
      donationNeed: 10000
    }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Text, {
      weight: "regular"
    }, donation.description)), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(PostBar, {
      likes: 65,
      comments: 65,
      reposts: 4,
      views: "7,2\u041A"
    }), /*#__PURE__*/React.createElement(Separator, {
      wide: true
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(SnippetDonation, {
      className: "SnippetBar",
      title: donation.title,
      description: `${donation.author.name}· Закончится через 5 дней`,
      progress: `Собрано ${moneyFormat(8750)} ₽ из ${moneyFormat(donation.need)} ₽`,
      value: 40,
      action: /*#__PURE__*/React.createElement(Button, {
        mode: "primary",
        style: {
          backgroundColor: '#4bb34b'
        }
      }, "\u041F\u043E\u043C\u043E\u0447\u044C")
    })), /*#__PURE__*/React.createElement(ViewState, null))));
  }

}