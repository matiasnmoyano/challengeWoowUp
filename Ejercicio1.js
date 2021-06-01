/* Estás subiendo una escalera que tiene n escalones. En cada paso podés elegir 
subir 1 escalón o subir 2.

Programar una solución que, dada una escalera de n escalones, encuentre de cuántas
formas distintas se puede subir para llegar al final.

Ejemplo:

Para una escalera de 2 escalones, el resultado es 2 porque las posibilidades son:

Subir 1 escalón + subir 1 escalón
Subir 2 escalones
Para una escalera de 3 escalones, el resultado es 3, porque las posibilidades son:
Subir 1 escalón + subir 1 escalón + subir 1 escalón
Subir 1 escalón + subir 2 escalones
Subir 2 escalones + subir 1 escalón */

let result = []
function escalera(n) {
    if(n === 1){
        result.push('1') 
        return result
    }
    else if(n === 2){
        result.push('2')
        result.push('1')
        return result
    }
    return escalera(n-1) + escalera(n-2)
      
}
escalera(4); // poner el numero que desee para probar
console.log('Hay ',result.length, ' formas de subir las escaleras')

