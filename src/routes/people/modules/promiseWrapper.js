export function wrapPromise(promise) {

  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err
    }
  );

  const handler = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw response;
    },
    default: () => response
  }

  const read = () => {
    const result = handler[status] ? handler[status]() : handler.default();
    return result
  }

  return { read }
}