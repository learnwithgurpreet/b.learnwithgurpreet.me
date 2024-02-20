const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const fs = require('fs');

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');

// Import data files
const site = require('./src/_data/site.json');

function groupBy(transformer) {
  return function(arr) {
    const grouped = {};
    arr.forEach(a => {
      const _key = transformer(a);
      if (grouped[_key]) grouped[_key].push(a);
      else grouped[_key] = [a];
    });

    return Object.entries(grouped);
  };
}

module.exports = function(config) {
  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter(
    'groupByYear',
    groupBy(post => post.date.getFullYear())
  );

  /**
   * USAGE:
   * {{ page.inputPath | stat("atime") }} -- The timestamp indicating the last time this file was accessed.
   * birthtime: {{ page.inputPath | stat }} -- The timestamp indicating the creation time of this file.
   * mtime: {{ page.inputPath | stat: "mtime" }} -- The timestamp indicating the last time this file was modified.
   * {{ page.inputPath | stat("ctime") }} --  The timestamp indicating the last time the file status was changed.
   * size: {{ page.inputPath | stat: "size" }}
   */
  config.addFilter('stat', (file, field = 'birthtime') => {
    return fs.statSync(file)[field];
  });

  // Layout aliases
  config.addLayoutAlias('home', 'layouts/home.njk');

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Passthrough copy
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/admin/previews.js');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
  config.addPassthroughCopy('src/robots.txt');
  config.addPassthroughCopy({
    './node_modules/chart.js/dist/chart.umd.js': '/js/components/chart.umd.js',
    './node_modules/chart.js/dist/chart.umd.js.map': '/js/components/chart.umd.js.map'
  });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ['posts'].indexOf(tag) === -1);
  }

  const now = new Date();

  // Custom collections
  const livePosts = post => post.date <= now && !post.data.draft;
  config.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse();
  });

  config.addCollection('postFeed', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)]
      .reverse()
      .slice(0, site.maxPostsPerPage);
  });

  config.addCollection('tagList', function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
