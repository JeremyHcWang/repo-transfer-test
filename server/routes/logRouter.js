const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

<<<<<<< HEAD
router.get('/', logController.getAllLog, async (req, res) => {
  console.log('reaching logrouter');
=======
router.post('/', logController.getAllLog, async (req, res) => {
>>>>>>> 278877e9da30ad478f53f38fd36c57b34bae22c9
  return res.status(200).json(res.locals.allLog);
  // .writeHead(200, { 'Content-Type': 'application/javascript' })
  // .end(`window.__APP_VARIABLES__ = ${JSON.stringify(res.locals.allLog)}`);
});

module.exports = router;
