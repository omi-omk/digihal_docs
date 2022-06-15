module.exports = {
  host:"",
  user:"",
  password:"",
  dbName:"",
    dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
//Enter your db login credentials
