export interface Evento{
    id?:string;
    nombreEvento:string;
    tipoEvento:string;
    numeroInscritos:number;
    limiteIncripciones:number;
    fechaEvento:Date;
    lugar:string;
    precio:number;
}
//Subcoleciones
export interface Fechas{
    fecha:Date;
    Lugar:string;
}