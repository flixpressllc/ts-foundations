export interface IClientStorage {
  setString(key: string, value: string);
  setNumber(key: string, value: number);
  setObject(key: string, value: object);

  resolveString(key: string, defaultValue?: string);
  resolveNumber(key: string, defaultValue?: number);
  resolveObject(key: string, defaultValue?: object);

  remove(key: string);
}
