import {Config} from "./types";
import {AccountsAction} from "./actions/accounts.action";

export * from './types';

export class RevolutBusiness {

    private config: Config = undefined;

    constructor(config?: Config) {
        this.config = config;
    }

    public accounts(): AccountsAction {
        return new AccountsAction(this.config);
    }

}

