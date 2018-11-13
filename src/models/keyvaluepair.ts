export class KeyValuePair<TKey, TValue> {
  public key: TKey = undefined;
  public value: TValue = undefined;

  constructor(key: TKey, value: TValue) {
    this.key = key;
    this.value = value;
  }
}
