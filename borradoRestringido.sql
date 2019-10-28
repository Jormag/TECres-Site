
--BORRADO RESTRINGIDO DE LA TABLA PISO
CREATE TRIGGER trgInsteadofDelete on [dbo].[Piso]
INSTEAD OF DELETE
AS
	DECLARE @IDPISO INT;
	DECLARE @TIPOPISO VARCHAR(20);

	SELECT @IDPISO=d.IDPiso from deleted d;
	SELECT @TIPOPISO=d.TipoPiso from deleted d;


BEGIN 
		if (@IDPISO< 5)
		begin
				RAISERROR ('NO SE PUEDE BORRAR DATOS PREDETERMINADOS', 16, 1);
				ROLLBACK;
		end
		else
		begin
				
				DELETE FROM Piso WHERE IDPiso = @IDPISO;
				COMMIT;
				-- INSERT INTO Piso_CONTROL (IDPiso, TipoPiso,Audit_Action, Audit_Timestamp)
				-- VALUES (@IDPISO,@TIPOPISO, 'Deleted -- Instead Of Delete Trigger.', getdate());
			
				PRINT 'DATO BORRADO'
		end
END
GO
--PRUEBA BORRADO DE PISO
--DELETE
--FROM Piso
--WHERE  IDPiso = 4;

