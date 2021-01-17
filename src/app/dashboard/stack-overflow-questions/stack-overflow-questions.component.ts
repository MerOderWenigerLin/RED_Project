import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../core/services/search.service';
import {SearchResultItem} from '../../core/services/search-result-item';

@Component({
  selector: 'app-stack-overflow-questions',
  templateUrl: './stack-overflow-questions.component.html',
  styleUrls: ['./stack-overflow-questions.component.scss']
})
export class StackOverflowQuestionsComponent implements OnInit {

  @Input() question = '';
  @Input() pagesize = 0;
  searchResults: SearchResultItem[] = [];

  constructor(private service: SearchService) {
  }

  ngOnInit() {
    this.service.search(this.question, this.pagesize).subscribe(response => {
      this.searchResults = response.items;
      console.log(response);
    });
  }

}
