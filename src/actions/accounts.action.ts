import {Action} from "./action";
import {Account} from "../types/account.type";
import * as moment from 'moment';

export class AccountsAction extends Action {

    public async listAll(): Promise<Account[]> {
        return this.requestGet(`accounts`)
            .then((accounts: any[]) => accounts.map((account: any) => {
                return {
                    id: account.id,
                    name: account.name,
                    balance: account.balance,
                    currency: account.currency,
                    state: account.state,
                    public: account.public,
                    createdAt: moment(account.created_at),
                    updatedAt: moment(account.updated_at),
                } as Account;
            }))
    }

    public async getSingle(accountId: string): Promise<Account[]> {
        return this.requestGet(`accounts/${accountId}`)
            .then((accounts: any[]) => accounts.map((account: any) => {
                return {
                    id: account.id,
                    name: account.name,
                    balance: account.balance,
                    currency: account.currency,
                    state: account.state,
                    public: account.public,
                    createdAt: moment(account.created_at),
                    updatedAt: moment(account.updated_at),
                } as Account;
            }))
    }

}