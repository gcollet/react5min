const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'React5min 2' });
});

/* Creates test for JSON */
const testJSON = [
  {
    name: 'John Smith',
    username: 'CaptainCode'
  },
  {
    name: 'Jane Doe',
    username: 'JaneyCakes'
  }
];

/* Send JSON if requested */
router.get('/sendjson', (req, res, next) => {
  res.json(testJSON)
});
module.exports = router;
