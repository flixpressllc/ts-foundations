import { KeyValuePair } from '../models/keyvaluepair';
import { ArrayTools } from './arraytools';

export class KeyValuePairArray<TKey, TValue> extends Array<KeyValuePair<TKey, TValue>> {

  public static create<TKey, TValue>(): KeyValuePairArray<TKey, TValue> {
    return Object.create(KeyValuePairArray.prototype);
  }

  private constructor(items?: Array<KeyValuePair<TKey, TValue>>) {
    super(...items);
  }

  public findByKey(key: TKey): TValue {

    const matches = ArrayTools.filterGeneric<KeyValuePair<TKey, TValue>>(this, (item) => item.key === key);

    if (matches.length === 0) {
      return null;
    }

    return matches[0].value;
  }

  public add(key: TKey, value: TValue) {
    const match = this.findByKey(key);

    if (match == null) {
      this.push(new KeyValuePair<TKey, TValue>(key, value));
    }
  }

  public addKeyValuePair(keyValuePair: KeyValuePair<TKey, TValue>) {
    const match = this.findByKey(keyValuePair.key);

    if (match == null) {
      this.push(keyValuePair);
    }
  }

  public remove(key: TKey) {
    const match = this.findByKey(key);

    if (match != null) {
      ArrayTools.delete(match, this);
    }
  }
}
