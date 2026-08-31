import type { medidcion } from "./tipos.ts";
import { crearMock } from "./serial/mock.ts";

const emisor = crearMock();

emisor.on("data", (linea: string) =>{
    console.log(linea);
});

