const userSchema = require("../models/userSchema")

//post

exports.addUser= async (req,res)=>{
    try {
        const newUser = new userSchema(req.body);
        await newUser.save();
        res.status(200).send({msg:"user added successfully",newUser})
    } catch (error) {
        res.status(400).send('could not add')
    }
}

//get
exports.getUsers = async (req,res) =>{
    try {
        const users = await userSchema.find();
        res.status(200).send({msg:"list of users",users})
    } catch (error) {
      res.status(400).send('could not get')
    }
}

//delete
exports.deleteUser = async (req,res)=>{
    try {
        const deleted = await userSchema.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"user deleted",deleted})
    } catch (error) {
        res.status(400).send('could not delete')
    }
}

//update
exports.updateUser = async (req,res)=>{
    try {
        const updated = await userSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
            res.status(200).send({msg:"user updated",updated})
    } catch (error) {
        res.status(400).send('could not update')
    }
}

//getone
exports.getone=async(req,res)=>{
try {
 const user = await userSchema.findById(req.params.id)
 res.status(200).send({msg:"user",user})
} catch (error) {
    res.status(400).send('could not get') 
}
}