
export const validatePrice =  value =>
    value <= 0 ? "El precio debe ser un valor mayor a cero" : "" ;

export const validateStock =  value =>
    value <= 0 ? "El stock debe ser un valor mayor a cero" : "" ;

export const validateLong = value =>
    value.length <= 10 ? "Debe tener un valor mayor a 10 caracteres" : ""

export const validateShort = value =>
    value.length <= 30 ? "Debe tener un valor mayor a 30 caracteres" : "";

export const validateAgeFrom = value =>
    value <= 0 ? "Edad desde debe ser un valor mayor a 0" : "";

export const validateAgeTo = value =>
    value <= 0  ? "Edad hasta debe ser un valor mayor a 0" : ""; 

