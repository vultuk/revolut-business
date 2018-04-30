import * as moment from 'moment';

export class Account {
    public id: string;
    public name: string;
    public balance: number;
    public currency: string;
    public state: 'active' | 'inactive';
    public public: boolean;
    public createdAt: moment.Moment;
    public updatedAt: moment.Moment;
}