export interface medidcion {
    timestamp: string;
    aire:{humedad: number, temperatura: number},
    suelo:{humedad: number, temperatura: number},
    luz: number,
    ph: number
}
