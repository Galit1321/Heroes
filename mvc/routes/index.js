var express = require('express');
var router = express.Router();
const ctrlIndex = require('../controllers/index');

router.get('/', ctrlIndex.getIndex);
router.get('/heroes', ctrlIndex.getHerosIndex);
router.get('/create-hero', ctrlIndex.getHerosForms);
router.post('/create-hero',ctrlIndex.createNewHero);
router.post('/delete-hero/:heroid',ctrlIndex.deleteHero);
router.get('/update-hero',ctrlIndex.getUpadetHero);
module.exports = router;
