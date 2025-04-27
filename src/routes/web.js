const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getIamge} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/ddd', getABC);

router.get('/trungduc', getIamge);
  
router.get('/ducden', (req, res) => {
    res.send('Hello World! 1234')
  })

module.exports = router; // export default