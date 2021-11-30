import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';
import { Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column!: Column;

  constructor() { }

  ngOnInit(): void {
  }

}

