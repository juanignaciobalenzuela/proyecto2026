// crear datos falsos para laburar sin el circuito hecho

import { EventEmitter } from "node:events";

export function crearMock() {
  const emisor = new EventEmitter();

  setInterval(() => {
    const suelo_hum = (30 + Math.random() * 40).toFixed(1);
    const suelo_temp = (15 + Math.random() * 10).toFixed(1);
    const aire_hum = (50 + Math.random() * 30).toFixed(1);
    const aire_temp = (18 + Math.random() * 12).toFixed(1);
    const luz = (Math.random() * 100).toFixed(1);
    const ph = (5 + Math.random() * 3).toFixed(1);
    const linea = `${suelo_hum},${suelo_temp},${aire_hum},${aire_temp},${luz},${ph}`;
    emisor.emit("data", linea);
  }, 5000);
  return emisor;
}