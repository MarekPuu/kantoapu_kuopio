const { Router } = require('express');
const router = Router();
const tyotunnitControllers = require('../controllers/tyotunnitControllers');

router.post('/:tyontekijaID', tyotunnitControllers.uusiTyotunti);
router.get('/:tyontekijaID', tyotunnitControllers.tyontekijanTyotunnit);
router.patch('/:tyotuntiID', tyotunnitControllers.muokkaaTyotuntia);
router.delete('/:tyotuntiID', tyotunnitControllers.poistaTyotunti);

module.exports = router;
