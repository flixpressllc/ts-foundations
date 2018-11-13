export class ObjectTools {
  public static cloneObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  public static regardAs<T>(obj: any): T {
    return obj as T;
  }
}
