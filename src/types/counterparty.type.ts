import * as moment from 'moment';
import { CounterpartyAccount } from './counterparty-account.type';

export class Counterparty {
  public id: string;
  public name: string;
  public phone: string;
  public profileType: 'business' | 'personal';
  public country: string;
  public state: 'created' | 'deleted';
  public createdAt: moment.Moment;
  public updatedAt: moment.Moment;
  public accounts: CounterpartyAccount[];
}
