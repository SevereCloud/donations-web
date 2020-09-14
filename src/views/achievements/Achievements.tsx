import React from 'react';
import {
  PanelHeader,
  Div,
  PanelHeaderBack,
  CellButton,
  Placeholder,
  Button,
  FixedLayout,
  SimpleCell,
  Avatar,
  Cell,
} from '@vkontakte/vkui';
import type { Achievement } from '../../types';
import { achievementDescription } from '../../lib';

export interface AchievementsProps {
  setPanel: (name: string) => void;
  goBack: () => void;

  achievements: Achievement[];
  choseEdit: (item: number) => void;
  remove: (item: number) => void;
  choseNew: () => void;
}

interface AchievementsState {
  removable: boolean;
}

export class Achievements extends React.Component<
  AchievementsProps,
  AchievementsState
> {
  constructor(props: AchievementsProps) {
    super(props);

    this.state = {
      removable: false,
    };
  }

  render(): JSX.Element {
    const {
      setPanel,
      goBack,
      achievements,
      choseNew,
      choseEdit,
      remove,
    } = this.props;
    const { removable } = this.state;
    return (
      <>
        <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
          Награды
        </PanelHeader>
        {(achievements.length && (
          <>
            {achievements.map((achievement, index) => (
              <Cell
                before={<Avatar mode="image" src={achievement.image} />}
                description={achievementDescription(achievement)}
                key={index}
                removable={removable}
                onClick={() => choseEdit(index)}
                onRemove={() => remove(index)}
              >
                {achievement.name}
              </Cell>
            ))}
            {!removable && (
              <>
                <CellButton
                  onClick={() => this.setState({ removable: true })}
                  mode="danger"
                >
                  Удалить награду
                </CellButton>
                <CellButton onClick={choseNew}>Добавить награду</CellButton>
              </>
            )}
          </>
        )) || (
          <Placeholder
            action={
              <Button size="m" onClick={choseNew}>
                Добавить награду
              </Button>
            }
            stretched
          >
            У Вас пока нет наград.
          </Placeholder>
        )}

        <div style={{ height: 68 }} />
        <FixedLayout filled vertical="bottom">
          <Div>
            {(removable && achievements.length && (
              <Button
                size="l"
                stretched
                onClick={() => this.setState({ removable: false })}
              >
                Готово
              </Button>
            )) || (
              <Button size="l" stretched onClick={() => setPanel('posting')}>
                Создать сбор
              </Button>
            )}
          </Div>
        </FixedLayout>
      </>
    );
  }
}
