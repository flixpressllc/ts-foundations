import { IIdentifiable } from './iidentifiable';

export interface IResultSet<T extends IIdentifiable<TKey>, TKey> {
  currentPage: number;
  pageSize: number;
  hasNextResults: boolean;
  hasPreviousResults: boolean;
  totalRecordsCount: number;
  records: T[];
  numPages: number;
}
