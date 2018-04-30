export class CounterpartyAccount {
    public id: string;
    public currency: string;
    public type: 'revolut' | 'external';
    public accountNo?: string;
    public iban?: string;
    public sortCode?: string;
    public routingNumber?: string;
    public bic?: string;
    public email?: string;
    public name?: string;
    public bankCountry?: string;
    public recipientCharges?: 'no' | 'expected';
}