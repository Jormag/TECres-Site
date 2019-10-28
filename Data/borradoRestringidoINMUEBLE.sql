USE [TECres]
GO

CREATE TRIGGER trgInsteadofDeleteINMUEBLE ON [dbo].[Inmueble]
INSTEAD OF DELETE
AS

DECLARE @IDINMUEBLE INT;
DECLARE @TIPOINMUEBLE VARCHAR(20);

SELECT @IDINMUEBLE = D.IDInmueble from deleted D;
SELECT @TIPOINMUEBLE = D.TipoInmueble from deleted D;

BEGIN
		if (@IDINMUEBLE < 4)

		begin 
				RAISERROR('NO SE PUEDE BORRAR DATOS PREDETERMINADOS', 16, 1);
				ROLLBACK;

		end
		else
		begin
				delete from Inmueble where IDInmueble= @IDINMUEBLE;
				COMMIT;
				PRINT 'DATO BORRADO'

		end

END

GO


