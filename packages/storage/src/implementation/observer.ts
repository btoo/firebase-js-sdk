/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { isFunction } from './type';
import { FirebaseStorageError } from './error';

/**
 * @public
 * Called once for each value in a stream of values.
 */
export type NextFn<T> = (value: T) => void;

/**
 * @public
 * A stream terminates by a single call to EITHER error() or complete().
 */
export type ErrorFn = (error: FirebaseStorageError) => void;

/**
 * @public
 * No events will be sent to next() once complete() is called.
 */
export type CompleteFn = () => void;

/**
 * @public
 * Unsubscribes to a stream.
 */
export type Unsubscribe = () => void;

/**
 * @public
 * An observer that wraps any errors in `FirebaseStorageError`.
 */
export interface StorageObserver<T> {
  /**
   * Called once for each value in the event stream.
   */
  next?: NextFn<T>;
  /**
   * A function that gets called with a `FirebaseStorageError`
   * if the event stream ends due to an error.
   */
  error?: ErrorFn;
  /**
   * A function that gets called if the event stream ends normally.
   */
  complete?: CompleteFn;
}

/**
 * @public
 * Subscribes to an event stream.
 */
export type Subscribe<T> = (
  next?: NextFn<T> | StorageObserver<T>,
  error?: ErrorFn,
  complete?: CompleteFn
) => Unsubscribe;

/**
 * @internal
 */
export class Observer<T> implements StorageObserver<T> {
  next?: NextFn<T>;
  error?: ErrorFn;
  complete?: CompleteFn;

  constructor(
    nextOrObserver?: NextFn<T> | StorageObserver<T>,
    error?: ErrorFn,
    complete?: CompleteFn
  ) {
    const asFunctions =
      isFunction(nextOrObserver) || error != null || complete != null;
    if (asFunctions) {
      this.next = nextOrObserver as NextFn<T>;
      this.error = error;
      this.complete = complete;
    } else {
      const observer = nextOrObserver as {
        next?: NextFn<T>;
        error?: ErrorFn;
        complete?: CompleteFn;
      };
      this.next = observer.next;
      this.error = observer.error;
      this.complete = observer.complete;
    }
  }
}
