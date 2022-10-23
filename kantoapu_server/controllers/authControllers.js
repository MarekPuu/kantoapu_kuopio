const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const reqParams = require('../lib/reqParamsHandler');
const throwError = require('../lib/throwError');
const User = require('../models/userModel');

module.exports.login = async (req, res, next) => {
  try {
    const { sposti, salasana } = req.body;
    const errors = reqParams({ sposti, salasana });

    if (errors) throwError(400, errors.toString());

    const user = await User.findOne({
      sposti: sposti.toLowerCase(),
    }).exec();

    if (!user)
      return res
        .status(400)
        .json({ status: 'Error', message: 'Sposti on virheellinen' });

    const hashedPass = await bcrypt.compare(salasana, user.salasana);

    if (!hashedPass)
      return res
        .status(400)
        .json({ status: 'Error', message: 'salasana on virheellinen' });

    const accessToken = jwt.sign(
      {
        id: user.id,
        rooli: user.rooli,
        nimi: `${user.etunimi} ${user.sukunimi}`,
      },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: '7d' }
    );
    const refreshToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.REFRESH_TOKEN_KEY,
      { expiresIn: '7d' }
    );

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie('refreshToken', refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });

    res.status(200).json({
      status: 'OK',
      user: {
        accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};
