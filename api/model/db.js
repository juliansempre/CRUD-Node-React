import mysql from 'mysql';

export const db = mysql.createConnection({
    host: "85.10.205.173",
    user: "rootportfolio1",
    password: "toor123@",
    port: 3306,
    database: "bancojulian1"
});

//Local
// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "crud"
// });
   
