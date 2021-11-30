import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Column } from '../models/column';
import { Observable } from 'rxjs';
import { COLUMNS } from '../mock/column.mock';


const api = 'https://crudcrud.com/api/216f7b72dbd74a5c87a426d71653da31';

@Injectable({
  providedIn: 'root'
})
export class BoardService {


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  addColumn(title: string) {
    return this.httpClient.post<Column>(api + '/columns', { title: title });
  }

  getColumns(title: string): Observable<any>{
    return this.httpClient.get<Column[]>(api + '/Columns')
  }

  dropColumn(columnId: number): Observable<any> {
    return this.httpClient.delete<Column>(api + '/columns/' + columnId)
  }
}