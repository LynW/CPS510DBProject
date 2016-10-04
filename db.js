var oracledb = require('oracledb');


oracledb.getConnection({
  user          : process.env.dbUsername,
  password      : process.env.dbPassword,
  connectString : "(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=tcp)(HOST="+process.env.dbServer+")(PORT="+ process.env.dbPort+")))(CONNECT_DATA=(SID="+process.env.SID+")))"
},
function(err, connection)
{
  if (err) { console.error(err.message); return; }

  console.log('Successfully Connected!');
  module.exports = connection;
});
