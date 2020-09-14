import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Placeholder,
  Button,
  PanelHeaderBack,
  Banner,
  Div,
  FormLayout,
  Input,
  Textarea,
  SelectMimicry,
  FormLayoutGroup,
  Radio,
  List,
  SimpleCell,
  Avatar,
  DatePicker,
  ModalRoot,
  ModalCard,
  FixedLayout,
} from '@vkontakte/vkui';
import type { Author, Donation, DateFormat } from '../types';
import {
  Icon28TargetOutline,
  Icon28CalendarOutline,
  Icon28PictureOutline,
  Icon24Done,
} from '@vkontakte/icons';
import CoverLoader from '../components/CoverLoader/CoverLoader';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation';
import { todayDate, dateFormat } from '../lib';

const defaultAuthors: Author[] = [
  {
    id: 150337771,
    name: 'Матвей Правосудов',
    photo_100:
      'https://sun9-39.userapi.com/impf/c639623/v639623662/4d9db/HVnCQZZ0dJQ.jpg?size=100x0&quality=88&crop=677,325,1354,1354&sign=fb6648ed604b90d8ddba864f45d0aae9&c_uniq_tag=Fbfu_i2o13FAWIkgTXQYCRYBazI8QsiYCbjqktcZpbk&ava=1',
  },
  {
    id: -197700721,
    name: 'Вездекод | Хакатон ВКонтакте',
    photo_100:
      'https://sun9-76.userapi.com/impg/e05bG7K5clW9_qVhE4FQCeYOnTHFTopoNhVH8g/bNJz6lwiUKs.jpg?size=100x0&quality=88&crop=0,0,800,800&sign=691aa9921163e0f1329b4f30900fd5b0&c_uniq_tag=ZuLyWUaJuOdvX7yQMU6PxVu7M356mxmSNXjUNbbWsPI&ava=1',
  },
];

const defaultDonationRegular: Donation = {
  type: 'regular',
  title: '',
  image: '',
  need: 0,
  target: '',
  description: '',
  cashAccount: { name: 'Счёт VK Pay · 1234' },
  author: defaultAuthors[0],
  finish: undefined,
};

const defaultDonationTarget: Donation = {
  type: 'target',
  title: '',
  image: '',
  need: 0,
  target: '',
  description: '',
  cashAccount: { name: 'Счёт VK Pay · 1234' },
  author: defaultAuthors[0],
};

type DonationEnd = 'date' | 'amount';

interface CreatingState {
  activeModal: string | null;

  date?: DateFormat;
  donationEnd: DonationEnd;

  donation: Donation;

  highlightErrors: boolean;
}

export interface CreatingProps {
  id: string;
  activePanel: string;
  setView: (view: string, name?: string) => void;
  setPanel: (name: string) => void;
  goBack: () => void;

  // Нужно чтобы реализовать редактирование
  donation?: Donation;
  finishText?: string;
  updateDonation: (donation: Donation) => void;
}

export class Creating extends React.Component<CreatingProps, CreatingState> {
  constructor(props: CreatingProps) {
    super(props);

    // TODO: нужно подгрузить реального пользователя
    this.state = {
      activeModal: null,

      donationEnd: 'date',

      donation: props.donation || defaultDonationRegular,

      highlightErrors: false,
    };

    this.create = this.create.bind(this);
    this.choseAuthor = this.choseAuthor.bind(this);
    this.choseDate = this.choseDate.bind(this);
    this.choseDonationEnd = this.choseDonationEnd.bind(this);
  }

  choseAuthor(user: Author): void {
    this.setDonation({ author: user });
    this.props.goBack();
  }

  get authors(): Author[] {
    // TODO: необходимо подгружать реальных
    return defaultAuthors;
  }

  create(type: Donation['type']) {
    switch (type) {
      case 'target':
        this.setState({ donation: defaultDonationTarget });
        this.props.setPanel('target');
        break;
      case 'regular':
        this.setState({ donation: defaultDonationRegular });
        this.props.setPanel('regular');
        break;
    }
  }

  setDonation = (donation: Partial<Donation>): void => {
    const newDonation = Object.assign({}, this.state.donation, donation);
    this.setState({ donation: newDonation });
  };

  choseDate = () => {
    this.setState({ activeModal: null });
  };

  choseDonationEnd = (when: DonationEnd) => {
    switch (when) {
      case 'date':
        this.setState({ donationEnd: when });
        break;
      case 'amount':
        this.setState({ donationEnd: when, date: undefined });
        break;
    }
  };

  isPanelFormValid = (panel: 'target' | 'target2' | 'regular'): boolean => {
    const { donation, date, donationEnd } = this.state;

    switch (panel) {
      case 'target':
        return [
          donation.image,
          donation.title,
          donation.need,
          donation.target,
          donation.description,
        ].every(e => e);
      case 'target2':
        if (donationEnd == 'date') {
          return Boolean(date);
        } else {
          return true;
        }
      case 'regular':
        return [
          donation.image,
          donation.title,
          donation.need,
          donation.target,
          donation.description,
        ].every(e => e);
      default:
        return true;
    }
  };

  render(): JSX.Element {
    const {
      id,
      activePanel,
      setPanel,
      goBack,
      finishText,
      updateDonation,
    } = this.props;
    const {
      activeModal,
      date,
      donationEnd,
      donation,
      highlightErrors,
    } = this.state;

    const modal = (
      <ModalRoot activeModal={activeModal}>
        <ModalCard
          id="date"
          onClose={() => {
            this.setState({ date: undefined });
            this.choseDate();
          }}
          header="Выберите дату"
          actions={[
            {
              title: 'Выбрать',
              mode: 'primary',
              action: () => {
                this.choseDate();
              },
            },
          ]}
        >
          <div style={{ marginTop: 12 }}>
            <DatePicker
              top="Дата окончания"
              placeholder="Выберите дату"
              min={todayDate()}
              max={{ day: 1, month: 1, year: 2037 }}
              dayPlaceholder="День"
              monthPlaceholder="Месяц"
              yearPlaceholder="Год"
              popupDirection="top"
              onDateChange={(date) => {
                // set date only if all parts of date are set
                if (date.month !== 0 && date.day !== 0 && date.year !== 0) {
                  this.setState({ date });
                }
              }}
            />
          </div>
        </ModalCard>
      </ModalRoot>
    );
    return (
      <View id={id} activePanel={activePanel} modal={modal}>
        <Panel id="main">
          <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
            Тип сбора
          </PanelHeader>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Banner
              before={<Icon28TargetOutline fill="var(--accent)" />}
              header="Целевой сбор"
              subheader="Когда есть определённая цель"
              asideMode="expand"
              onClick={() => this.create('target')}
              style={{ marginTop: 8, marginBottom: 4 }}
            />
            <Banner
              before={<Icon28CalendarOutline fill="var(--accent)" />}
              header="Регулярный сбор"
              subheader="Если помощь нужна ежемесячно"
              asideMode="expand"
              onClick={() => this.create('regular')}
              style={{ marginTop: 8, marginBottom: 4 }}
            />
          </div>
        </Panel>

        <Panel id="target">
          <PanelHeader
            separator={false}
            left={
              <PanelHeaderBack
                onClick={() => {
                  goBack();
                }}
              />
            }
          >
            Целевой сбор
          </PanelHeader>
          <Div style={{ paddingTop: 4 }}>
            <CoverLoader
              error={highlightErrors && !donation.image}
              errorText="Пожалуйста загрузите обложку"
              title="Загрузить обложку"
              before={<Icon28PictureOutline />}
              image={donation.image}
              onLoadImage={(image: string) =>
                this.setDonation({ image: image })
              }
              onDismiss={() => this.setDonation({ image: '' })}
            />
          </Div>
          <FormLayout>
            <Input
              top="Название сбора"
              bottom={
                highlightErrors && !donation.title
                  ? 'Пожалуйста введите название сбора'
                  : ''
              }
              status={
                highlightErrors && !donation.title
                  ? 'error'
                  : 'default'
              }
              placeholder="Название сбора"
              value={donation.title}
              onChange={(e) => this.setDonation({ title: e.target.value })}
            />
            <Input
              pattern="[0-9]*"
              top="Сумма, ₽"
              bottom={
                highlightErrors && !donation.need
                  ? 'Пожалуйста введите сумму\n(должна быть больше нуля)'
                  : ''
              }
              status={
                highlightErrors && !donation.need
                  ? 'error'
                  : 'default'
              }
              placeholder="Сколько нужно собрать?"
              value={donation.need || ''}
              onChange={
                (e) => {
                  const donationNeed = parseFloat(e.target.value);
                  // prevent passing NaN or negative numbers as donation.need value
                  if (!isNaN(donationNeed) && donationNeed >= 0) {
                    this.setDonation({ need: donationNeed });
                  } else {
                    this.setDonation({ need: 0 });
                  }
                }
              }
            />
            <Input
              top="Цель"
              bottom={
                highlightErrors && !donation.target
                  ? 'Пожалуйста введите цель'
                  : ''
              }
              status={
                highlightErrors && !donation.target
                  ? 'error'
                  : 'default'
              }
              placeholder="Например, лечение человека"
              value={donation.target}
              onChange={(e) => this.setDonation({ target: e.target.value })}
            />
            <Textarea
              top="Описание"
              bottom={
                highlightErrors && !donation.description
                  ? 'Пожалуйста введите описание'
                  : ''
              }
              status={
                highlightErrors && !donation.description
                  ? 'error'
                  : 'default'
              }
              placeholder="На что пойдут деньги и как они помогут?"
              value={donation.description}
              onChange={(e) =>
                this.setDonation({ description: e.target.value })
              }
            />
            <SelectMimicry
              top="Куда получать деньги"
              placeholder="Счёт"
              onClick={() => setPanel('vkpay')}
            >
              {donation.cashAccount.name}
            </SelectMimicry>
          </FormLayout>
          <div style={{ height: 68 }} />
          <FixedLayout filled vertical="bottom">
            <Div>
              <Button
                stretched
                size="l"
                onClick={() => {
                  const isValid = this.isPanelFormValid('target');
                  if (isValid) {
                    setPanel('target2');
                  } else {
                    this.setState({ highlightErrors: true });
                  }
                }}
                onBlur={() => this.setState({ highlightErrors: false })}
              >
                Далее
              </Button>
            </Div>
          </FixedLayout>
        </Panel>
        <Panel id="target2">
          <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
            Дополнительно
          </PanelHeader>
          <FormLayout>
            <SelectMimicry
              top="Автор"
              placeholder="Выберите автора"
              onClick={() => setPanel('author')}
            >
              {donation.author.name}
            </SelectMimicry>
            <FormLayoutGroup top="Сбор завершится">
              <Radio
                name="type"
                value="amount"
                checked={donationEnd === 'amount'}
                onChange={(e) =>
                  e.target.value === 'amount' && this.choseDonationEnd('amount')
                }
              >
                Когда соберем сумму
              </Radio>
              <Radio
                style={{ marginTop: 0 }}
                name="type"
                value="date"
                checked={donationEnd === 'date'}
                onChange={(e) =>
                  e.target.value === 'date' && this.choseDonationEnd('date')
                }
              >
                В определённую дату
              </Radio>
            </FormLayoutGroup>
            {donationEnd === 'date' && (
              <SelectMimicry
                top="Дата окончания"
                bottom={
                  highlightErrors && !date
                    ? 'Пожалуйста выберите дату'
                    : ''
                }
                status={
                  highlightErrors && !date
                    ? 'error'
                    : 'default'
                }
                placeholder="Выберите дату"
                onClick={() => this.setState({ activeModal: 'date' })}
              >
                {date && dateFormat(date)}
              </SelectMimicry>
            )}
          </FormLayout>
          <div style={{ height: 68 }} />
          <FixedLayout filled vertical="bottom">
            <Div
              style={
                donationEnd == 'date' && !this.isPanelFormValid('target2')
                  ? { opacity: 0.5, pointerEvents: 'none' }
                  : {}
              }
            >
              <Button
                stretched
                size="l"
                onClick={() => {
                  const isValid = this.isPanelFormValid('target2');
                  if (isValid) {
                    setPanel('posting');
                  } else {
                    this.setState({ highlightErrors: true });
                  }
                }}
                onBlur={() => this.setState({ highlightErrors: false })}
              >
                Создать сбор
              </Button>
            </Div>
          </FixedLayout>
        </Panel>
        <Panel id="regular">
          <PanelHeader
            separator={false}
            left={
              <PanelHeaderBack
                onClick={() => {
                  goBack();
                }}
              />
            }
          >
            Регулярный сбор
          </PanelHeader>
          <Div style={{ paddingTop: 4 }}>
            <CoverLoader
              error={highlightErrors && !donation.image}
              errorText="Пожалуйста загрузите обложку"
              title="Загрузить обложку"
              before={<Icon28PictureOutline />}
              image={donation.image}
              onLoadImage={(image: string) =>
                this.setDonation({ image: image })
              }
              onDismiss={() => this.setDonation({ image: '' })}
            />
          </Div>
          <FormLayout>
            <Input
              top="Название сбора"
              bottom={
                highlightErrors && !donation.title
                  ? 'Пожалуйста введите название сбора'
                  : ''
              }
              status={
                highlightErrors && !donation.title
                  ? 'error'
                  : 'default'
              }
              placeholder="Название сбора"
              value={donation.title}
              onChange={(e) => this.setDonation({ title: e.target.value })}
            />
            <Input
              top="Сумма в месяц, ₽"
              bottom={
                highlightErrors && !donation.need
                  ? 'Пожалуйста введите сумму\n(должна быть больше нуля)'
                  : ''
              }
              status={
                highlightErrors && !donation.need
                  ? 'error'
                  : 'default'
              }
              pattern="[0-9]*"
              placeholder="Сколько нужно в месяц?"
              value={donation.need || ''}
              onChange={
                (e) => {
                  const donationNeed = parseFloat(e.target.value);
                  // prevent passing NaN or negative numbers as donation.need value
                  if (!isNaN(donationNeed) && donationNeed >= 0) {
                    this.setDonation({ need: donationNeed });
                  } else {
                    this.setDonation({ need: 0 });
                  }
                }
              }
            />
            <Input
              top="Цель"
              bottom={
                highlightErrors && !donation.target
                  ? 'Пожалуйста введите цель сбора'
                  : ''
              }
              status={
                highlightErrors && !donation.target
                  ? 'error'
                  : 'default'
              }
              placeholder="Например, поддержка приюта"
              value={donation.target}
              onChange={(e) => this.setDonation({ target: e.target.value })}
            />
            <Textarea
              top="Описание"
              bottom={
                highlightErrors && !donation.description
                  ? 'Пожалуйста введите описание сбора'
                  : ''
              }
              status={
                highlightErrors && !donation.description
                  ? 'error'
                  : 'default'
              }
              placeholder="На что пойдут деньги и как они помогут?"
              value={donation.description}
              onChange={(e) =>
                this.setDonation({ description: e.target.value })
              }
            />
            <SelectMimicry
              top="Куда получать деньги"
              placeholder="Счёт"
              onClick={() => setPanel('vkpay')}
            >
              {donation.cashAccount.name}
            </SelectMimicry>
            <SelectMimicry
              top="Автор"
              placeholder="Выберите автора"
              onClick={() => setPanel('author')}
            >
              {donation.author.name}
            </SelectMimicry>
          </FormLayout>
          <div style={{ height: 68 }} />
          <FixedLayout filled vertical="bottom">
            <Div>
              <Button
                stretched
                size="l"
                onClick={() => {
                  const isValid = this.isPanelFormValid('regular');
                  if (isValid) {
                    setPanel('posting');
                  } else {
                    this.setState({ highlightErrors: true });
                  }
                }}
                onBlur={() => this.setState({ highlightErrors: false })}
              >
                Создать сбор
              </Button>
            </Div>
          </FixedLayout>
        </Panel>
        <Panel id="author">
          <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
            Автор
          </PanelHeader>
          <List>
            {this.authors.map((user) => (
              <SimpleCell
                before={<Avatar size={40} src={user.photo_100} />}
                after={donation.author.id === user.id ? <Icon24Done /> : null}
                key={user.id}
                onClick={() => this.choseAuthor(user)}
              >
                {user.name}
              </SimpleCell>
            ))}
          </List>
        </Panel>
        <Panel id="vkpay">
          <PanelHeader separator>VK Pay</PanelHeader>
          <Placeholder
            action={
              <Button size="l" stretched onClick={() => goBack()}>
                Назад
              </Button>
            }
            stretched
          >
            Заглушка.
            <br />
            Как и просили.
          </Placeholder>
        </Panel>
        <Panel id="posting">
          <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
            {donation.author.name}
          </PanelHeader>
          <SnippetDonation
            title={donation.title}
            description={`${donation.author.name}· Закончится через 5 дней`}
            progress="Помоги первым"
            value={0}
            action={
              <Button mode="outline" disabled>
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
          <div style={{ height: 68 }} />
          <FixedLayout filled vertical="bottom">
            <Div>
              <Button
                size="l"
                stretched
                onClick={() => updateDonation(donation)}
              >
                {finishText || 'Опубликовать'}
              </Button>
            </Div>
          </FixedLayout>
        </Panel>
      </View>
    );
  }
}
