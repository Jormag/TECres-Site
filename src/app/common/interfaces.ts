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

export enum Inmueble{
    Lote = 1,
    Casa = 2,
    Apartamento = 3
}
export const Inmueble2Label: Record<Inmueble, string> = {
    [Inmueble.Lote]: "Lote",
    [Inmueble.Casa]: "Casa",
    [Inmueble.Apartamento]:"Apartamento"
}

export enum Piso{
    Concreto = 1,
    Ceramica = 2,
    Porcelanato = 3,
    Madera = 4
}
export const Piso2Label: Record<Piso, string> = {
    [Piso.Concreto]: "Concreto",
    [Piso.Ceramica]: "Ceramica",
    [Piso.Porcelanato]:"Porcelanato",
    [Piso.Madera]:"Madera"
}

export enum Profile{
    Administrador = 1,
    Agente = 2,
    Comprador = 3
}
export const Profile2Label: Record<Profile, string> = {
    [Profile.Administrador]: "Administrador",
    [Profile.Agente]: "Agente",
    [Profile.Comprador]:"Comprador"
}

export enum AdType{
    Normal = 1,
    Destacado = 2,
    Oro = 3,
    Platino =4
}
export const AdType2Label: Record<AdType, string> = {
    [AdType.Normal]: "Normal",
    [AdType.Destacado]: "Destacado",
    [AdType.Oro]:"Oro",
    [AdType.Platino]:"Platino"
}

export enum UserState{
    Logged,
    NotLogged
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
    ingreso:Date
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
