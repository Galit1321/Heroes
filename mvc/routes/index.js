var express = require('express');
var router = express.Router();
const ctrlIndex = require('../controllers/index');

router.get('/', ctrlIndex.getIndex);
router.get('/heroes', ctrlIndex.getHerosIndex);
router.get('/create-hero', ctrlIndex.getHerosForms);
router.post('/create-hero',ctrlIndex.createNewHero);
router.post('/delete-hero/:heroid',ctrlIndex.deleteHero);
router.get('/update-hero/:heroid',ctrlIndex.getUpdateHero);
router.post('/update-hero/:heroid',ctrlIndex.updateHero);
router.get('/reset',ctrlIndex.reset);

module.exports = router;
