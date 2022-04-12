import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../componentes/common/response/response';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpresaService {

  constructor(private http: HttpClient) { }

  consultaTipoEmpresa():Promise<Response>{
    return this.http.get<Response>(environment.urlListTipoEmpresa).toPromise();
  }
}
