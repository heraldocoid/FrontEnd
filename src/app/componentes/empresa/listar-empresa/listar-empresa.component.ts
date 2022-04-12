import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';
import { Empresa } from '../../common/entities/empresa';
import { Response } from '../../common/response/response';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {

  listaEmpresas: Empresa[] = [];
  constructor(private srvEmpresas: EmpresaService) { }

  ngOnInit(): void {
    this.srvEmpresas.listarEmpresa().then((respo: Response)=>{
      console.log(respo.value);
      this.listaEmpresas = respo.value;
    });
  }

}
