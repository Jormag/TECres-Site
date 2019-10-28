


CREATE TRIGGER trgInsteadOfDeleteUBICACION ON  [dbo].[Ubicacion]
INSTEAD OF DELETE
AS

DECLARE @IDUBICACION INT;
DECLARE @PROVINCIA VARCHAR(20);
DECLARE @CANTON VARCHAR(20);
DECLARE @DISTRITO VARCHAR(50);

SELECT @IDUBICACION = D.IDUbicacion FROM deleted D;
SELECT @PROVINCIA = D.Provincia FROM deleted D;
SELECT @CANTON = D.Canton FROM deleted D;
SELECT @DISTRITO = D.Distrito FROM deleted D;


BEGIN 
		if (@IDUBICACION < 484)
		begin
				RAISERROR('NO SE PUEDE BORRAR DATOS PREDETERMINADOS',16,1);
				ROLLBACK;
		end
		else
		begin
				delete from Ubicacion where IDUbicacion = @IDUBICACION;
				COMMIT;
				PRINT'DATO BORRADO'

		end
END
GO


