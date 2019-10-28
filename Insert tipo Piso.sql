USE [TECres]
GO

INSERT INTO [dbo].[Piso] ([TipoPiso]) VALUES ('Concreto lujado')
INSERT INTO [dbo].[Piso] ([TipoPiso]) VALUES ('Cerámica')
INSERT INTO [dbo].[Piso] ([TipoPiso]) VALUES ('Porcelanato')
INSERT INTO [dbo].[Piso] ([TipoPiso]) VALUES ('Madera')
--INSERT INTO [dbo].[Piso] ([TipoPiso]) VALUES ('TIERRA')
GO


DBCC CHECKIDENT ('Piso')  
DELETE FROM Piso WHERE IDPiso=8  
DBCC CHECKIDENT ('Piso', RESEED, 3)  
 
SELECT * FROM Piso  