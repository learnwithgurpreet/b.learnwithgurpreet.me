function cacheBuster(url) {
  return `${url}?v=${new Date().getTime()}`;
}

module.exports = cacheBuster;
