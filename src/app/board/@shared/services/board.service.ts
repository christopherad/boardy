import { HttpClient } from '@angular/common/http';
import { Column } from '../models/column';
import { Observable } from 'rxjs';
import { COLUMNS } from '../mock/column.mock';
import { Injectable } from '@angular/core';


const api = 'https://crudcrud.com/api/0800f4dd26504d2abdafe22d7feda87c';

@Injectable({
  providedIn: 'root'
})
export class BoardService {


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  addColumn(title: string, description: string) {
    return this.httpClient.post<Column>(api + '/columns', { title: title, description: description});
  }

  getColumns(): Observable<any>{
    return this.httpClient.get<Column[]>(api + '/Columns')
  }

  dropColumn(columnId: number): Observable<any> {
    return this.httpClient.delete<Column>(`${api}/Columns/${columnId}`);
  }

  updateColumn(column: Column)
}