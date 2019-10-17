import { Injectable } from '@angular/core';
import { Anuncio, AdType, Inmueble, Piso } from '../common/interfaces';

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
      },
      tipo: AdType.Platino,
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
      },
      tipo: AdType.Oro,
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
