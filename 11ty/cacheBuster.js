function cacheBuster(url) {
  return `${url}?v=${String(Date.now())}`;
}

module.exports = cacheBuster;
