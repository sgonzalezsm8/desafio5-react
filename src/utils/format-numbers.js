/**
 * Formatea un número a la configuracion regional es-EsS.
 * @param {number} value - El número que se va a formatear
 * @returns {string} - El número formateado
 */

export function formatNumberToES(value){
    if(typeof value !== 'number'){
        throw new Error ('El valor debe ser un número');
    }

    return value.toLocaleString('es-ES');
}