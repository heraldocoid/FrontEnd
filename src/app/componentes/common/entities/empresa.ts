import { Ciudad } from "./ciudad";
import { Departamento } from "./departamento";
import { Pais } from "./pais";
import { Representante } from "./representante";
import { TipoEmpresa } from "./tipo-empresa";

export class Empresa{
    tipoEmpresa: TipoEmpresa;
    documento: number;
    nombre: string;
    direccion: string;
    pais: Pais;
    departamento: Departamento;
    ciudad:Ciudad
    telefono: number;
    representante:Representante;

}