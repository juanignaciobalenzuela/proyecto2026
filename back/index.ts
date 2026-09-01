import {parsear} from "./parser.ts";
import { crearMock } from "./serial/mock.ts";
import {guardar, obtenerultima} from "./storage.ts"  ;

const fuente = crearMock();

fuente.on("data", (linea: string) => {
    const medicion = parsear(linea);
    if (medicion === null) return;
    guardar(medicion);
    console.log("última en memoria →", obtenerultima());
});
