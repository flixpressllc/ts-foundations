export class ArrayTools {

  public static filter(array: any[], criteria: (item) => boolean): any[] {
    const filtered: any[] = [];

    for (let i = 0; i < array.length; i++) {
      if (criteria(array[i])) {
        filtered.push(array[i]);
      }
    }

    return filtered;
  }

  public static filterGeneric<T>(array: T[], criteria: (item: T) => boolean): T[] {
    const filtered: T[] = [];

    for (let i = 0; i < array.length; i++) {
      if (criteria(array[i])) {
        filtered.push(array[i]);
      }
    }

    return filtered;
  }

  public static delete(item: any, array: any[]) {
    const index = array.indexOf(item);
    if (index >= 0) {
      array.splice(index, 1);
    }
  }

  public static add(item: any, array: any[]) {
    array.push(item);
  }

  public static clear(array: any[]) {
    array.splice(0, array.length);
  }

  public static insertAfter(index: number, item: any, array: any[]) {
     if ((index >= 0) && (index < array.length)) {
      array.splice(index, 0, item);
     }
   }

   public static insertBefore(index: number, item: any, array: any[]) {
    if ((index >= 1) && (index < array.length)) {
      array.splice(index - 1, 0, item);
      }
   }

   public static anyOfFirstIsInSecond(firstArray: any[], secondArray: any[]) {
    for (let i = 0; i < firstArray.length; i++) {
      if (secondArray.indexOf(firstArray[i]) > -1) {
        return true;
      }
    }

    return false;
   }

  public static allOfFirstIsInSecond(firstArray: any[], secondArray: any[]) {
    for (let i = 0; i < firstArray.length; i++) {
      if (secondArray.indexOf(firstArray[i]) === -1) {
        return false;
      }
    }

    return true;
  }

  public static canMoveUp(item: any, array: any[]): boolean {
    return (array.indexOf(item) > 0);
  }

  public static canMoveDown(item: any, array: any[]): boolean {
    return (array.indexOf(item) < array.length - 1);
  }

  public static moveUp(item: any, array: any[]) {
    if (this.canMoveUp(item, array)) {
      const index = array.indexOf(item);
      this.delete(item, array);
      this.insertAfter(index - 1, item, array);
    }
  }

  public static moveDown(item: any, array: any[]) {
    if (this.canMoveDown(item, array)) {
      const index = array.indexOf(item);
      this.delete(item, array);
      if (index === array.length - 1) {
        array.push(item);
      } else {
        this.insertAfter(index + 1, item, array);
      }
    }
  }
}
