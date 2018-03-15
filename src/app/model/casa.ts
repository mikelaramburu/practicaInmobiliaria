import { Servicio } from "./servicio";

export class Casa {

    nombre: string;
    precio: number;
    direccion: string;
    habitaciones: number;
    foto: string;
    alquiler: boolean;
    servicios: Servicio[];



    constructor() {
        this.nombre = 'casa';
        this.precio = 2000;
        this.alquiler = false;
        this.habitaciones = 3;
        this.foto = 'https://openclipart.org/image/2400px/svg_to_png/242151/House-Icon-Silhouette.png';
        this.direccion = 'Santutxu';
        this.servicios = [];

    }
}