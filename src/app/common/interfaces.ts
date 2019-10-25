export enum AppState{
    Registro,
    LogIn,
    Perfil,
    Busqueda,
    AgregarPropiedad,
    MostrarPropiedad,
    EditarPropiedad,
    AgregarAnuncio,
    MostrarAnuncio,
    EditarAnuncio,
    AgregarPublico,
    MostrarPublico,
    EditarPublico
}

export enum UserState{
    Logged,
    NotLogged
}

export enum ProfileState{
    Agente,
    Comprador
}

export interface Inmueble{
    ID: number,
    TipoInmueble: string
}

export interface Piso{
    ID: number,
    TipoPiso: string
}

export interface Profile{
    ID:number,
    Perfil:string
}

export interface AdType{
    ID:number,
    Tipo:string,
    Precio:number
}

export interface LoginResponse{
    success: boolean,
    user: Usuario,
    token: string
}

export interface Occupation{
    ID:number,
    name: string
}

export interface Locations{
    ID:number,
    provincia:string,
    canton:string,
    distrito:string
}

export interface Usuario{
    usuario:string,
    password:string,
    nombre:string,
    apellidoPaterno:string,
    apellidoMaterno:string,
    profile:Profile,
    cedula:number,
    //Para clientes
    genero:string,
    fechaNacimiento:string,
    salario:number,
    ocupacion:Occupation,
    ubicacion:Locations,
    email:string,
    nacionalidad:string,
    //Para agentes
    ingreso:string
}

export interface Propiedad{
    ID:number,
    titulo:string,
    descripcion:string,
    owner:Usuario,
    inmueble:Inmueble,
    ubicacion:Locations,
    direccion:string,
    metrosCuadrados: number,
    metrosConstruccion:number,
    habitaciones:number,
    bathrooms:number,
    parqueos:number,
    piso:Piso,
    niveles:number,
    gimnasio:boolean,
    piscina:boolean,
    parqueoVisitas:boolean,
    precio:number,
    foto1:string,
    foto2:string,
    foto3:string,
    foto4:string,
    foto5:string
}

export interface Anuncio{
    propiedad:Propiedad,
    tipo:AdType,
    publico:Publico,
    fechaInicio:string,
    fechaFin:string,
    tarjeta:number,
    comision:number
}

export interface Publico{
    ID:number,
    genero:string,
    edadMinima:number,
    edadMaxima:number,
    ubicacion:Locations,
    ingresos:number
}
