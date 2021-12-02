import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column!: Column;

  @Output() onColumnDropped: EventEmitter<Column> = new EventEmitter();

  constructor(
    private boardService: BoardService
    ) { }
  ngOnInit(): void {
  }

  delete():void{
    this.boardService.dropColumn(this.column._id).subscribe(()=> {
      this.onColumnDropped.emit(this.column);
    })
  }
}