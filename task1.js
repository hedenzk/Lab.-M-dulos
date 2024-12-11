export function costCalculator(cantidadNumber) {
    const comision = 3
    const comisionInteres = cantidadNumber * 0.01
    return cantidadNumber + comision + comisionInteres
  }