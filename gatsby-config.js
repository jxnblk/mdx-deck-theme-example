module.exports = {
  __experimentalThemes: [
    '@mdx-deck/gatsby-theme',
    {
      resolve: '@jxnblk/gatsby-theme-mdx-blog',
      options: {
        mdx: false,
      }
    },
  ],
  plugins: [
    'gatsby-plugin-catch-links',
  ],
}
