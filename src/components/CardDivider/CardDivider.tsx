import React, { FC, HTMLAttributes } from 'react';
import {
  SimpleCell,
  usePlatform,
  getClassName,
  classNames,
  Avatar,
  Tappable,
} from '@vkontakte/vkui';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';
import type { Author } from '../../types';
import {
  Icon24CommentOutline,
  Icon24LikeOutline,
  Icon24ShareOutline,
  Icon24View,
} from '@vkontakte/icons';

export interface CardDividerProps
  extends HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

const CardDivider: React.FC<CardDividerProps> = ({
  className,
  getRootRef,
  ...restProps
}: CardDividerProps) => {
  const platform = usePlatform();
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(getClassName('CardDivider', platform), className)}
    />
  );
};

export default CardDivider;
