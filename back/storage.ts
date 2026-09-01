import { appendFile, mkdir, readFile } from "node:fs/promises";
import type { medicion } from "./tipos.ts";
import { json } from "node:stream/consumers";

const CARPETA = "datos";
const ARCHIVO = "datos/mediciones.jsonl";

let ultima: medicion | null = null;

export async function  guardar(m:medicion) {
    ultima = m;
    try{
        await mkdir (CARPETA, {recursive: true});
        await appendFile (ARCHIVO, JSON.stringify(m) + "\n");
    }catch (e){
        console.error("No se pudo guardar en disco:", e);
    }
}

export function obtenerultima(): medicion | null {
    return ultima;
}

export async function obtenerHistorico(): Promise<medicion[]> {
try {
    const texto = await readFile(ARCHIVO, "utf-8");
    return texto
    .trim()
    .split("\n")                           
    .filter((l) => l.length > 0)
    .map((l) => JSON.parse(l) as medicion);
} catch {
    return [];                              
}
}