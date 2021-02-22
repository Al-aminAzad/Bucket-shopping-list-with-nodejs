const bucketRouter = require('./bucket.routes');

// module.exports = {
//   bucketRouter,
// };
module.exports = (app) => {
  app.use('/buckets', bucketRouter);
};
