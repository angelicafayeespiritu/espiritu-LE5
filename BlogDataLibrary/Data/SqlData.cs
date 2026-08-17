using BlogDataLibrary.Database;
using BlogDataLibrary.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogDataLibrary.Data
{
    public class SqlData
    {
        private readonly ISqlDataAccess _db;
        private readonly string _connectionStringName = "SqlDb";

        public SqlData(ISqlDataAccess db)
        {
            _db = db;
        }

        // LOGIN
        public async Task<UserModel> Authenticate(string username, string password)
        {
            var result = await _db.LoadData<UserModel, dynamic>(
                "dbo.spUsers_Authenticate",
                new
                {
                    username,
                    password
                },
                _connectionStringName);

            return result.FirstOrDefault();
        }

        // REGISTER
        public void Register(string username, string firstName, string lastName, string password)
        {
            _db.SaveData(
                "dbo.spUsers_Register",
                new
                {
                    userName = username,
                    firstName,
                    lastName,
                    password
                },
                _connectionStringName).Wait();
        }

        // ADD POST
        public void AddPost(PostModel post)
        {
            _db.SaveData(
                "spPosts_Insert",
                new
                {
                    userId = post.UserId,
                    title = post.Title,
                    body = post.Body,
                    dateCreated = post.DateCreated
                },
                _connectionStringName).Wait();
        }

        // LIST POSTS
        public List<PostModel> ListPosts()
        {
            return _db.LoadData<PostModel, dynamic>(
                "dbo.spPosts_List",
                new { },
                _connectionStringName).Result;
        }

        // SHOW POST DETAILS
        public PostModel ShowPostDetails(int id)
        {
            return _db.LoadData<PostModel, dynamic>(
                "dbo.spPosts_Details",
                new { Id = id },
                _connectionStringName).Result.FirstOrDefault();
        }
    }
}