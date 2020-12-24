const express = require('express')
const router = express.Router()

// login page
router.get('/login', (req, res) => res.render('login'))

// register page
router.get('/register', (req, res) => res.render('register'))

// register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body
    let errors = []

    // cehck required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please Fill  in all fields' })
    }

    // check password match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' })
    }

    // check pass lenth
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 Characters' })
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2,
        })
    } else {
        res.send('pass')
    }
})

module.exports = router
