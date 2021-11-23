module.exports = (res, isSuccess, data, error, statusCode) => {
	return res.status(statusCode).json({
		isSuccess,
		data,
		error,
		statusCode,
	});
};
