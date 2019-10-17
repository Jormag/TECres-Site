import { Injectable } from '@angular/core';
import { Propiedad, Inmueble, Piso } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  property:Propiedad
  properties:Propiedad[]

  constructor() {
    this.resetProperty();
    this.fillProperties();
  }

  public resetProperty(){
    this.property = {
      ID:null,
      titulo: null,
      descripcion: null,
      owner: null,
      inmueble: null,
      ubicacion: null,
      direccion: null,
      metrosCuadrados: null,
      metrosConstruccion: null,
      habitaciones: null,
      bathrooms: null,
      parqueos: null,
      piso: null,
      niveles: null,
      gimnasio: null,
      piscina: null,
      parqueoVisitas: null,
      precio: null,
      foto1: null,
      foto2: null,
      foto3: null,
      foto4: null,
      foto5: null
    }
  }

  private fillProperties(){
    this.properties = [{
      ID:1,
      titulo: "Casa Bella Vista",
      descripcion: "Es una hermosa casa",
      owner: null,
      inmueble: Inmueble.Casa,
      ubicacion: {ID:1,provincia:"Cartago",canton:"Cartago",distrito:"Oriental"},
      direccion: "LOASASDASDASDASDA",
      metrosCuadrados: 100,
      metrosConstruccion: 40,
      habitaciones: 3,
      bathrooms: 1,
      parqueos: 1,
      piso: Piso.Ceramica,
      niveles: 2,
      gimnasio: true,
      piscina: true,
      parqueoVisitas: false,
      precio: 500000,
      foto1: "a",
      foto2: "b",
      foto3: null,
      foto4: null,
      foto5: null
    }, {
      ID:2,
      titulo: "Apartamentos ACME1PT",
      descripcion: "Apartamentos Fantasticos",
      owner: null,
      inmueble: Inmueble.Apartamento,
      ubicacion: {ID:1,provincia:"Cartago",canton:"Cartago",distrito:"Oriental"},
      direccion: "null",
      metrosCuadrados: 50,
      metrosConstruccion: 50,
      habitaciones: 2,
      bathrooms: 1,
      parqueos: 0,
      piso: Piso.Madera,
      niveles: 1,
      gimnasio: false,
      piscina: false,
      parqueoVisitas: false,
      precio: 120000,
      foto1: "null",
      foto2: "null",
      foto3: null,
      foto4: null,
      foto5: null
    }]
  }
}
