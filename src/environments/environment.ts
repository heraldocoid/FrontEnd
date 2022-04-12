// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  urlListTipoEmpresa : "http://localhost:8080/tipoempresa/listar",
  urlCreateTipoEmpresa : "http://localhost:8080/tipoempresa/crear",
  urlListPais : "http://localhost:8080/pais/listar",
  urlCreatePais : "http://localhost:8080/pais/crear",
  urlListDepartamento : "http://localhost:8080/departamento/listar",
  urlCreateDepartamento : "http://localhost:8080/departamento/crear",
  urlListCiudad : "http://localhost:8080/ciudad/listar",
  urlCreateCiudad : "http://localhost:8080/ciudad/crear",
  urlListRepresentante : "http://localhost:8080/representante/listar",
  urlCreateRepresentante : "http://localhost:8080/representante/",
  urlListEmpresa : "http://localhost:8080/empresa/listar",
  urlCreateEmpresa : "http://localhost:8080/empresa/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
