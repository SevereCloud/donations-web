import React, {
  ReactNode,
  InputHTMLAttributes,
  ChangeEvent,
  Component,
  MouseEventHandler,
} from 'react';
import {
  getClassName,
  classNames,
  Tappable,
  HasPlatform,
  withPlatform,
  ANDROID,
  IOS,
} from '@vkontakte/vkui';
import type { HasRootRef, HasRef } from '@vkontakte/vkui/dist/types';
import { Icon24Cancel, Icon24DismissOverlay } from '@vkontakte/icons';

export interface CoverLoaderProps
  extends InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement>,
    HasPlatform {
  /**
   * Срабатывает при клике на иконку крестика при `asideMode="dismiss"`.
   */
  onDismiss?: MouseEventHandler<HTMLDivElement>;
  onLoadImage?: (image: string) => void;
  /**
   * Изображение
   */
  title?: string;
  before?: ReactNode;
  image?: string;
}

export interface CoverLoaderState {
  value?: string;
}

class CoverLoader extends Component<CoverLoaderProps, CoverLoaderState> {
  constructor(props: CoverLoaderProps) {
    super(props);
    this.state = {
      value: this.props.image,
    };
  }

  change = (input: ChangeEvent<HTMLInputElement>) => {
    if (input.target.files && input.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          this.setState({ value: e.target.result });

          if (this.props.onLoadImage) {
            this.props.onLoadImage(e.target.result);
          }
        }
      };

      reader.readAsDataURL(input.target.files[0]);
    }
    if (this.props.onChange) {
      this.props.onChange(input);
    }
  };

  dismiss: MouseEventHandler<HTMLDivElement> = (e) => {
    this.setState({ value: undefined });

    if (this.props.onDismiss) {
      this.props.onDismiss(e);
    }
  };

  render(): JSX.Element {
    const {
      className,
      title,
      before,
      getRef,
      getRootRef,
      style,
      platform,
      onChange,
      onDismiss,
      onLoadImage,
      ...restProps
    } = this.props;
    const { value } = this.state;

    return (
      <Tappable
        disabled={!!value}
        className={classNames(
          className,
          getClassName('CoverLoader', platform),
          {
            'CoverLoader--load': !!value,
          },
        )}
        style={{ ...style, backgroundImage: `url(${value})` }}
        getRootRef={getRootRef}
        Component="label"
      >
        <input
          disabled={!!value}
          {...restProps}
          className="CoverLoader__input"
          type="file"
          ref={getRef}
          onChange={this.change}
        />
        <div className="CoverLoader__in">
          {before && <div className="CoverLoader__before">{before}</div>}
          <div className="CoverLoader__content">{title}</div>
        </div>

        {!!value && (
          <div className="CoverLoader__dismiss">
            <div className="CoverLoader__dismissIcon" onClick={this.dismiss}>
              {/*  */}
              {platform === ANDROID && <Icon24Cancel />}
              {platform === IOS && <Icon24DismissOverlay />}
            </div>
          </div>
        )}
      </Tappable>
    );
  }
}

export default withPlatform(CoverLoader);
