import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Title,
  Separator,
  Text,
  Div,
  FixedLayout,
  Button,
} from '@vkontakte/vkui';
import type { Donation } from '../types';
import ViewState, {
  StateProgressWithAnimation,
} from '../components/ViewState/ViewState';
import PostBar from '../components/PostBar/PostBar';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation';
import { moneyFormat } from '../lib';

export interface ViewingProps {
  id: string;
  goBack: () => void;

  donation?: Donation;
}

export class Viewing extends React.Component<ViewingProps> {
  constructor(props: ViewingProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    const { id, donation } = this.props;
    const {} = this.state;
    return (
      <View id={id} activePanel="main">
        <Panel id="main">
          <div
            style={{
              backgroundImage: `url(${donation?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: 140,
            }}
          />
          {donation && (
            <>
              <Div>
                <Title level="1" weight="bold">
                  {donation.title}
                </Title>
                <Text weight="medium" style={{ opacity: 0.67 }}>
                  Автор {donation.author.name}
                </Text>
                <Text weight="regular" style={{ opacity: 0.33 }}>
                  Сбор закончится через 5 дней
                </Text>
              </Div>
              <Separator />
              <StateProgressWithAnimation
                label="Нужно собрать до 20 сентября"
                donationNeed={10000}
              />
              <Separator />
              <Div>
                <Text weight="regular">{donation.description}</Text>
              </Div>
              <Separator />
              <PostBar likes={65} comments={65} reposts={4} views="7,2К" />
              <Separator wide />
              <FixedLayout filled vertical="bottom">
                <SnippetDonation
                  className="SnippetBar"
                  title={donation.title}
                  description={`${donation.author.name}· Закончится через 5 дней`}
                  progress={`Собрано ${moneyFormat(8750)} ₽ из ${moneyFormat(
                    donation.need,
                  )} ₽`}
                  value={40}
                  action={
                    <Button
                      mode="primary"
                      style={{ backgroundColor: '#4bb34b' }}
                    >
                      Помочь
                    </Button>
                  }
                />
              </FixedLayout>
              <ViewState />
            </>
          )}
        </Panel>
      </View>
    );
  }
}
