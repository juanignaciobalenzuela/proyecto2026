<<<<<<< HEAD
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
=======
import type { medidcion } from "./tipos.ts";
import { crearMock } from "./serial/mock.ts";

const emisor = crearMock();

emisor.on("data", (linea: string) =>{
    console.log(linea);
});

>>>>>>> 8d09ffcdcce832e61ab5914e82753eecf364f076
