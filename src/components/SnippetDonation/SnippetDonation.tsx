import React, { FC, HTMLAttributes, ReactNode } from 'react';
import {
  Progress,
  SimpleCell,
  Separator,
  usePlatform,
  getClassName,
  classNames,
} from '@vkontakte/vkui';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';

export interface SnippetDonationProps
  extends HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  /**
   * Изображение
   */
  background?: ReactNode;
  title?: string;
  description?: string;
  progress?: string;
  value?: number;
  action?: ReactNode;
}

const SnippetDonation: FC<SnippetDonationProps> = ({
  className,
  background,
  title,
  description,
  progress,
  value,
  action,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(
        className,
        getClassName('SnippetDonation', platform),
      )}
    >
      <div className="SnippetDonation__background">{background}</div>
      <div className="SnippetDonation__info">
        <div className="SnippetDonation__cell">
          <SimpleCell disabled description={description}>
            {title}
          </SimpleCell>
        </div>
        <Separator />
        <div className="SnippetDonation__bottom">
          <div className="SnippetDonation__before">
            <div className="SnippetDonation__progress">{progress}</div>
            <Progress value={value} />
          </div>
          <div className="SnippetDonation__action">{action}</div>
        </div>
      </div>
    </div>
  );
};

export default SnippetDonation;
