export interface medicion {
    timestamp: string; 
    aire:{humedad: number, temperatura: number},
    suelo:{humedad: number, temperatura: number},
    luz: number,
    ph: number
};

export interface usuario {
    nombre: string;
    contrasena: string;
};
