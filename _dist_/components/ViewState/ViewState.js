import React, { useState, useEffect } from '../../../web_modules/react.js';
import { Separator, Text, Div, Header, Group, CardGrid, Card } from '../../../web_modules/@vkontakte/vkui.js';
import { moneyFormat } from '../../lib.js';
export const StateProgress = ({
  label,
  donationProgress,
  donationNeed
}) => {
  donationProgress = donationProgress || 0;
  const progress = Math.floor(donationProgress * 100 / donationNeed);

  const formattedNumber = num => `${moneyFormat(num)} ₽`;

  return /*#__PURE__*/React.createElement(Div, null, progress < 100 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "progress-label"
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "regular"
  }, label), progress > 70 && /*#__PURE__*/React.createElement(Text, {
    weight: "semibold",
    className: "progress-inner-text"
  }, formattedNumber(donationNeed))), /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar",
    style: {
      width: `${progress}%`
    }
  }, progress > 30 && /*#__PURE__*/React.createElement(Text, {
    weight: "semibold",
    className: "bar-inner-text"
  }, formattedNumber(donationProgress))), /*#__PURE__*/React.createElement("div", {
    className: "progress-inner-text-container"
  }, progress <= 30 && /*#__PURE__*/React.createElement(Text, {
    weight: "semibold",
    className: "progress-inner-text-bar"
  }, formattedNumber(donationProgress))), /*#__PURE__*/React.createElement("div", {
    className: "progress-inner-text-container"
  }, progress <= 70 && /*#__PURE__*/React.createElement(Text, {
    weight: "semibold",
    className: "progress-inner-text"
  }, formattedNumber(donationNeed))))), progress >= 100 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "progress-label"
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "regular"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar-finish",
    style: {
      width: `${progress}%`
    }
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "semibold",
    className: "bar-inner-text"
  }, formattedNumber(donationProgress) + ' собраны!')))));
};
export const StateProgressWithAnimation = ({
  label,
  donationNeed
}) => {
  const [donationProgress, setDonationProgress] = useState(donationNeed);
  useEffect(() => {
    if (donationProgress < donationNeed) {
      setTimeout(() => setDonationProgress(prevProgress => prevProgress + donationNeed * 0.0025), 70);
    } else {
      setDonationProgress(0);
    }
  });
  return /*#__PURE__*/React.createElement(StateProgress, {
    label: label,
    donationNeed: donationNeed,
    donationProgress: donationProgress
  });
};

const ViewState = () => {
  const donationNeed = 10000;
  const [donationProgress, setDonationProgress] = useState(3000);
  useEffect(() => {
    if (donationProgress < donationNeed) {
      setTimeout(() => setDonationProgress(prevProgress => prevProgress + donationNeed * 0.01), 600);
    } else {
      setDonationProgress(0);
    }
  });
  return /*#__PURE__*/React.createElement(Group, {
    separator: "hide",
    header: /*#__PURE__*/React.createElement(Header, {
      mode: "secondary"
    }, "states")
  }, /*#__PURE__*/React.createElement(CardGrid, null, /*#__PURE__*/React.createElement(Card, {
    size: "l",
    mode: "shadow"
  }, /*#__PURE__*/React.createElement(StateProgress, {
    label: "\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043E 10 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    donationNeed: 10000,
    donationProgress: 5800
  }), /*#__PURE__*/React.createElement(Separator, {
    style: {
      margin: '2px 0 2px 0'
    }
  }), /*#__PURE__*/React.createElement(StateProgress, {
    label: "\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043E 10 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    donationNeed: 10000,
    donationProgress: 1300
  }), /*#__PURE__*/React.createElement(Separator, {
    style: {
      margin: '2px 0 2px 0'
    }
  }), /*#__PURE__*/React.createElement(StateProgress, {
    label: "\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043E 10 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    donationNeed: donationNeed,
    donationProgress: donationProgress
  }), /*#__PURE__*/React.createElement(Separator, {
    style: {
      margin: '2px 0 2px 0'
    }
  }), /*#__PURE__*/React.createElement(StateProgress, {
    label: "\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043E 10 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    donationNeed: 10000,
    donationProgress: 10000
  }), /*#__PURE__*/React.createElement(Separator, {
    style: {
      margin: '2px 0 2px 0'
    }
  }), /*#__PURE__*/React.createElement(StateProgress, {
    label: "\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043E 10 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    donationNeed: 10000,
    donationProgress: 9000
  }))));
};

export default ViewState;