const connection = require('../config/connection')

const findEmail = (email) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE email = ?`, email, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const addUser = (insertDataUser) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users SET ?`, insertDataUser, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const getAllUser = ({ search, sort, order, limit, offset }) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE name LIKE '%${search}%' ORDER BY ${sort} ${order} LIMIT ${limit} OFFSET ${offset}`, (error, result) => {
        // connection.query(`SELECT * FROM users WHERE name LIKE '%${search}%'`, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const count = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT COUNT (*) as total FROM users", (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const updateUsers = (update, id) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE users SET ? WHERE id = ?`, [update, id], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const detailUsers = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM users WHERE id = ?", id, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const deleteUsers = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM users WHERE id = ?", id, (error, result) => {
            if(!error){
                resolve(result)
            }else{
                reject(error)
            }
        })
    })
}

module.exports = {
    addUser,
    findEmail,
    getAllUser,
    count,
    updateUsers,
    detailUsers,
    deleteUsers

}