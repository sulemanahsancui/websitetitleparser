module.exports = function (err, req, res, next) {
  return res.status(404).send({ message: "not found" });
};
