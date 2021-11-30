import { Component, OnInit } from '@angular/core';
import { BOARD } from './@shared/mock/board.mock';
import { COLUMNS } from './@shared/mock/column.mock';
import { Board, Column } from './@shared/models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  columns: Column[]= COLUMNS;
  board: Board= BOARD;
  
  constructor() { }

  ngOnInit(): void {
  }

  addColumn(column: Column){
    this.columns.push(column);
  }
}
