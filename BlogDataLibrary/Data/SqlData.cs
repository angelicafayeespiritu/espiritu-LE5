using BlogDataLibrary.Database;

namespace BlogDataLibrary.Data
{
    public class SqlData
    {
        private readonly ISqlDataAccess _db;
        private readonly string _connectionStringName = "Default";

        public SqlData(ISqlDataAccess db)
        {
            _db = db;
        }
    }
}