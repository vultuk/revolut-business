import * as request from 'request-promise-native';
import { Config } from '../types';

export class Action {
  protected config: Config = undefined;
  private readonly productionUrl: string = 'https://b2b.revolut.com/api/1.0/';
  private readonly sandboxUrl: string = 'https://sandbox-b2b.revolut.com/api/1.0/';

  constructor(config?: Config) {
    if (!config && !config.apiKey && !process.env.REVOLUT_API_KEY) {
      throw new Error('No Revolut API key was provided.');
    }

    if (!config) {
      this.config = {
        apiKey: process.env.REVOLUT_API_KEY,
        sandbox: process.env.REVOLUT_SANDBOX.toLowerCase() === 'true' || false,
      } as Config;
    } else {
      this.config = config;
    }
  }

  protected async requestGet(endpoint: string): Promise<any> {
    return request.get(
      `${
        this.config.sandbox ? this.sandboxUrl : this.productionUrl
      }${endpoint}`,
    );
  }
}
