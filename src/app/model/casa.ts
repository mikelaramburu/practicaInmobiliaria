import {Servicio} from "./servicio";

export class Casa{
    nombre:string;
    precio:number;
    direccion : string;
    habitaciones : number;
    foto:string;
    alquiler:boolean;
    servicio: Servicio[];
    


    constructor(
        nombre:string,
        precio:number, 
      
    ){
 
      
    }
}