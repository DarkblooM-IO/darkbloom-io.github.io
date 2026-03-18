import pugPlugin from "@11ty/eleventy-plugin-pug"

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pugPlugin, {
    pretty: true
  })

  eleventyConfig.addPassthroughCopy("./src/style/")
  eleventyConfig.addPassthroughCopy("./src/js/")

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }
}
