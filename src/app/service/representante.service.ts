import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../componentes/common/response/response';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  constructor(private htpp:HttpClient) { }

  consultaRepresentantes():Promise<Response>{
    return this.htpp.get<Response>(environment.urlListRepresentante).toPromise();
  }
}
