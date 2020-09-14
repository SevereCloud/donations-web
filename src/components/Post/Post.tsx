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

export interface PostProps
  extends HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  author: Author;
  date: string;

  likes: number;
  comments: number;
  reposts: number;
  views: string;
}

const Post: FC<PostProps> = ({
  className,
  author,
  date,
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
      className={classNames(className, getClassName('Post', platform))}
    >
      <div className="Post__header">
        <SimpleCell
          disabled
          description={date}
          before={<Avatar size={48} src={author.photo_100} />}
        >
          {author.name}
        </SimpleCell>
      </div>
      <div className="Post__content">{children}</div>
      <div className="Post__actions">
        <Tappable className="Post__button">
          <Icon24LikeOutline />
          {likes || ''}
        </Tappable>
        <Tappable className="Post__button">
          <Icon24CommentOutline />
          {comments || ''}
        </Tappable>
        <Tappable className="Post__button">
          <Icon24ShareOutline />
          {reposts || ''}
        </Tappable>
        <div className="Post__views">
          <Icon24View width={20} height={20} />
          {views}
        </div>
      </div>
    </div>
  );
};

export default Post;
