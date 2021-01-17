export interface SearchResultItem {
  owner: any;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  answer_count: number;
  closed_date: number;
  closed_reason: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  score: number;
  tags: Array<string>;
  title: string;
  view_count: number;
}
