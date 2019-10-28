USE [TECres]
GO

INSERT INTO [dbo].[Perfiles] ([Perfil]) VALUES ('Administrador')

INSERT INTO [dbo].[Perfiles] ([Perfil])  VALUES ('Agente')

 INSERT INTO [dbo].[Perfiles] ([Perfil]) VALUES('Comprador')
GO

DBCC CHECKIDENT ('Perfiles')  
DELETE FROM Perfiles WHERE IDPerfil=4  
DBCC CHECKIDENT ('Perfiles', RESEED, 2)  
 
SELECT * FROM Perfiles  


