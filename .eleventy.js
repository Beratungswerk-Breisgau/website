const Image = require("@11ty/eleventy-img").default;

module.exports = function(eleventyConfig) {
  // Image optimization
  eleventyConfig.addNunjucksAsyncShortcode("image", async function(src, alt) {
    if (!src) {
      throw new Error(`Missing \`src\` on myImage from: ${this.page.inputPath}`);
    }

    let metadata = await Image(src, {
      widths: [300, 600, 1200],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/img/",
      filenameFormat: function(id, src, width, format) {
        return `${id}-${width}w.${format}`;
      }
    });

    let imageAttributes = {
      alt,
      sizes: "(min-width: 1024px) 1000px, 100vw",
      loading: "lazy",
      decoding: "async"
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");

  // Configure input/output
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
