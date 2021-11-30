import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'wt-book-search',
  templateUrl: './book-search.component.html'
})

@Injectable({
  providedIn: 'root'
})
export class BoardService implements OnInit {

  private _bookListUrl='https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
     this._httpClient.get(this._bookListUrl);
  }
}
