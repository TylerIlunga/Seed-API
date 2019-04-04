const router = require('express').Router();
const seedController = require('../controllers/seed');
router.post('/api/seed', seedController.create); //NOTE: MIGHT BE DIFFERENT
module.exports = router;
