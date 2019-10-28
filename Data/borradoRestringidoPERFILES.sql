

CREATE TRIGGER tgInsteadOfDeletePERFILES ON [dbo].[Perfiles]
INSTEAD OF DELETE
AS

DECLARE @IDPERFIL INT;
DECLARE @PERFIL VARCHAR(30);

SELECT @IDPERFIL = D.IDPerfil FROM deleted D;
SELECT @PERFIL = D.Perfil FROM deleted D;

BEGIN
		if (@IDPERFIL < 4)
		begin
				RAISERROR ('NO SE PUEDE ELIMINAR DATOS PREDETERMINADOS', 16, 1);
				ROLLBACK;

		end
		else
		begin
				delete from Perfiles where IDPerfil = @IDPERFIL;
				COMMIT;
				PRINT 'DATO BORRADO'
		end


END

GO


