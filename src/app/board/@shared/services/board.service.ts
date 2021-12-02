import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Column } from '../models/column';
import { Observable } from 'rxjs';
import { COLUMNS } from '../mock/column.mock';


const api = 'https://crudcrud.com/api/1c285a00b90247ea81daf04dd6781805';

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

  getColumns(): Observable<any>{
    return this.httpClient.get<Column[]>(api + '/Columns')
  }

  dropColumn(columnId: number): Observable<any> {
    return this.httpClient.delete<Column>(`${api}/Columns/${columnId}`);
  }
}