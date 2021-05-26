module.exports = {
  env: {
    NEXT_PUBLIC_ETHERSCAN_API_KEY: 'TWMMUQ11N5KUUF58CXSMX3GZXCASPEQWPJ',
    NEXT_PUBLIC_ETHERSCAN_FUSE_TOKEN: '0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d'
  },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      return config
    }
  }
  