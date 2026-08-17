CREATE PROCEDURE [dbo].[spPosts_Insert]
    @userId INT,
    @title NVARCHAR(150),
    @body TEXT,
    @dateCreated DATETIME2
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.Posts
    (UserId, Title, Body, Content, DateCreated)
    VALUES
    (@userId, @title, @body, @body, @dateCreated);
END