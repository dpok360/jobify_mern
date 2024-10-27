import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong,try again later';

  if (process.env.NODE_ENV === 'development') {
    res.status(statusCode).json({ msg });
    stack: err.stack;
  }
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
