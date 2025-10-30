const userModel = require("../model/User");

const bcryptjs = require('bcryptjs')

//by marking the function as sync javascript knows that some parts of this function will need extra time to complete


const Register = async (req, res) => {
    //data which we getting from user in req.body
    const body = req.body;


    try {
        console.log(body)
        // check if userName already exists
        // await is used inside an async function and tells javascript to wait for a task to finish before moving on to the next line.
        const userNameExists = await userModel.findOne({ userName: body.userName })
        if (userNameExists) {
            return res.status(404).json({ message: 'userName already exists' })
        }

        // hasting the password
        const hashedPassword = await bcryptjs.hash(body.password, 10)

        //saving the userData in database
        const saveData = await userModel.create({
            userName: body.userName,
            email: body.email,
            password: hashedPassword
        })
        // sending success message to frontend(react)
        res.status(200).json({ message: "registered successfully", data: saveData })
    }
    catch (error) {
        console.log(error) 
        //sending error message to frontend(react)
        res.status(500).json({ message: 'server error' })
    }

}


const Login = async(req, res) => {
    const body = req.body;

    try {
        //chechk if username exists
        console.log(body)
        const findUser = await userModel.findOne({ userName: body.userName })
        //if it doesn't exists, sending response message to client
        if (!findUser) {
            return res.status(404).json({ message: 'userName does not exist' })
        }
        //compare enetered password with stored hashed password
        const passwordMatch = await bcryptjs.compare(body.password, findUser.password)

        //if it doesn't maatch - sending response message to client
        if (!passwordMatch) {
            return res.status(404).json({ message: "Invalid password" })
        }

        res.status(200).json({ message: "Login successfull", data: findUser })
    } catch (error) {
        res.status(500).json({ message: "server Error" })
    }

}

module.exports = {
    Register,
    Login
}