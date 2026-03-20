import mermaid    from 'mermaid'
import { marked } from "marked"
import pugPlugin  from "@11ty/eleventy-plugin-pug"
import fs         from 'fs'
import path       from 'path'
import os         from 'os'

import { execSync }      from 'child_process'
import { fileURLToPath } from 'url'

function parseMermaid(text) {
  const tmpInput = path.join(os.tmpdir(), `mermaid-${Date.now()}.mmd`)
  const tmpOutput = path.join(os.tmpdir(), `mermaid-${Date.now()}.svg`)

  fs.writeFileSync(tmpInput, text)

  execSync(`mmdc -i "${tmpInput}" -o "${tmpOutput}"`)

  const svg = fs.readFileSync(tmpOutput, 'utf8')

  fs.unlinkSync(tmpInput)
  fs.unlinkSync(tmpOutput)

  return svg
}

export default function (eleventyConfig) {
  // Mermaid config
  mermaid.initialize({ startOnLoad: false })

  // Pug config
  eleventyConfig.addPlugin(pugPlugin, {
    filters: {
      mermaid: parseMermaid,
      markdown: function (text) { return marked.parse(text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"")) }
    }
  })

  // Site files
  eleventyConfig.addPassthroughCopy("./src/style/")
  eleventyConfig.addPassthroughCopy("./src/js/")
  eleventyConfig.addPassthroughCopy("./src/img/")
  eleventyConfig.addPassthroughCopy("./src/favicon.png")

  // 11ty config
  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }
}
