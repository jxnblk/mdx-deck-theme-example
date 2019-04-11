module.exports = {
  __experimentalThemes: [
    { resolve: '@mdx-deck/gatsby-theme' },
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
