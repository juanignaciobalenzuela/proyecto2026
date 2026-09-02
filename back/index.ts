import {parsear} from "./parser.ts";
import { crearMock } from "./serial/mock.ts";
import {guardar, obtenerUltima} from "./storage.ts"  ;
import { crearServidor } from "./api/rutas.ts";

const fuente = crearMock();

fuente.on("data", (linea: string) => {
    const medicion = parsear(linea);
    if (medicion === null) return;
    guardar(medicion);
    console.log("última en memoria →", obtenerUltima());
});

crearServidor (3000);
