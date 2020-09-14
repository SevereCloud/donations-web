function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../web_modules/react.js';
import { View, Panel, PanelHeader, Button, PanelHeaderBack } from '../../web_modules/@vkontakte/vkui.js';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation.js';
import { moneyFormat } from '../lib.js';
import Post from '../components/Post/Post.js';
import CardDivider from '../components/CardDivider/CardDivider.js';
export class Newsfeed extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setAnimationInterval", interval => this.setState({
      animationInterval: interval
    }));

    this.state = {
      donationNeedProgress: 0,
      animationInterval: null
    };
  }

  componentDidMount() {
    const {
      donation
    } = this.props;
    const donationNeed = donation?.need || 0;
    const progressWeight = donationNeed >= 100 ? 0.02 : 0.04;
    const animationInterval = setInterval(() => {
      this.setState(prevState => {
        const newDonationNeedProgress = Math.floor(prevState.donationNeedProgress + donationNeed * progressWeight);
        return {
          donationNeedProgress: newDonationNeedProgress > donationNeed ? donationNeed : newDonationNeedProgress
        };
      });
    }, 150);
    this.setAnimationInterval(animationInterval);
  }

  componentDidUpdate() {
    const {
      donation
    } = this.props;
    const donationNeed = donation?.need || 0;
    const {
      donationNeedProgress,
      animationInterval
    } = this.state;

    if (donationNeedProgress >= donationNeed && animationInterval) {
      clearInterval(animationInterval);
    }
  }

  render() {
    const {
      id,
      setView,
      goBack,
      donation,
      postText
    } = this.props;
    const {
      donationNeedProgress
    } = this.state;
    return /*#__PURE__*/React.createElement(View, {
      id: id,
      activePanel: "main"
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false,
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement(Post, {
      author: {
        id: 100,
        name: 'ВКонтакте',
        photo_100: ''
      },
      date: "\u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434",
      likes: 65,
      comments: 65,
      reposts: 4,
      views: "7,2\u041A",
      style: {
        marginTop: -100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 80,
        width: '100%',
        backgroundColor: 'var(--placeholder_icon_background)'
      }
    })), /*#__PURE__*/React.createElement(CardDivider, null), donation && /*#__PURE__*/React.createElement(Post, {
      author: donation.author,
      date: "\u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434",
      likes: 65,
      comments: 65,
      reposts: 4,
      views: "7,2\u041A"
    }, postText, /*#__PURE__*/React.createElement(SnippetDonation, {
      title: donation.title,
      description: `${donation.author.name}· Закончится через 5 дней`,
      progress: `Собрано ${moneyFormat(donationNeedProgress)} ₽ из ${moneyFormat(donation.need)} ₽`,
      value: donationNeedProgress * 100 / donation.need,
      action: /*#__PURE__*/React.createElement(Button, {
        mode: "outline",
        onClick: () => setView('viewing')
      }, "\u041F\u043E\u043C\u043E\u0447\u044C"),
      background: /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundImage: `url(${donation.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 140
        }
      })
    })), /*#__PURE__*/React.createElement(CardDivider, null), /*#__PURE__*/React.createElement(Post, {
      author: {
        id: 100,
        name: 'ВКонтакте',
        photo_100: ''
      },
      date: "\u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434",
      likes: 65,
      comments: 65,
      reposts: 4,
      views: "7,2\u041A"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 500,
        width: '100%',
        backgroundColor: 'var(--placeholder_icon_background)'
      }
    }))));
  }

}