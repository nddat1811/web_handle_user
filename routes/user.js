const express = require('express');

const router = express.Router();

const UserModel = require('../models/user')


router.get('/', async(req, res) => {
    res.send('hitsssss');
})

router.get('/search', async(req, res) => {
    const searchField = req.query.key;
    // console.log(searchField);
    UserModel.find({
        //  username: {$regex: searchField, $options: '$i'}
        $or: [ { username: {$regex: searchField, $options: '$i'} }, { email: {$regex: searchField, $options: '$i'} } ] 
    })
        .then(user =>{
            res.json(user);
        })
})

router.post('/add', async(req, res) => {

    const newUser = new UserModel(req.body);

    newUser.save()
            .then(() => {
                return res.status(200).json({
                    message: 'Add new user successfully',
                })
            })
            .catch(err => {
                return res.status(500).json({
                    message: err,
                })
            })
})

router.post('/add/many', async(req, res) =>{
    
})

module.exports = router;