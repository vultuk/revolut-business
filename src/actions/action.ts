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
    return this.sendRequest(
      'GET',
      `${
        this.config.sandbox ? this.sandboxUrl : this.productionUrl
      }${endpoint}`,
    );
  }

  private async sendRequest(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    values?: any,
  ): Promise<any> {
    const options = {
      url,
      method,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${this.config.apiKey}`,
      },
      json: true,
    };

    if (values) {
      options['body'] = values;
    }

    return request(options);
  }
}
