function safePromise(promise) {
  return promise.then(data => [null, data]).catch(err => [err, null]);
}

function isPromise(obj) {
  return !!obj.then;
}

function saferr(func) {
  return (...args) => {
    try {
      const result = func(...args);

      return isPromise(result) ? safePromise(result) : [null, result];
    } catch (err) {
      return [err, null];
    }
  };
}

export default saferr;
