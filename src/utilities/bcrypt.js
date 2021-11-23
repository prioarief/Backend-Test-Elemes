const bcrypt = require('bcrypt');

const hash = (val) => {
    const salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(val, salt);
};

module.exports = { hash };
