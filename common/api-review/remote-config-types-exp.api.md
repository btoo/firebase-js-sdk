## API Report File for "@firebase/remote-config-types-exp"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export type FetchStatus = 'no-fetch-yet' | 'success' | 'failure' | 'throttle';

// @public
export type LogLevel = 'debug' | 'error' | 'silent';

// @public
export interface RemoteConfig {
  defaultConfig: { [key: string]: string | number | boolean };

  fetchTimeMillis: number;

  lastFetchStatus: FetchStatus;

  settings: Settings;
}

// @public
export interface Settings {
  fetchTimeoutMillis: number;

  minimumFetchIntervalMillis: number;
}

// @public
export interface Value {
  asBoolean(): boolean;

  asNumber(): number;

  asString(): string;

  getSource(): ValueSource;
}

// @public
export type ValueSource = 'static' | 'default' | 'remote';


// (No @packageDocumentation comment for this package)

```
