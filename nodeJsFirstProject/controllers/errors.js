exports.getPageNotFound = (request, res, next) => {
  // when the page doesn't exist
  res
    .status(404)
    .send("<h1>Page not found</h1>")
};