function jsonMiddleware(status, data) {
  const ctx = this;
  ctx.body = {
    code: status.code,
    msg: status.msg,
    data,
  };

}

const json = async(ctx, next) => {
  ctx.json = jsonMiddleware.bind(ctx);
  await next();
};

export default json;
