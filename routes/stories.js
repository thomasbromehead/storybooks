const express = require('express');
const router = express.Router();
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth'); //destructuring in use


// Stories Index
router.get('/', (req, res) => {  // '/' represents the stories folder
   res.render('stories/index');
});

// Edit Story 
router.get('/edit', ensureAuthenticated, (req, res) => {  // '/' represents the stories folder
   res.render('stories/edit');
});

// Add Story Form
router.get('/add', ensureAuthenticated, (req, res) => {  // '/' represents the stories folder
   res.render('stories/add');
});

module.exports = router;