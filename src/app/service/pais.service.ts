import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../componentes/common/response/response';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  consultaPais():Promise<Response>{
    return this.http.get<Response>(environment.urlListPais).toPromise();
  }
}
