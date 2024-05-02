CREATE PROCEDURE GetUserDetails
    @username NVARCHAR(50),
    @password NVARCHAR(50)
AS
BEGIN
    SELECT _UserName, _Name, _Country, _PhoneNumber, _Email, _IsAdmin
    FROM UserData
    WHERE _UserName = @username AND _Password = @password;
END