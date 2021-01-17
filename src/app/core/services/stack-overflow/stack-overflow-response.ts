import {SearchResultItem} from './search-result-item';

export interface StackOverflowResponse {
  has_more: boolean;
  items: SearchResultItem[];
  quota_max: number;
  quota_remaining: number;
}
