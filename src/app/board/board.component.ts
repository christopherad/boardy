import { Component, OnInit } from '@angular/core';
import { BOARD } from './@shared/mock/board.mock';
import { COLUMNS } from './@shared/mock/column.mock';
import { Board, Column } from './@shared/models';
import { ColumnForm } from './add-column/add-column.component';
import { ColumnComponent } from './column/column.component';

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

  addColumn(column: ColumnForm){
    this.columns.push({ _id: 6, position: 7, title: column.title });
  }
}
