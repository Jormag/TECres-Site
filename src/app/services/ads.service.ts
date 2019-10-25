import { Injectable } from '@angular/core';
import { Anuncio } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  public ad: Anuncio
  public ads: Anuncio[]

  constructor() {
    this.resetAd();
    this.fillAds();
  }
  public resetAd() {
    this.ad = {
      propiedad: null,
      tipo: null,
      publico: null,
      fechaInicio: null,
      fechaFin: null,
      tarjeta: null,
      comision: null
    }
  }

  private fillAds() {
    this.ads = [{
      propiedad: {
        ID:1,
        titulo: "Casa Bella Vista",
        descripcion: "Es una hermosa casa",
        owner: null,
        inmueble: {ID:2,TipoInmueble:"Casa"},
        ubicacion: {ID:1,provincia:"Cartago",canton:"Cartago",distrito:"Oriental"},
        direccion: "LOASASDASDASDASDA",
        metrosCuadrados: 100,
        metrosConstruccion: 40,
        habitaciones: 3,
        bathrooms: 1,
        parqueos: 1,
        piso: {ID:2,TipoPiso:"Ceramica"},
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
      },
      tipo: {ID:4,Tipo:"Platino",Precio:4000},
      publico: {
        ID: 1,
        genero: "Masculino",
        edadMinima: 18,
        edadMaxima: 30,
        ubicacion: {
          ID: 1,
          provincia: "Alajuela",
          canton: "San Carlos",
          distrito: "Quesada"
        },
        ingresos: 100000
      },
      fechaInicio: "2019-09-16",
      fechaFin: "2019-12-16",
      tarjeta: 202220222033,
      comision: 10
    }, {
      propiedad: {
        ID:2,
        titulo: "Apartamentos Carlos",
        descripcion: "Apartamentos Fantasticos",
        owner: null,
        inmueble: {ID:3,TipoInmueble:"Apartamento"},
        ubicacion: {ID:1,provincia:"Cartago",canton:"Cartago",distrito:"Oriental"},
        direccion: "null",
        metrosCuadrados: 50,
        metrosConstruccion: 50,
        habitaciones: 2,
        bathrooms: 1,
        parqueos: 0,
        piso: {ID:4,TipoPiso:"Madera"},
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
      },
      tipo: {ID:3,Tipo:"Oro",Precio:3000},
      publico: {
        ID: 2,
        genero: "Femenino",
        edadMinima: 30,
        edadMaxima: 60,
        ubicacion: {
          ID: 1,
          provincia: "Alajuela",
          canton: "San Carlos",
          distrito: "Quesada"
        },
        ingresos: 200000
      },
      fechaInicio: "2019-09-16",
      fechaFin: "2019-12-16",
      tarjeta: 202220222033,
      comision: 10
    }];
  }
}
