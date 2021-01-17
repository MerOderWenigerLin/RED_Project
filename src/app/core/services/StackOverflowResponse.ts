import {SearchResultItem} from './SearchResultItem';

export interface StackOverflowResponse {
  has_more: boolean;
  items: SearchResultItem[];
  quota_max: number;
  quota_remaining: number;
}
