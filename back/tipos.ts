interface medidcion {
    aire:{humedad: number, temperatura: number},
    suelo:{humedad: number, temperatura: number},
    luz: number,
    ph: number
}


const medidcion: medidcion = {
    aire: {humedad: 0, temperatura: 0},
    suelo: {humedad: 0, temperatura: 0},
    luz: 0,
    ph: 0
}

export { medidcion };
