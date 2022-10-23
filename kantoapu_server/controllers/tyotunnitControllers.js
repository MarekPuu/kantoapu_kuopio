const reqParams = require('../lib/reqParamsHandler');
const throwError = require('../lib/throwError');
const Kayttaja = require('../models/userModel');
const Tyotunnit = require('../models/tyotuntiModel');
const { calculateHours, calculateSalary } = require('../lib/tyotunnitHelper');
require('../models/palkkaLuokatModel');

module.exports.uusiTyotunti = async (req, res, next) => {
  try {
    const { aloitus, lopetus, nimike, pyhapaiva, palkkaluokka, tauko } =
      req.body;
    const { tyontekijaID } = req.params;
    const { userID, rooli } = req;

    const errors = reqParams({
      aloitus,
      lopetus,
      pyhapaiva,
      palkkaluokka,
      tauko,
    });

    if (errors) throwError(400, errors);

    if (tyontekijaID !== userID && rooli !== 'admin')
      return throwError(403, 'Ei oikeuksia');

    const kayttaja = await Kayttaja.findById(tyontekijaID).populate(
      'palkkaluokat',
      'palkka'
    );

    if (!kayttaja) throwError(404, 'Käyttäjää ei löytynyt');

    const tuntipalkka = kayttaja?.palkkaluokat?.find(
      (p) => p.id === palkkaluokka
    );

    if (!tuntipalkka) throwError(403, 'Käyttäjällä ei ole tätä palkkaluokkaa');

    const palkkaYhteensa = calculateSalary(
      aloitus,
      lopetus,
      tuntipalkka.palkka,
      pyhapaiva,
      tauko
    );

    const uusiTyotunti = new Tyotunnit({
      aloitus: new Date(aloitus),
      lopetus: new Date(lopetus),
      nimike,
      tyotunnit: calculateHours(aloitus, lopetus) - tauko / 60,
      tauko,
      palkkaYhteensa,
      pyhapaiva,
      palkkaluokka: palkkaluokka,
      tyontekija: tyontekijaID,
    });

    const response = await uusiTyotunti.save();

    if (response) res.status(200).json({ status: 'OK', uusiTyotunti });
  } catch (error) {
    next(error);
  }
};

module.exports.tyontekijanTyotunnit = async (req, res, next) => {
  const { tyontekijaID } = req.params;
  const { userID, rooli } = req;

  try {
    const errors = reqParams({ tyontekijaID, userID, rooli });
    if (errors) throwError(400, errors);

    if (tyontekijaID !== userID && rooli !== 'admin')
      return throwError(403, 'Ei oikeuksia');

    const tunnit = await Tyotunnit.find({ tyontekija: tyontekijaID })
      .select(
        'aloitus lopetus tauko nimike tyotunnit pyhapaiva palkkaYhteensa status'
      )
      .populate('palkkaluokka', 'nimi palkka')
      .sort({ aloitus: -1 });
    res.status(200).json({ status: 'OK', tunnit });
  } catch (error) {
    next(error);
  }
};

module.exports.muokkaaTyotuntia = async (req, res, next) => {
  try {
    res.status(200).json({ status: 'OK' });
  } catch (error) {
    next(error);
  }
};

module.exports.poistaTyotunti = async (req, res, next) => {
  const { tyotuntiID } = req.params;
  const { userID, rooli } = req;

  try {
    const tyotunti = await Tyotunnit.findById(tyotuntiID).select('tyontekija');

    if (!!!tyotunti)
      return res
        .status(404)
        .json({ status: 'Error', message: 'työtuntia ei ole olemassa' });

    if (tyotunti.tyontekija.id.toString('hex') !== userID && rooli !== 'admin')
      return throwError(403, 'Ei oikeuksia');

    const response = await tyotunti.delete();

    if (response) res.status(200).json({ status: 'OK', tyotunti });
  } catch (error) {
    next(error);
  }
};
