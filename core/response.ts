// make response function and make return type of response function
const response = (dataResponse: {
  data?: any;
  message?: string;
  optional?: Object;
  validation?: any;
}) => {
  const { data, optional, validation, message } = dataResponse;
  return {
    validation,
    message,
    data,
    ...optional,
  };
};
export default response;
