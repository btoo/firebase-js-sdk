# @firebase/analytics

## 0.4.0

### Minor Changes

- [`02419ce8`](https://github.com/firebase/firebase-js-sdk/commit/02419ce8470141f012d9ce425a6a4a4aa912e480) [#3165](https://github.com/firebase/firebase-js-sdk/pull/3165) - Issue 2393 fix - analytics module

  - Added a public method `isSupported` to Analytics module which returns true if current browser context supports initialization of analytics module.
  - Added runtime checks to Analytics module that validate if cookie is enabled in current browser and if current browser environment supports indexedDB functionalities.

## 0.3.9

### Patch Changes

- [`a754645e`](https://github.com/firebase/firebase-js-sdk/commit/a754645ec2be1b8c205f25f510196eee298b0d6e) [#3297](https://github.com/firebase/firebase-js-sdk/pull/3297) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependency typescript to v3.9.5

- Updated dependencies [[`a754645e`](https://github.com/firebase/firebase-js-sdk/commit/a754645ec2be1b8c205f25f510196eee298b0d6e)]:
  - @firebase/component@0.1.16
  - @firebase/installations@0.4.14
  - @firebase/logger@0.2.6