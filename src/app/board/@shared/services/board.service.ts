import { HttpClient } from '@angular/common/http';
import { Column } from '../models/column';
import { Observable } from 'rxjs';
import { COLUMNS } from '../mock/column.mock';
import { Injectable } from '@angular/core';


const api = 'https://crudcrud.com/api/8aa4899a05d74ec28288e5c9a12621cd';

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

  updateColumn(titre: string, description : string){
    return this.httpClient.put<Column>(api + '/columns/' + column._id, column);
  }

}