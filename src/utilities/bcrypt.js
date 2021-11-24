const bcrypt = require('bcrypt');

const hash = (val) => {
    const salt = bcrypt.genSaltSync(parseInt(process.env.saltRounds));
	return bcrypt.hashSync(val, salt);
};
const compare = (val, hash) => {
	return bcrypt.compareSync(val, hash)
};

module.exports = { hash, compare };
