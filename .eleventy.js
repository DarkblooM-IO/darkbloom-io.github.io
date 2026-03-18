import mermaid from 'mermaid'
import pugPlugin from "@11ty/eleventy-plugin-pug"
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { fileURLToPath } from 'url'

export default function (eleventyConfig) {
  // Mermaid config
  mermaid.initialize({ startOnLoad: false })

  // Pug config
  eleventyConfig.addPlugin(pugPlugin, {
    pretty: true,
    filters: {
      mermaid: function (text) {
        const tmpInput = path.join(os.tmpdir(), `mermaid-${Date.now()}.mmd`)
        const tmpOutput = path.join(os.tmpdir(), `mermaid-${Date.now()}.svg`)
        fs.writeFileSync(tmpInput, text)
        execSync(`mmdc -i "${tmpInput}" -o "${tmpOutput}"`)
        const svg = fs.readFileSync(tmpOutput, 'utf8')
        fs.unlinkSync(tmpInput)
        fs.unlinkSync(tmpOutput)
        return svg
      }
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
