import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Title,
  Separator,
  Text,
  Div,
  PanelHeaderBack,
  CellButton,
  Placeholder,
  Button,
  FixedLayout,
  Input,
  Select,
  PanelHeaderClose,
  PanelHeaderSubmit,
  FormLayout,
} from '@vkontakte/vkui';
import type { Achievement } from '../../types';
import CoverLoader from '../../components/CoverLoader/CoverLoader';
import { Icon28PictureOutline } from '@vkontakte/icons';

export interface AchievementEditProps {
  setPanel: (name: string) => void;
  goBack: () => void;

  achievement?: Achievement;
  update: (a: Achievement) => void;
}

export interface AchievementEditState {
  achievement: Achievement;
}

const defaultAchievement: Achievement = {
  name: '',
  image: '',
  type: 'repost',
};

export class AchievementEdit extends React.Component<
  AchievementEditProps,
  AchievementEditState
> {
  constructor(props: AchievementEditProps) {
    super(props);

    this.state = {
      achievement: props.achievement || defaultAchievement,
    };
  }

  setAchievement = (achievement: Partial<Achievement>): void => {
    const newAchievement = Object.assign(
      {},
      this.state.achievement,
      achievement,
    );
    this.setState({ achievement: newAchievement });
  };

  render(): JSX.Element {
    const { update, goBack } = this.props;
    const { achievement } = this.state;
    return (
      <>
        <PanelHeader
          left={
            <PanelHeaderClose onClick={() => goBack()}>Отмена</PanelHeaderClose>
          }
          // right={
          //   <PanelHeaderSubmit onClick={() => update(achievement)}>
          //     Готово
          //   </PanelHeaderSubmit>
          // }
        >
          Награда
        </PanelHeader>
        <Div style={{ paddingTop: 4 }}>
          <CoverLoader
            title="Загрузить изображение"
            before={<Icon28PictureOutline />}
            image={achievement.image}
            width={140}
            onLoadImage={(image: string) =>
              this.setAchievement({ image: image })
            }
            onDismiss={() => this.setAchievement({ image: '' })}
          />
        </Div>
        <FormLayout>
          <Input
            top="Название награды"
            placeholder="Название награды"
            value={achievement.name}
            onChange={(e) => this.setAchievement({ name: e.target.value })}
          />
          <Select
            top="Тип награды"
            placeholder="Выберите тип награды"
            value={achievement.type}
            onChange={(e) =>
              this.setAchievement({ type: e.value as Achievement['type'] })
            }
          >
            <option value="repost">За репост</option>
            <option value="amount">За поддержку</option>
          </Select>
          {achievement.type === 'amount' && (
            <Input
              top="Минимальная сумма, ₽"
              type="number"
              pattern="[0-9]*"
              placeholder="Награда за поддержку"
              value={achievement.min || undefined}
              onChange={(e) =>
                this.setAchievement({ min: parseFloat(e.target.value) })
              }
            />
          )}
        </FormLayout>

        <div style={{ height: 68 }} />
        <FixedLayout filled vertical="bottom">
          <Div>
            <Button
              disabled={
                !(
                  achievement.image &&
                  achievement.type &&
                  achievement.name &&
                  (achievement.type === 'amount' ? achievement.min > 0 : true)
                )
              }
              size="l"
              stretched
              onClick={() => update(achievement)}
            >
              {this.props.achievement?'Сохранить награду':'Создать награду'}
            </Button>
          </Div>
        </FixedLayout>
      </>
    );
  }
}
