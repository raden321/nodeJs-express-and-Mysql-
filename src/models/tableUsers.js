const dbPool = require('../config/database')

const tableUsers = () => {
    const SQLQuery = "SELECT * FROM users";
    
    return dbPool.execute(SQLQuery);
};
const createNewUser = (body) => {
    SQLQuery = `INSERT INTO users (name, email, addres) VALUES ('${body.name}', '${body.email}', '${body.addres}')`;

    return dbPool.execute(SQLQuery);
}
const updateUsers = (body, id) => {
    const SQLQuery = `UPDATE users SET name='${body.name}', email='${body.email}', addres='${body.addres}' WHERE id=${id}`;

    dbPool.execute(SQLQuery);
}
const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id=${id}`;

    dbPool.execute(SQLQuery)
}
module.exports = {
    tableUsers,
    createNewUser,
    updateUsers,
    deleteUser
};