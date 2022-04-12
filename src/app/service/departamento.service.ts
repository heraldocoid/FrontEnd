import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../componentes/common/response/response';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  consultaDepartamentos() : Promise<Response>{
    return this.http.get<Response>(environment.urlListDepartamento).toPromise();
  }
}
