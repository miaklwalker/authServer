const router = require('express').Router();
const User = require('../models/User')
const {registerValidation,loginValidation} = require('../validation')


//VALIDATION







router.post('/register', async (req, res) => {
    const {error} = registerValidation(req.body)
    if(error)return res.status(400).send(error.details[0].message)

    //Checking if user is unique
    const emailExists = await User.findOne({email:"thewatchhen21@yahoo.com"});
    if(emailExists)return res.status(400).send('Email already Exists');

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(err){res.status(400).send(err)}
})



module.exports = router