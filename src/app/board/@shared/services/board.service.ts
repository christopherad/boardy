import { HttpClient } from '@angular/common/http';
import { Column } from '../models/column';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


const api = 'https://crudcrud.com/api/5372da80de4d46d18229703d6d18a17f';

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

  updateColumn(columnId: number, column : Partial<Column>){
    return this.httpClient.put<Column>(`${api}/Columns/${columnId}`, column);
  }
}