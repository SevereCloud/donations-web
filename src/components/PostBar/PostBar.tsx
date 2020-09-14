import React, { FC, HTMLAttributes } from 'react';
import {
  usePlatform,
  getClassName,
  classNames,
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

export interface PostBarProps
  extends HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  likes: number;
  comments: number;
  reposts: number;
  views: string;
}

const PostBar: FC<PostBarProps> = ({
  className,
  likes,
  comments,
  reposts,
  views,
  children,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(className, getClassName('PostBar', platform))}
    >
      <Tappable className="PostBar__button">
        <Icon24LikeOutline />
        {likes || ''}
      </Tappable>
      <Tappable className="PostBar__button">
        <Icon24CommentOutline />
        {comments || ''}
      </Tappable>
      <Tappable className="PostBar__button">
        <Icon24ShareOutline />
        {reposts || ''}
      </Tappable>
      <div className="PostBar__views">
        <Icon24View width={20} height={20} />
        {views}
      </div>
    </div>
  );
};

export default PostBar;
