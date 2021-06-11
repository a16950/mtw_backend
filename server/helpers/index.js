var successResponse = response => body => response.status(200).json(body);

var successEmptyResponse = response => () => response.status(200).json({});

var nextError = next => error => {
  error.status = error.status || 500;
  next(error);
}

module.exports = {
  successEmptyResponse,
  successResponse,
  nextError
};