import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../core/services/search.service';
import {SearchResultItem} from '../../core/services/SearchResultItem';

@Component({
  selector: 'app-stack-overflow-questions',
  templateUrl: './stack-overflow-questions.component.html',
  styleUrls: ['./stack-overflow-questions.component.scss']
})
export class StackOverflowQuestionsComponent implements OnInit {

  searchResults: SearchResultItem[] = [];

  constructor(private service: SearchService) {
  }

  ngOnInit() {
    this.service.search('TypeScript').subscribe(response => {
      this.searchResults = response.items;
    });
  }

}
