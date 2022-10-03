const usersModel = require('../model/user')
const common = require('../common/common')
const createError = require('http-errors')

const addUser = async (req, res, next) => {
    try {
        const { name, email, mobile, } = req.body
        const date = new Date()
        const year = date.getFullYear() - 2000
        const month = date.getMonth() + 1
        const random = Math.floor(Math.random() * 9999)
        const idUser = "" + year + month + random
        // console.log(idUser,typeof(idUser))
        const userEmail = await usersModel.findEmail(email)
        if (userEmail.length > 0) {
            return next(createError(403, 'Email already in database'))
        }
        const insertDataUser = {
            id: idUser,
            name,
            email,
            mobile,
        }
        const resultAddUser = await usersModel.addUser(insertDataUser)
        common.response(res, insertDataUser, 200, `Success add user name : ${name}`)
    } catch (err) {
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            })
    }
}

const getAllUser = async (req, res) => {
    try {
        const search = req.query.name
        const sort = req.query.sort || 'name'
        const order = req.query.order || 'asc'
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 9
        const offset = (page - 1) * limit
        const result = await usersModel.getAllUser({
            search,
            sort,
            order,
            offset,
            limit,
        })
        const [total] = await usersModel.count()
        common.response(res, result, 200, null, {
            currentPage: page,
            limitData: limit,
            totalUsers: total.total,
            totalPage: Math.ceil(total.total/limit)
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateUsers = async (req, res, next) => {
    try {
        const id = req.params.id
        const { name, email, mobile, adress, birthdate } = req.body
        const update = {
            name,
            email,
            mobile,
            adress,
            birthdate,
            updated_at: new Date()
        }
        const result = await usersModel.updateUsers(update, id)
        res.status(200)
        common.response(res, update, 200, `Success Update User : ${name}`)
    } catch (error) {
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            })
    }
}

const detailUsers = async (req, res, next) => {
    try {
        const id = req.params.id
        const [result] = await usersModel.detailUsers(id)
        common.response(res, result, 200, `Detail User ${id}`)
    } catch (error) {
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            })
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await usersModel.deleteUsers(id)
        // console.log(id);
        res.status(200)
        common.response(res, result, 200, `User id : ${id}, Deleted !`)
    } catch (error) {
        res.status(500),
            next({
                status: 500,
                message: 'Internal Server Error'
            })
    }
}

module.exports = {
    addUser,
    getAllUser,
    updateUsers,
    detailUsers,
    deleteUsers,


}