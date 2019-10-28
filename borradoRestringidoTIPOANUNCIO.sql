



CREATE TRIGGER trgInsteadOfDeleteTipoAnuncio ON  [dbo].[TipoAnuncio]
INSTEAD OF DELETE
AS
DECLARE @IDTIPOANUNCIO INT;
DECLARE @TIPO VARCHAR(20);
DECLARE @PRECIO INT;

SELECT @IDTIPOANUNCIO=D.IDTipoAnuncio FROM deleted D;
SELECT @TIPO = D.Tipo FROM deleted D;
SELECT @PRECIO=D.Precio FROM deleted D;

BEGIN
	IF (@IDTIPOANUNCIO < 5)
	BEGIN
			RAISERROR('NO SE PUEDE BORRAR, DATO PREDETERMINADO', 16, 1);
			ROLLBACK;
	END
	ELSE
	BEGIN
			DELETE FROM TipoAnuncio WHERE IDTipoAnuncio=@IDTIPOANUNCIO;
			COMMIT;
			PRINT 'DATO BORRADO'
	END


END



GO




