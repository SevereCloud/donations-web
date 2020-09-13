export interface CashAccount {
  name: string;
}

export interface User {
  type: 'user';
  id: number;
  first_name: string;
  last_name: string;
  is_closed: boolean;
  can_access_closed: boolean;
  photo_100: string;
}

export interface Group {
  type: 'group' | 'page' | 'event';
  id: number;
  name: string;
  screen_name: string;
  is_closed: number;
  is_admin: number;
  is_member: number;
  is_advertiser: number;
  photo_100: string;
}

// TODO: сделать правильно
export type Auth = User | Group;

export interface Author {
  id: number;
  name: string;
  photo_100: string;
}

interface DonationBase {
  title: string;
  image: string;
  need: number;
  target: string;
  description: string;
  cashAccount: CashAccount;
  author: Author;
}

interface DonationTarget extends DonationBase {
  type: 'target';
}

interface DonationRegular extends DonationBase {
  type: 'regular';
  /**
   * Сбор завершится
   *
   * Если underfined то когда соберём сумму
   */
  finish?: number;
}

export type Donation = DonationTarget | DonationRegular;

export interface DateFormat {
  day: number;
  month: number;
  year: number;
}
