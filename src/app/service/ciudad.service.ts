import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../componentes/common/response/response';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http:HttpClient) { }

  consultarCiudades(): Promise<Response>{
    return this.http.get<Response>(environment.urlListCiudad).toPromise();
  }

}
