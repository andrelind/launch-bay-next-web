const { User } = require('../models');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const getUser = async ({ req }) => {
  const token = req.header('x-jwt');
  if (!token) {
    throw 'Invalid credentials - alpha';
  }

  try {
    const { id, name, provider } = jwt.verify(token, SECRET);
    if (!id || !name || !provider) {
      throw 'Invalid credentials - beta';
    }

    return await User.findOne({
      id,
      name,
      provider,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw 'Invalid credentials - gamma';
  }
};

const generateTimestamp = () => Math.floor(new Date().getTime() / 1000);

module.exports = { getUser, generateTimestamp, SECRET };
