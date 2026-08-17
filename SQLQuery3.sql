


CREATE PROCEDURE dbo.spPosts_Details
    @Id INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        p.Id,
        p.Title,
        p.Body,
        p.DateCreated,
        p.UserId,
        u.UserName,
        u.FirstName,
        u.LastName
    FROM dbo.Posts p
    INNER JOIN dbo.Users u ON p.UserId = u.Id
    WHERE p.Id = @Id;
END