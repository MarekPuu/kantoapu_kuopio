const reqParams = require('../lib/reqParamsHandler');
const throwError = require('../lib/throwError');
const Tehtava = require('../models/tehtavatModel');

module.exports.uusiTehtava = async (req, res, next) => {
  const { otsikko, lisatietoja } = req.body;
  try {
    const errors = reqParams({ otsikko });

    if (errors) throwError(400, errors);

    const tehtava = new Tehtava({
      otsikko,
      lisatietoja,
      luoja: req.userID,
    });

    const response = await tehtava.save();

    if (response)
      res.status(200).json({
        status: 'OK',
        tehtava: response,
      });
  } catch (error) {
    next(error);
  }
};

module.exports.kaikkiTehtavat = async (req, res, next) => {
  try {
    const tehtavat = await Tehtava.find()
      .select('otsikko lisatietoja status createdAt ')
      .populate('luoja', 'etunimi sukunimi');

    if (tehtavat)
      res.status(200).json({
        status: 'OK',
        tehtavat,
      });
  } catch (error) {
    next(error);
  }
};

module.exports.muokkaaTehtavaa = async (req, res, next) => {
  const { tehtavaID } = req.params;
  const { otsikko, lisatietoja, status } = req.body;

  try {
    const tehtava = await Tehtava.findById(tehtavaID);

    tehtava.otsikko = otsikko || tehtava.otsikko;
    tehtava.lisatietoja =
      lisatietoja?.trim().length === 0 ? undefined : lisatietoja;
    tehtava.status = status || tehtava.status;

    const response = await tehtava.save();

    if (response)
      res.status(200).json({
        status: 'OK',
        response,
      });
  } catch (error) {
    next(error);
  }
};

module.exports.poistaTehtava = async (req, res, next) => {
  const { tehtavaID } = req.params;

  try {
    const tehtava = await Tehtava.findById(tehtavaID);

    if (!!!tehtava)
      return res.status(400).json({ message: 'Tehtävää ei löytynyt' });

    const response = await tehtava.delete();

    if (response)
      res.status(200).json({
        status: 'OK',
      });
  } catch (error) {
    next(error);
  }
};
