function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../web_modules/react.js';
import { View, Panel, PanelHeader, Placeholder, Button, PanelHeaderBack, Banner, Div, FormLayout, Input, Textarea, SelectMimicry, FormLayoutGroup, Radio, List, SimpleCell, Avatar, DatePicker, ModalRoot, ModalCard, FixedLayout } from '../../web_modules/@vkontakte/vkui.js';
import { Icon28TargetOutline, Icon28CalendarOutline, Icon28PictureOutline, Icon24Done } from '../../web_modules/@vkontakte/icons.js';
import CoverLoader from '../components/CoverLoader/CoverLoader.js';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation.js';
import { todayDate, dateFormat, achievementSort } from '../lib.js';
import { Achievements } from './achievements/Achievements.js';
import { AchievementEdit } from './achievements/AchievementEdit.js';
const defaultAuthors = [{
  id: 150337771,
  name: 'Матвей Правосудов',
  photo_100: 'https://sun9-39.userapi.com/impf/c639623/v639623662/4d9db/HVnCQZZ0dJQ.jpg?size=100x0&quality=88&crop=677,325,1354,1354&sign=fb6648ed604b90d8ddba864f45d0aae9&c_uniq_tag=Fbfu_i2o13FAWIkgTXQYCRYBazI8QsiYCbjqktcZpbk&ava=1'
}, {
  id: -197700721,
  name: 'Вездекод | Хакатон ВКонтакте',
  photo_100: 'https://sun9-76.userapi.com/impg/e05bG7K5clW9_qVhE4FQCeYOnTHFTopoNhVH8g/bNJz6lwiUKs.jpg?size=100x0&quality=88&crop=0,0,800,800&sign=691aa9921163e0f1329b4f30900fd5b0&c_uniq_tag=ZuLyWUaJuOdvX7yQMU6PxVu7M356mxmSNXjUNbbWsPI&ava=1'
}];
const defaultDonationRegular = {
  type: 'regular',
  title: '',
  image: '',
  need: 0,
  target: '',
  description: '',
  cashAccount: {
    name: 'Счёт VK Pay · 1234'
  },
  author: defaultAuthors[0],
  finish: undefined,
  achievements: []
};
const defaultDonationTarget = {
  type: 'target',
  title: '',
  image: '',
  need: 0,
  target: '',
  description: '',
  cashAccount: {
    name: 'Счёт VK Pay · 1234'
  },
  author: defaultAuthors[0],
  achievements: []
};
export class Creating extends React.Component {
  constructor(props) {
    super(props); // TODO: нужно подгрузить реального пользователя

    _defineProperty(this, "setDonation", donation => {
      const newDonation = Object.assign({}, this.state.donation, donation);
      this.setState({
        donation: newDonation
      });
    });

    _defineProperty(this, "choseDate", () => {
      this.setState({
        activeModal: null
      });
    });

    _defineProperty(this, "choseDonationEnd", when => {
      switch (when) {
        case 'date':
          this.setState({
            donationEnd: when
          });
          break;

        case 'amount':
          this.setState({
            donationEnd: when,
            date: undefined
          });
          break;
      }
    });

    _defineProperty(this, "isPanelFormValid", panel => {
      const {
        donation,
        date,
        donationEnd
      } = this.state;

      switch (panel) {
        case 'target':
          return [donation.image, donation.title, donation.need, donation.target, donation.description].every(e => e);

        case 'target2':
          if (donationEnd == 'date') {
            return Boolean(date);
          } else {
            return true;
          }

        case 'regular':
          return [donation.image, donation.title, donation.need, donation.target, donation.description].every(e => e);

        default:
          return true;
      }
    });

    _defineProperty(this, "getModalDefault", () => {
      const {
        date
      } = this.state;

      if (date) {
        return date;
      } else {
        const currDate = new Date();
        return {
          day: currDate.getDate(),
          month: currDate.getMonth() + 1,
          year: currDate.getFullYear()
        };
      }
    });

    this.state = {
      activeModal: null,
      groups: [],
      donationEnd: 'date',
      donation: props.donation || defaultDonationRegular,
      highlightErrors: false,
      achievementEditIndex: 0
    };
    this.create = this.create.bind(this);
    this.choseAuthor = this.choseAuthor.bind(this);
    this.choseDate = this.choseDate.bind(this);
    this.choseDonationEnd = this.choseDonationEnd.bind(this);
  }

  componentDidMount() {
    const {
      vkAPI
    } = this.props;
    console.log(vkAPI);
    vkAPI.getAccessToken(7595761, 'groups').then(v => {
      vkAPI.callAPIMethod('groups.get', {
        filter: 'editor',
        extended: 1,
        v: '5.122',
        access_token: v.accessToken
      }).then(e => {
        this.setState({
          groups: e.items
        });
      }).catch(e => console.error(e));
    }).catch(e => console.error(e));
  }

  choseAuthor(user) {
    this.setDonation({
      author: user
    });
    this.props.goBack();
  }

  get authors() {
    if (!this.props.userInfo) {
      return defaultAuthors;
    }

    return [this.props.userInfo, ...this.state.groups];
  }

  create(type) {
    switch (type) {
      case 'target':
        const dt = { ...defaultDonationTarget
        };

        if (this.props.userInfo) {
          dt.author = this.props.userInfo;
        }

        this.setState({
          donation: dt
        });
        this.props.setPanel('target');
        break;

      case 'regular':
        const dr = { ...defaultDonationRegular
        };

        if (this.props.userInfo) {
          dr.author = this.props.userInfo;
        }

        this.setState({
          donation: dr
        });
        this.props.setPanel('regular');
        break;
    }
  }

  render() {
    const {
      id,
      activePanel,
      setPanel,
      setView,
      goBack,
      finishText,
      updateDonation
    } = this.props;
    const {
      activeModal,
      date,
      donationEnd,
      donation,
      highlightErrors,
      achievementEdit,
      achievementEditIndex
    } = this.state;
    const modal = /*#__PURE__*/React.createElement(ModalRoot, {
      activeModal: activeModal
    }, /*#__PURE__*/React.createElement(ModalCard, {
      id: "date",
      onClose: () => {
        this.setState({
          date: this.getModalDefault()
        });
        this.choseDate();
      },
      header: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",
      actions: [{
        title: 'Выбрать',
        mode: 'primary',
        action: () => {
          this.setState(prevState => {
            if (!prevState.date) {
              return { ...prevState,
                date: this.getModalDefault()
              };
            } else {
              return prevState;
            }
          });
          this.choseDate();
        }
      }]
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(DatePicker, {
      top: "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",
      defaultValue: this.getModalDefault(),
      min: todayDate(),
      max: {
        day: 1,
        month: 1,
        year: 2037
      },
      dayPlaceholder: "\u0414\u0435\u043D\u044C",
      monthPlaceholder: "\u041C\u0435\u0441\u044F\u0446",
      yearPlaceholder: "\u0413\u043E\u0434",
      popupDirection: "top",
      onDateChange: date => {
        // set date only if all parts of date are set
        if (date.month !== 0 && date.day !== 0 && date.year !== 0) {
          this.setState({
            date
          });
        }

        console.log(date);
      }
    }))));
    return /*#__PURE__*/React.createElement(View, {
      id: id,
      activePanel: activePanel,
      modal: modal
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0422\u0438\u043F \u0441\u0431\u043E\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Banner, {
      before: /*#__PURE__*/React.createElement(Icon28TargetOutline, {
        fill: "var(--accent)"
      }),
      header: "\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u0441\u0431\u043E\u0440",
      subheader: "\u041A\u043E\u0433\u0434\u0430 \u0435\u0441\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u0430\u044F \u0446\u0435\u043B\u044C",
      asideMode: "expand",
      onClick: () => this.create('target'),
      style: {
        marginTop: 8,
        marginBottom: 4
      }
    }), /*#__PURE__*/React.createElement(Banner, {
      before: /*#__PURE__*/React.createElement(Icon28CalendarOutline, {
        fill: "var(--accent)"
      }),
      header: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0441\u0431\u043E\u0440",
      subheader: "\u0415\u0441\u043B\u0438 \u043F\u043E\u043C\u043E\u0449\u044C \u043D\u0443\u0436\u043D\u0430 \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E",
      asideMode: "expand",
      onClick: () => this.create('regular'),
      style: {
        marginTop: 8,
        marginBottom: 4
      }
    }))), /*#__PURE__*/React.createElement(Panel, {
      id: "target"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false,
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => {
          goBack();
        }
      })
    }, "\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u0441\u0431\u043E\u0440"), /*#__PURE__*/React.createElement(Div, {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(CoverLoader, {
      error: highlightErrors && !donation.image,
      errorText: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043E\u0431\u043B\u043E\u0436\u043A\u0443",
      title: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443",
      before: /*#__PURE__*/React.createElement(Icon28PictureOutline, null),
      image: donation.image,
      onLoadImage: image => this.setDonation({
        image: image
      }),
      onDismiss: () => this.setDonation({
        image: ''
      })
    })), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(Input, {
      top: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      bottom: highlightErrors && !donation.title ? 'Пожалуйста, введите название сбора' : '',
      status: highlightErrors && !donation.title ? 'error' : 'default',
      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      value: donation.title,
      onChange: e => this.setDonation({
        title: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      pattern: "[0-9]*",
      inputMode: "numeric",
      top: "\u0421\u0443\u043C\u043C\u0430, \u20BD",
      bottom: highlightErrors && !donation.need ? 'Пожалуйста, введите сумму\n(должна быть больше нуля)' : '',
      status: highlightErrors && !donation.need ? 'error' : 'default',
      placeholder: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C?",
      value: donation.need || '',
      onChange: e => {
        const donationNeed = parseFloat(e.target.value); // prevent passing NaN or negative numbers as donation.need value

        if (!isNaN(donationNeed) && donationNeed >= 0) {
          this.setDonation({
            need: donationNeed
          });
        } else {
          this.setDonation({
            need: 0
          });
        }
      }
    }), /*#__PURE__*/React.createElement(Input, {
      top: "\u0426\u0435\u043B\u044C",
      bottom: highlightErrors && !donation.target ? 'Пожалуйста, введите цель' : '',
      status: highlightErrors && !donation.target ? 'error' : 'default',
      placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430",
      value: donation.target,
      onChange: e => this.setDonation({
        target: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Textarea, {
      top: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
      bottom: highlightErrors && !donation.description ? 'Пожалуйста, введите описание' : '',
      status: highlightErrors && !donation.description ? 'error' : 'default',
      placeholder: "\u041D\u0430 \u0447\u0442\u043E \u043F\u043E\u0439\u0434\u0443\u0442 \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442?",
      value: donation.description,
      onChange: e => this.setDonation({
        description: e.target.value
      })
    }), /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u041A\u0443\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438",
      placeholder: "\u0421\u0447\u0451\u0442",
      onClick: () => setPanel('vkpay')
    }, donation.cashAccount.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      stretched: true,
      size: "l",
      onClick: () => {
        const isValid = this.isPanelFormValid('target');

        if (isValid) {
          setPanel('target2');
        } else {
          this.setState({
            highlightErrors: true
          });
        }
      },
      onBlur: () => this.setState({
        highlightErrors: false
      })
    }, "\u0414\u0430\u043B\u0435\u0435")))), /*#__PURE__*/React.createElement(Panel, {
      id: "target2"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E"), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u0410\u0432\u0442\u043E\u0440",
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043E\u0440\u0430",
      onClick: () => setPanel('author')
    }, donation.author.name), /*#__PURE__*/React.createElement(FormLayoutGroup, {
      top: "\u0421\u0431\u043E\u0440 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044F"
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "type",
      value: "amount",
      checked: donationEnd === 'amount',
      onChange: e => e.target.value === 'amount' && this.choseDonationEnd('amount')
    }, "\u041A\u043E\u0433\u0434\u0430 \u0441\u043E\u0431\u0435\u0440\u0435\u043C \u0441\u0443\u043C\u043C\u0443"), /*#__PURE__*/React.createElement(Radio, {
      style: {
        marginTop: 0
      },
      name: "type",
      value: "date",
      checked: donationEnd === 'date',
      onChange: e => e.target.value === 'date' && this.choseDonationEnd('date')
    }, "\u0412 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u0443\u044E \u0434\u0430\u0442\u0443")), donationEnd === 'date' && /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
      bottom: highlightErrors && !date ? 'Пожалуйста, выберите дату' : '',
      status: highlightErrors && !date ? 'error' : 'default',
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",
      onClick: () => this.setState({
        activeModal: 'date'
      })
    }, date && dateFormat(date))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, {
      style: donationEnd == 'date' && !this.isPanelFormValid('target2') ? {
        opacity: 0.5,
        pointerEvents: 'none'
      } : {}
    }, /*#__PURE__*/React.createElement(Button, {
      stretched: true,
      size: "l",
      onClick: () => {
        const isValid = this.isPanelFormValid('target2');

        if (isValid) {
          setPanel('achievements');
        } else {
          this.setState({
            highlightErrors: true
          });
        }
      },
      onBlur: () => this.setState({
        highlightErrors: false
      })
    }, "\u0414\u0430\u043B\u0435\u0435")))), /*#__PURE__*/React.createElement(Panel, {
      id: "regular"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false,
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => {
          goBack();
        }
      })
    }, "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0441\u0431\u043E\u0440"), /*#__PURE__*/React.createElement(Div, {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(CoverLoader, {
      error: highlightErrors && !donation.image,
      errorText: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043E\u0431\u043B\u043E\u0436\u043A\u0443",
      title: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443",
      before: /*#__PURE__*/React.createElement(Icon28PictureOutline, null),
      image: donation.image,
      onLoadImage: image => this.setDonation({
        image: image
      }),
      onDismiss: () => this.setDonation({
        image: ''
      })
    })), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(Input, {
      top: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      bottom: highlightErrors && !donation.title ? 'Пожалуйста, введите название сбора' : '',
      status: highlightErrors && !donation.title ? 'error' : 'default',
      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      value: donation.title,
      onChange: e => this.setDonation({
        title: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      top: "\u0421\u0443\u043C\u043C\u0430 \u0432 \u043C\u0435\u0441\u044F\u0446, \u20BD",
      bottom: highlightErrors && !donation.need ? 'Пожалуйста, введите сумму\n(должна быть больше нуля)' : '',
      status: highlightErrors && !donation.need ? 'error' : 'default',
      pattern: "[0-9]*",
      inputMode: "numeric",
      placeholder: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0443\u0436\u043D\u043E \u0432 \u043C\u0435\u0441\u044F\u0446?",
      value: donation.need || '',
      onChange: e => {
        const donationNeed = parseFloat(e.target.value); // prevent passing NaN or negative numbers as donation.need value

        if (!isNaN(donationNeed) && donationNeed >= 0) {
          this.setDonation({
            need: donationNeed
          });
        } else {
          this.setDonation({
            need: 0
          });
        }
      }
    }), /*#__PURE__*/React.createElement(Input, {
      top: "\u0426\u0435\u043B\u044C",
      bottom: highlightErrors && !donation.target ? 'Пожалуйста, введите цель сбора' : '',
      status: highlightErrors && !donation.target ? 'error' : 'default',
      placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u0440\u0438\u044E\u0442\u0430",
      value: donation.target,
      onChange: e => this.setDonation({
        target: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Textarea, {
      top: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
      bottom: highlightErrors && !donation.description ? 'Пожалуйста, введите описание сбора' : '',
      status: highlightErrors && !donation.description ? 'error' : 'default',
      placeholder: "\u041D\u0430 \u0447\u0442\u043E \u043F\u043E\u0439\u0434\u0443\u0442 \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442?",
      value: donation.description,
      onChange: e => this.setDonation({
        description: e.target.value
      })
    }), /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u041A\u0443\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438",
      placeholder: "\u0421\u0447\u0451\u0442",
      onClick: () => setPanel('vkpay')
    }, donation.cashAccount.name), /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u0410\u0432\u0442\u043E\u0440",
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043E\u0440\u0430",
      onClick: () => setPanel('author')
    }, donation.author.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      stretched: true,
      size: "l",
      onClick: () => {
        const isValid = this.isPanelFormValid('regular');

        if (isValid) {
          setPanel('achievements');
        } else {
          this.setState({
            highlightErrors: true
          });
        }
      },
      onBlur: () => this.setState({
        highlightErrors: false
      })
    }, "\u0414\u0430\u043B\u0435\u0435")))), /*#__PURE__*/React.createElement(Panel, {
      id: "author"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0410\u0432\u0442\u043E\u0440"), /*#__PURE__*/React.createElement(List, null, this.authors.map(user => /*#__PURE__*/React.createElement(SimpleCell, {
      before: /*#__PURE__*/React.createElement(Avatar, {
        size: 40,
        src: user.photo_100
      }),
      after: donation.author.id === user.id ? /*#__PURE__*/React.createElement(Icon24Done, null) : null,
      key: user.id,
      onClick: () => this.choseAuthor(user)
    }, user.name)))), /*#__PURE__*/React.createElement(Panel, {
      id: "vkpay"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: true
    }, "VK Pay"), /*#__PURE__*/React.createElement(Placeholder, {
      action: /*#__PURE__*/React.createElement(Button, {
        size: "l",
        stretched: true,
        onClick: () => goBack()
      }, "\u041D\u0430\u0437\u0430\u0434"),
      stretched: true
    }, "\u0417\u0430\u0433\u043B\u0443\u0448\u043A\u0430.", /*#__PURE__*/React.createElement("br", null), "\u041A\u0430\u043A \u0438 \u043F\u0440\u043E\u0441\u0438\u043B\u0438.")), /*#__PURE__*/React.createElement(Panel, {
      id: "posting"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, donation.author.name), /*#__PURE__*/React.createElement(SnippetDonation, {
      title: donation.title,
      description: `${donation.author.name}· Закончится через 5 дней`,
      progress: "\u041F\u043E\u043C\u043E\u0433\u0438 \u043F\u0435\u0440\u0432\u044B\u043C",
      value: 0,
      action: /*#__PURE__*/React.createElement(Button, {
        mode: "outline",
        disabled: true
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
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      size: "l",
      stretched: true,
      onClick: () => updateDonation(donation)
    }, finishText || 'Опубликовать')))), /*#__PURE__*/React.createElement(Panel, {
      id: "achievements"
    }, /*#__PURE__*/React.createElement(Achievements, {
      setPanel: setPanel,
      goBack: goBack,
      achievements: donation.achievements,
      choseNew: () => setPanel('achievement-new'),
      choseEdit: item => {
        this.setState({
          achievementEditIndex: item,
          achievementEdit: donation.achievements[item]
        });
        setPanel('achievement-edit');
      },
      remove: item => {
        const newAchievements = [...donation.achievements];
        newAchievements.splice(item, 1);
        this.setDonation({
          achievements: newAchievements
        });
      }
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "achievement-new"
    }, /*#__PURE__*/React.createElement(AchievementEdit, {
      setPanel: setPanel,
      goBack: goBack,
      update: a => {
        const newAchievements = [...donation.achievements, a];
        newAchievements.sort(achievementSort);
        this.setDonation({
          achievements: newAchievements
        });
        goBack();
      }
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "achievement-edit"
    }, /*#__PURE__*/React.createElement(AchievementEdit, {
      setPanel: setPanel,
      goBack: goBack,
      achievement: achievementEdit,
      update: a => {
        const newAchievements = [...donation.achievements];
        newAchievements[achievementEditIndex] = a;
        newAchievements.sort(achievementSort);
        this.setDonation({
          achievements: newAchievements
        });
        goBack();
      }
    })));
  }

}