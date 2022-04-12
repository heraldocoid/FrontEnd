import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadService } from 'src/app/service/ciudad.service';
import { DepartamentoService } from 'src/app/service/departamento.service';
import { EmpresaService } from 'src/app/service/empresa.service';
import { PaisService } from 'src/app/service/pais.service';
import { RepresentanteService } from 'src/app/service/representante.service';
import { TipoEmpresaService } from 'src/app/service/tipo-empresa.service';
import { Ciudad } from '../../common/entities/ciudad';
import { Departamento } from '../../common/entities/departamento';
import { Pais } from '../../common/entities/pais';
import { Representante } from '../../common/entities/representante';
import { TipoEmpresa } from '../../common/entities/tipo-empresa';
import { EmpresaRequest } from '../../common/request/empresa-request';
import { Response } from '../../common/response/response';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  formEmpresa : FormGroup;
  listaTipoEmpresas: TipoEmpresa[] =[];
  listaPaises : Pais[] = [];
  listaDepartamentos: Departamento[] = [];
  listaCiudades : Ciudad[] = [];
  listaRepresentante: Representante[] = [];

  constructor(
    private srvTipDoc: TipoEmpresaService,
    private srvPais: PaisService,
    private srvDepa: DepartamentoService,
    private srvCiu: CiudadService,
    private srvRepre: RepresentanteService,
    private srvEmp: EmpresaService,
    private router: Router) { }

  ngOnInit(): void {

    this.srvTipDoc.consultaTipoEmpresa().then((resp: Response) =>{
      this.listaTipoEmpresas = resp.value;

      console.log("TIPOS DE EMPRESAS");
      console.log(resp.value);
    });

    this.srvPais.consultaPais().then((respo: Response) =>{
      this.listaPaises = respo.value;
    });

    this.srvDepa.consultaDepartamentos().then((respu: Response)=>{
      this.listaDepartamentos = respu.value;
    });

    this.srvCiu.consultarCiudades().then((res:Response) =>{
      this.listaCiudades = res.value;
    });

    this.srvRepre.consultaRepresentantes().then((r:Response) =>{
      this.listaRepresentante = r.value;
    });

    this.formEmpresa = new FormGroup({
      'tipoEmpresa': new FormControl(0),
      'documento': new FormControl(),
      'nombre': new FormControl(),
      'direccion': new FormControl(),
      'pais': new FormControl(0),
      'departamento': new FormControl(0),
      'ciudad': new FormControl(0),
      'telefono': new FormControl(),
      'representante': new FormControl(0),
    });
  }

  crearEmpresa(){
      let request: EmpresaRequest = new EmpresaRequest();
      request.documento = parseInt(this.formEmpresa.value.documento);
      request.nombre = this.formEmpresa.value.nombre;
      request.direccion = this.formEmpresa.value.direccion;
      request.telefono = this.formEmpresa.value.telefono;

      this.srvEmp.createEmpresa(this.formEmpresa.value.tipoEmpresa,
        this.formEmpresa.value.pais,this.formEmpresa.value.departamento, this.formEmpresa.value.ciudad, this.formEmpresa.value.representante, request).then((re:Response)=>{
        console.log(re.message);
        this.router.navigate(['listarEmpresa']);
      });
  }

}
