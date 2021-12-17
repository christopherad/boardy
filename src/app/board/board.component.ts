import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { BOARD } from './@shared/mock/board.mock';
import { COLUMNS } from './@shared/mock/column.mock';
import { Board, Column } from './@shared/models';
import { BoardService } from './@shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  columns: Column[]= [];
  board: Board= BOARD;
  columnUpdating?: Column;
  
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getColumns().subscribe(columns => this.columns = columns);
  }

  addColumn(column: Column){
    console.log("column > ", column)
    this.columns.push(column);
  }

  deleteColumn(column: Column) {
    console.log("column < ", column)
    this.columns=this.columns.filter(columnOff=> columnOff._id !=column._id)
  }

  updateColumn(column: Column) {
    console.log("column >> ", column);
    console.log(column.title);
    this.columnUpdating=column;
    // findIndex(columnUpdating)
  }
}
