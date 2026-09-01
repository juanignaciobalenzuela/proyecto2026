import type { medicion } from "./tipos.ts";

export function parsear (linea: string): medicion | null {
    const partes = linea.trim().split(",");
    if (partes.length !== 6) {return null}

    const i = partes.map(Number);
if (i.some(Number.isNaN)) return null;            

const [suelo_hum, suelo_temp, aire_hum, aire_temp, luz, ph] = i;

if (
    suelo_hum === undefined || suelo_temp === undefined ||
    aire_hum === undefined  || aire_temp === undefined  ||
    luz === undefined       || ph === undefined
) return null;

return {
    timestamp: new Date().toISOString(),
    suelo: { humedad: suelo_hum, temperatura: suelo_temp },
    aire:  { humedad: aire_hum,  temperatura: aire_temp },
    luz,
    ph,
};
}