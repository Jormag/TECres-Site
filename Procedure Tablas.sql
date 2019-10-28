
-- SP DE INSERT DE LA TABLA INMUEBLE
CREATE PROCEDURE SP_Insert_Inmueble
(
@TipoInmueble VARCHAR (20)
)
as
begin
INSERT INTO Inmueble(TipoInmueble)
values (@TipoInmueble)
end


-- SP DE INSERT DE LA TABLA PISO
CREATE PROCEDURE SP_Insert_Piso
(
@TipoPiso VARCHAR (20)
)
as
begin
INSERT INTO Piso(TipoPiso)
values (@TipoPiso)
end

-- SP DE INSERT DE LA TABLA UBICACI[ON
CREATE PROCEDURE SP_Insert_Ubicacion
(
@Provincia VARCHAR (20),
@Canton VARCHAR (20),
@Distrito VARCHAR (50)
)
as
begin
INSERT INTO Ubicacion(Provincia, Canton, Distrito)
values (@Provincia, @Canton, @Distrito)
end


-- SP DE INSERT DE LA TABLA CATEGORIA ANUNCIO
CREATE PROCEDURE SP_Insert_CategoriaAnuncio
(
@NombreAnuncio VARCHAR (10),
@TipoAnuncioA INT,
@DescripcionAnuncio VARCHAR (100)
)
as
begin
INSERT INTO CategoriaAnuncio(NombreAnuncio, TipoAnuncioA,DescripcionAnuncio)
values (@NombreAnuncio, @TipoAnuncioA,@DescripcionAnuncio)
end


-- SP DE INSERT DE LA TABLA PUBLICO META
CREATE PROCEDURE SP_Insert_PublicoMeta
(
@Genero VARCHAR (20),
@EdadMinima INT,
@EdadMaxima INT,
@UbicacionA VARCHAR (40),
@Ingresos INT
)
as
begin
INSERT INTO PublicoMeta(Genero, EdadMinima, EdadMaxima, UbicacionA, Ingresos)
values (@Genero, @EdadMinima, @EdadMaxima, @UbicacionA, @Ingresos)
end


-- -- SP DE INSERT DE LA TABLA ANUNCIO
CREATE PROCEDURE SP_Insert_Anuncio
(
@Propiedad INT,
@TipoAnuncioA INT,
@PublicoMetaA INT,
@FechaInicio VARCHAR (20),
@FechaFin VARCHAR (20),
@TarjetaCredito INT,
@ComisionA INT
)
as
begin
INSERT INTO Anuncio (Propiedad,TipoAnuncioA, PublicoMetaA, FechaInicio, FechaFin, TarjetaCredito, ComisionA)
values (@Propiedad, @TipoAnuncioA, @PublicoMetaA, @FechaInicio, @FechaFin, @TarjetaCredito, @ComisionA)
end

-- SP DE INSERT DE LA TABLA PERFILES
CREATE PROCEDURE SP_Insert_Perfiles
(
@Perfil VARCHAR (30)
)
as
begin
INSERT INTO Perfiles (Perfil)
values (@Perfil)
end

-- SP DE INSERT DE LA TABLA OCUPACIONES
CREATE PROCEDURE SP_Insert_Ocupaciones
(
@Ocupacion VARCHAR (20)
)
as
begin
INSERT INTO Ocupaciones(Ocupacion)
values (@Ocupacion)
end


-- SP DE INSERT DE LA TABLA TIPO FACTURA
CREATE PROCEDURE SP_Insert_TipoFactura
(
@Tipo VARCHAR (20)
)
as
begin
INSERT INTO TipoFactura(Tipo)
values (@Tipo)
end


-- SP DE INSERT DE LA TABLA TIPO ANUNCIO
CREATE PROCEDURE SP_Insert_TipoAnuncio
(
@Tipo VARCHAR (20),
@Precio INT
)
as
begin
INSERT INTO TipoAnuncio(Tipo, Precio)
values (@Tipo, @Precio)
end

-- SP DE INSERT DE LA TABLA COMISION
CREATE PROCEDURE SP_Insert_Comision
(
@Monto INT
)
as
begin
INSERT INTO Comision(Monto)
values (@Monto)
end

-- SP DE INSERT DE LA TABLA FACTURA
CREATE PROCEDURE SP_Insert_Factura
(
@TipoFacturaA INT ,
@Cliente INT ,
@IDAnuncio INT ,
@MontoTotal INT 
)
as
begin
INSERT INTO Factura( TipoFacturaA, Cliente, IDAnuncio, MontoTotal)
values (@TipoFacturaA,@Cliente, @IDAnuncio, @MontoTotal)
end

-- SP DE INSERT DE LA TABLA Usuario
CREATE PROCEDURE SP_Insert_Usuario
(
@Nombre VARCHAR (20) ,
@Apellido1 VARCHAR (20) ,
@Apellido2 VARCHAR(20) ,
@FecNaci DATE ,
@Nacionalidad VARCHAR (30) ,
@UbicacionUsuario INT ,
@Ingresos INT ,
@Ocupacion INT ,
@Correo VARCHAR (30) ,
@Perfil INT ,
@Usuario  VARCHAR (20) ,
@Contrasena VARCHAR (20) 
)
as
begin
INSERT INTO Usuario(Nombre, Apellido1, Apellido2, FecNaci, Nacionalidad, UbicacionUsuario, Ingresos,Ocupacion, Correo,Perfil, Usuario, Contrasena)
values (@Nombre, @Apellido1, @Apellido2, @FecNaci, @Nacionalidad, @UbicacionUsuario, @Ingresos, @Ocupacion, @Correo, @Perfil, @Usuario, @Contrasena)
end



-- SP DE INSERT DE LA TABLA PROPIEDAD
CREATE PROCEDURE SP_Insert_Propiedad
(
@Titulo VARCHAR (200),
@Descripcion VARCHAR (300),
@TipoInmueble INT ,
@UbicacionPropiedad INT ,
@AreaTerreno INT,
@AreaConstruccion INT,
@Habitaciones INT,
@Baños INT,
@TipoPisoProp INT,
@Parqueos INT,
@Gimnasio VARCHAR (4),
@Piscina VARCHAR(4),
@ParqueoVisitas VARCHAR (4),
@Precio INT ,
@Dueño INT,
@Foto1 IMAGE,
@Foto2 IMAGE,
@Foto3 IMAGE,
@Foto4 IMAGE,
@Foto5 IMAGE
)
as
begin
INSERT INTO Propiedad (Titulo, Descripcion, TipoInmueble, UbicacionPropiedad, AreaTerreno, AreaConstruccion, Habitaciones, Baños, TipoPisoProp, Parqueos, Gimnasio, Piscina, ParqueoVisitas, Precio, Dueño, Foto1,Foto2, Foto3,  Foto4, Foto5 )
values (@Titulo, @Descripcion, @TipoInmueble, @UbicacionPropiedad, @AreaTerreno, @AreaConstruccion, @Habitaciones, @Baños,@TipoPisoProp, @Parqueos, @Gimnasio,@Piscina, @ParqueoVisitas, @Precio, @Dueño, @Foto1, @Foto2, @Foto3,  @Foto4, @Foto5)
end


-- SP DE INSERT DE LA TABLA MENSAJE
CREATE PROCEDURE SP_Insert_Mensaje
(
@AnuncioLigado INT,
@Remitente INT,
@Destinatario INT,
@Mensaje VARCHAR (400)
)
as
begin
INSERT INTO Mensaje (AnuncioLigado, Remitente, Destinatario, Mensaje)
values (@AnuncioLigado, @Remitente, @Destinatario, @Mensaje)
end


-- SP DE INSERT DE LA TABLA ADMINISTRADORES
CREATE PROCEDURE SP_Insert_Administradores
(
@IDUsuario INT ,
@FechaIngreso VARCHAR (20)
)
as
begin
INSERT INTO Administradores(IDUsuario, FechaIngreso)
values (@IDUsuario, @FechaIngreso)
end


-- SP DE GET DE LA TABLA TIPO INMUEBLE
CREATE PROCEDURE getTipoInmueble
AS
SELECT * FROM Inmueble

-- SP DE GET DE LA TABLA Administradores
CREATE PROCEDURE getAdministradores
AS
SELECT * FROM Administradores

CREATE PROCEDURE getAnuncio
AS
SELECT * FROM Anuncio

CREATE PROCEDURE getCategoriaAnuncio
AS
SELECT * FROM CategoriaAnuncio

CREATE PROCEDURE getComision
AS
SELECT * FROM Comision

CREATE PROCEDURE getFactura
AS
SELECT * FROM Factura


CREATE PROCEDURE getInmueble
AS
SELECT * FROM Inmueble

CREATE PROCEDURE getOcupaciones
AS
SELECT * FROM Ocupaciones

CREATE PROCEDURE getPerfiles
AS
SELECT * FROM Perfiles

CREATE PROCEDURE getPiso
AS
SELECT * FROM Piso

CREATE PROCEDURE getPublicoMeta
AS
SELECT * FROM PublicoMeta

CREATE PROCEDURE getTipoAnuncio
AS
SELECT * FROM TipoAnuncio


CREATE PROCEDURE getTipoFactura
AS
SELECT * FROM TipoFactura

CREATE PROCEDURE getUbicacion
AS
SELECT * FROM Ubicacion


CREATE PROCEDURE getUsuarios
AS
SELECT * FROM Usuario



