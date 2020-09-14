import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Title,
  Separator,
  Text,
  Div,
} from '@vkontakte/vkui';
import type { Donation } from '../types';
import ViewState, { StateProgressWithAnimation } from '../components/ViewState/ViewState';

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
    const { } = this.state;
    return (
      <View id={id} activePanel="main">
        <Panel id="main">
          <PanelHeader separator={false}></PanelHeader>
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
                <Text weight="medium" style={{ opacity: 0.67 }}>Автор {donation.author.name}</Text>
                <Text weight="regular" style={{ opacity: 0.33 }}>Сбор закончится через TODO: дней</Text>
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
              <div>TODO: лайки комменты и тд</div>
              <Separator />
              <ViewState />
            </>
          )}
        </Panel>
      </View>
    );
  }
}
