import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmpresaRequest } from '../componentes/common/request/empresa-request';
import { Response } from '../componentes/common/response/response';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  listarEmpresa():Promise<Response>{
    return this.http.get<Response>(environment.urlListEmpresa).toPromise();
  }

  createEmpresa(tipEmpr:number, pais: number, depart:number, ciudad: number, repre:number,request: EmpresaRequest):Promise<Response>{
    return this.http.post<Response>(environment.urlCreateEmpresa + "tipoEmpresa/"+tipEmpr+"/pais/"+pais+"/departamento/"+depart+"/ciudad/"+ciudad+"/representante/"+repre+"/crear",request).toPromise();
  }
}
