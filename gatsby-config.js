module.exports = {
  // Add plugins/etc. to create a theme
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          // 'gatsby-theme-x',
        ]
      }
    },
  ],
}
