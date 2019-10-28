USE [TECres]
GO

INSERT INTO [dbo].[Inmueble]([TipoInmueble]) VALUES ('Lote')
INSERT INTO [dbo].[Inmueble]([TipoInmueble]) VALUES ('Casa')
INSERT INTO [dbo].[Inmueble]([TipoInmueble]) VALUES ('Apartamento')
GO

DBCC CHECKIDENT ('Inmueble')  
DELETE FROM Inmueble WHERE IDInmueble=5  
DBCC CHECKIDENT ('Inmueble', RESEED, 2)  
 
SELECT * FROM Inmueble  


