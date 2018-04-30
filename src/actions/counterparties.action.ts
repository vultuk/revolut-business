import { Action } from './action';
import { Counterparty, CounterpartyAccount } from '../types';
import * as moment from 'moment';

export class CounterpartiesAction extends Action {
  public async listAll(): Promise<Counterparty[]> {
    return this.requestGet(`counterparties`).then((counterparties: any[]) =>
      counterparties.map((counterparty: any) => {
        return {
          id: counterparty.id,
          name: counterparty.name,
          phone: counterparty.phone,
          profileType: counterparty.profile_type,
          country: counterparty.country,
          state: counterparty.state,
          createdAt: moment(counterparty.created_at),
          updatedAt: moment(counterparty.updated_at),
          accounts:
            !counterparty.accounts || counterparty.accounts.length < 1
              ? []
              : counterparty.accounts.map(account => {
                  return {
                    id: account.id,
                    currency: account.currency,
                    type: account.type,
                    accountNo: account.accountNo || undefined,
                    iban: account.iban || undefined,
                    sortCode: account.sortCode || undefined,
                    routingNumber: account.routingNumber || undefined,
                    bic: account.bic || undefined,
                    email: account.email || undefined,
                    name: account.name || undefined,
                    bankCountry: account.bankCountry || undefined,
                    recipientCharges: account.recipientCharges || undefined,
                  } as CounterpartyAccount;
                }),
        } as Counterparty;
      }),
    );
  }

  public async getSingle(accountId: string): Promise<Counterparty> {
    return this.requestGet(`counterparty/${accountId}`).then(
      (counterparty: any) => {
        return {
          id: counterparty.id,
          name: counterparty.name,
          phone: counterparty.phone,
          profileType: counterparty.profile_type,
          country: counterparty.country,
          state: counterparty.state,
          createdAt: moment(counterparty.created_at),
          updatedAt: moment(counterparty.updated_at),
          accounts:
            !counterparty.accounts || counterparty.accounts.length < 1
              ? []
              : counterparty.accounts.map(account => {
                  return {
                    id: account.id,
                    currency: account.currency,
                    type: account.type,
                    accountNo: account.accountNo || undefined,
                    iban: account.iban || undefined,
                    sortCode: account.sortCode || undefined,
                    routingNumber: account.routingNumber || undefined,
                    bic: account.bic || undefined,
                    email: account.email || undefined,
                    name: account.name || undefined,
                    bankCountry: account.bankCountry || undefined,
                    recipientCharges: account.recipientCharges || undefined,
                  } as CounterpartyAccount;
                }),
        } as Counterparty;
      },
    );
  }
}
