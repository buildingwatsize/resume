/** @type {import('next').NextConfig} */
const path = require("path")
module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config

    // config.resolve.alias['@'] = path.join(path.resolve(__dirname, './src'))
    config.resolve.alias['assets'] = path.resolve(__dirname, './assets/')
    config.resolve.alias['components'] = path.resolve(__dirname, './components/')
    config.resolve.alias['pages'] = path.resolve(__dirname, './pages/')
    config.resolve.alias['styles'] = path.resolve(__dirname, './styles/')
    config.resolve.alias['utils'] = path.resolve(__dirname, './utils/')

    return config
  }
}