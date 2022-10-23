const { Router } = require('express');
const router = Router();
const tehtavatControllers = require('../controllers/tehtavatControllers');

router.post('/', tehtavatControllers.uusiTehtava);
router.get('/', tehtavatControllers.kaikkiTehtavat);
router.patch('/:tehtavaID', tehtavatControllers.muokkaaTehtavaa);
router.delete('/:tehtavaID', tehtavatControllers.poistaTehtava);

module.exports = router;
