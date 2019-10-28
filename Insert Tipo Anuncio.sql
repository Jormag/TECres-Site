USE [TECres]
GO

INSERT INTO [dbo].[TipoAnuncio] ([Tipo] ,[Precio])
     VALUES ('Normal' ,1000)
INSERT INTO [dbo].[TipoAnuncio] ([Tipo] ,[Precio])
     VALUES ('Destacado' ,2000)
INSERT INTO [dbo].[TipoAnuncio] ([Tipo] ,[Precio])
     VALUES ('Oro' ,3000)
INSERT INTO [dbo].[TipoAnuncio] ([Tipo] ,[Precio])
     VALUES ('Platino' ,4000)
GO


DBCC CHECKIDENT ('TipoAnuncio')  
DELETE FROM TipoAnuncio WHERE IDTipoAnuncio=5  
DBCC CHECKIDENT ('TipoAnuncio', RESEED, 3)  
 
SELECT * FROM TipoAnuncio  


