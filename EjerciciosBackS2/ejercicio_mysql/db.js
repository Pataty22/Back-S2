const mysql = require("mysql2/promise");

const connectConfig =  {
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20"
};


async function findAll(tableData){
    const connection = await mysql.createConnection(connectConfig);
    const [results] = await connection.execute(`SELECT * FROM ${tableData}`);

    connection.end();
    return results;
};

async function modify(tableData, id){
    const connection = await mysql.createConnection(connectConfig);
    const [results] = await connection.execute(`SELECT * FROM ${tableData} WHERE id = ${id}`);

    connection.end();
    return results;
};

async function createU(tableData, values){
    const connection = await mysql.createConnection(connectConfig);
    const [results] = await connection.execute(`INSERT INTO ${tableData} (firstname, lastname, age) VALUES( ${values})`)
    connection.end();
    return results;
};

async function modU1(tableData, name, last, age,id){
    const connection = await mysql.createConnection(connectConfig);
    await connection.execute(`UPDATE ${tableData} SET firstname = '${name}', lastname = '${last}' , age = ${age} WHERE id = ${id}`)

    connection.end();

};

async function deletU(tableData, id){
    const connection = await mysql.createConnection(connectConfig);
    await connection.execute(`DELETE FROM ${tableData} WHERE id = ${id}`);

    connection.end();

}


module.exports = {
    findAll,
    modify,
    createU,
    modU1,
    deletU
}

