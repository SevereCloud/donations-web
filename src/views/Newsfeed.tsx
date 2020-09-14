import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Button,
  PanelHeaderBack,
} from '@vkontakte/vkui';
import type { Donation } from '../types';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation';
import { moneyFormat } from '../lib';
import Post from '../components/Post/Post';
import CardDivider from '../components/CardDivider/CardDivider';

interface NewsfeedState {
  donationNeedProgress: number;
  animationInterval: NodeJS.Timeout | null;
}

export interface NewsfeedProps {
  id: string;
  setView: (view: string, name?: string) => void;
  goBack: () => void;

  postText: string;
  donation?: Donation;
}

export class Newsfeed extends React.Component<NewsfeedProps, NewsfeedState> {
  constructor(props: NewsfeedProps) {
    super(props);

    this.state = {
      donationNeedProgress: 0,
      animationInterval: null,
    };
  }

  componentDidMount() {
    const { donation } = this.props;
    const donationNeed = donation?.need || 0;
    const progressWeight = donationNeed >= 100 ? 0.02 : 0.04;
    const animationInterval = setInterval(() => {
      this.setState((prevState: NewsfeedState) => {
        const newDonationNeedProgress = Math.floor(
          prevState.donationNeedProgress + donationNeed * progressWeight,
        );
        return {
          donationNeedProgress:
            newDonationNeedProgress > donationNeed
              ? donationNeed
              : newDonationNeedProgress,
        };
      });
    }, 150);
    this.setAnimationInterval(animationInterval);
  }

  componentDidUpdate() {
    const { donation } = this.props;
    const donationNeed = donation?.need || 0;
    const { donationNeedProgress, animationInterval } = this.state;
    if (donationNeedProgress >= donationNeed && animationInterval) {
      clearInterval(animationInterval);
    }
  }

  setAnimationInterval = (interval: NodeJS.Timeout) =>
    this.setState({
      animationInterval: interval,
    });

  render(): JSX.Element {
    const { id, setView, goBack, donation, postText } = this.props;
    const { donationNeedProgress } = this.state;
    return (
      <View id={id} activePanel="main">
        <Panel id="main" style={{ overflow: 'hidden' }}>
          <PanelHeader
            separator={false}
            left={<PanelHeaderBack onClick={() => goBack()} />}
          >
            Новости
          </PanelHeader>
          <Post
            author={{ id: 100, name: 'ВКонтакте', photo_100: '' }}
            date="час назад"
            likes={65}
            comments={65}
            reposts={4}
            views="7,2К"
            style={{ marginTop: -100 }}
          >
            <div
              style={{
                height: 80,
                width: '100%',
                backgroundColor: 'var(--placeholder_icon_background)',
              }}
            />
          </Post>
          <CardDivider />
          {donation && (
            <Post
              author={donation.author}
              date="час назад"
              likes={65}
              comments={65}
              reposts={4}
              views="7,2К"
            >
              {postText}
              <SnippetDonation
                title={donation.title}
                description={`${donation.author.name}· Закончится через 5 дней`}
                progress={`Собрано ${moneyFormat(
                  donationNeedProgress,
                )} ₽ из ${moneyFormat(donation.need)} ₽`}
                value={(donationNeedProgress * 100) / donation.need}
                action={
                  <Button mode="outline" onClick={() => setView('viewing')}>
                    Помочь
                  </Button>
                }
                background={
                  <div
                    style={{
                      backgroundImage: `url(${donation.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100%',
                      height: 140,
                    }}
                  />
                }
              />
            </Post>
          )}
          <CardDivider />
          <Post
            author={{ id: 100, name: 'ВКонтакте', photo_100: '' }}
            date="час назад"
            likes={65}
            comments={65}
            reposts={4}
            views="7,2К"
          >
            <div
              style={{
                height: 500,
                width: '100%',
                backgroundColor: 'var(--placeholder_icon_background)',
              }}
            />
          </Post>
        </Panel>
      </View>
    );
  }
}
