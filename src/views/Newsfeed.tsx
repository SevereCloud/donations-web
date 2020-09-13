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

interface NewsfeedState {}

export interface NewsfeedProps {
  id: string;
  setView: (view: string, name?: string) => void;
  goBack: () => void;

  donation?: Donation;
}

export class Newsfeed extends React.Component<NewsfeedProps, NewsfeedState> {
  constructor(props: NewsfeedProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    const { id, setView, goBack, donation } = this.props;
    const {} = this.state;
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
              progress={`Собрано ${moneyFormat(8750)} ₽ из ${moneyFormat(
                donation.need,
              )} ₽`}
              value={(8750 * 100) / donation.need}
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
