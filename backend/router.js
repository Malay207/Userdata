const express = require('express');
const router = express.Router();
const user = require('./model');
router.post('/add', (req, res) => {
    const { name, email, phone } = req.body;
    const newUser = new user({ name, email, phone });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);
router.get('/all', (req, res) => {
    user.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
}
);
router.put('/edit/:id', (req, res) => {
    const { name, email, phone } = req.body;
    user.findOneAndUpdate({ _id: req.params.id }, {
        name,
        email,
        phone
    }).then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.delete('/delete/:id', (req, res) => {
    user.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;