const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/test', (req, res) => res.json({msg: 'backend works'}))


router.get('/', (req, res) => {
  User.find()
    .then(info => res.json(info))
    .catch(err => res.status(404).json({msg: 'no books found'}))
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nouserfound: 'No User found' }));
});


router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
  })

  newUser.save().then(info => res.json(info))
})


router.delete('/', (req, res) => {
  User.findOneAndRemove({_id: req.body.id}).then(() => {
    res.json({success: true})
  })
})


router.put('/:id', (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

module.exports = router
