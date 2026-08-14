module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("img");

  // Configure input/output
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
