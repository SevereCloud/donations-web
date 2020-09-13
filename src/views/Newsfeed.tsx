import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Button,
  PanelHeaderBack,
  Div,
} from '@vkontakte/vkui';
import type { Donation } from '../types';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation';
import { moneyFormat } from '../lib';

interface NewsfeedState {
  donationNeedProgress: number;
  animationInterval: NodeJS.Timeout | null;
}

export interface NewsfeedProps {
  id: string;
  setView: (view: string, name?: string) => void;
  goBack: () => void;

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
    const animationInterval = setInterval(
      () => {
        this.setState(
          (prevState: NewsfeedState) => ({
            donationNeedProgress: Math.floor(
              prevState.donationNeedProgress + donationNeed * progressWeight
            )
          })
        )
      },
      150
    )
    this.setAnimationInterval(animationInterval)
  }

  componentDidUpdate() {
    const { donation } = this.props;
    const donationNeed = donation?.need || 0;
    const {
      donationNeedProgress,
      animationInterval,
    } = this.state;
    if (donationNeedProgress >= donationNeed && animationInterval) {
      clearInterval(animationInterval);
    }
  }

  setAnimationInterval = (interval: NodeJS.Timeout) => this.setState({
    animationInterval: interval,
  });

  render(): JSX.Element {
    const { id, setView, goBack, donation } = this.props;
    const { donationNeedProgress } = this.state;
    return (
      <View id={id} activePanel="main">
        <Panel id="main">
          <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
            {donation?.author.name}
          </PanelHeader>
          {donation && (
            <SnippetDonation
              title={donation.title}
              description={`${donation.author.name}· Закончится через 5 дней`}
              progress={`Собрано ${moneyFormat(donationNeedProgress)} ₽ из ${moneyFormat(
                donation.need,
              )} ₽`}
              value={(donationNeedProgress * 100) / donation.need}
              action={<Button mode="outline" onClick={() => setView('viewing')}>Помочь</Button>}
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
          )}
        </Panel>
      </View>
    );
  }
}
