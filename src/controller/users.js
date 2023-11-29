const UsersModel = require('../models/tableUsers')

//CREATE NEW USERS
const createNewUsers = async (req, res) => {
    const {body} = req;
    if(!body.name || !body.email || !body.addres){
        res.status(400).json({
            message: "ada data yang belum anda isi",
            data: null
        })
    }
    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: "create new user succses",
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            errorstatus: error,
        })
    }
};
// GET ALL USERS
const getAllusers = async (req, res) => {
    try {
        const [data] = await UsersModel.tableUsers();

        res.json({
            message: 'GET all users succes',
            data : data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            errorstatus: error,
        })
    }

}; 
// UPDATE ID USER
const updateAllUsers = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUsers(body, id);
        res.status(201).json({
            message: "UPDATE users succes",
            data: {
                id: id,
                ...body,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            errorstatus: error,
        })
        
    }

}
// DELATE user
const deleteUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.deleteUser(id, body);
        res.json({
            message: "DELETE user succes",
            data: {
                id: id,
                ...body
            }
           
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            errorstatus: error,
        })
        
    }
 
}



module.exports = {
    getAllusers,
    createNewUsers,
    updateAllUsers,
    deleteUser,
};