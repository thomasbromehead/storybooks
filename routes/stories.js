const express = require('express');
const router = express.Router();


// Stories Index
router.get('/', (req, res) => {  // '/' represents the stories folder
   res.render('stories/index');
});


// Add Story Form
router.get('/add', (req, res) => {  // '/' represents the stories folder
   res.render('stories/add');
});

module.exports = router;