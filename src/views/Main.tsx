import React from 'react';
import { View, Panel, PanelHeader, Placeholder, Button } from '@vkontakte/vkui';

export interface MainProps {
  id: string;
  activePanel: string;
  setView: (view: string, name?: string) => void;
  // setPanel: (name: string) => void;
  // goBack: () => void;
}

export class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    const { id, activePanel, setView } = this.props;
    const {} = this.state;
    return (
      <View id={id} activePanel={activePanel}>
        <Panel id="main">
          <PanelHeader separator>Пожертвования</PanelHeader>
          {/* TODO: список сборов */}
          <Placeholder
            action={
              <Button size="l" onClick={() => setView('creating')}>
                Создать сбор
              </Button>
            }
            stretched
          >
            У Вас пока нет сборов.
            <br />
            Начните доброе дело.
          </Placeholder>
        </Panel>
      </View>
    );
  }
}
