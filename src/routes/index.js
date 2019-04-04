const router = require('express').Router();
const seedController = require('../controllers/seed');
router.post('/api/seed', seedController.create);
module.exports = router;
