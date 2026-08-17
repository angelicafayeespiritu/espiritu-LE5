USE BlogDB;
GO

ALTER PROCEDURE dbo.spPosts_Insert
    @Title NVARCHAR(100),
    @Body NVARCHAR(MAX),
    @UserId INT
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.Posts
    (Title, Body, Content, UserId, DateCreated)
    VALUES
    (@Title, @Body, @Body, @UserId, GETDATE());
END
GO