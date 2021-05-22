module.exports = {
  purge: {
    mode: "all",
    enabled: true,
    preserveHtmlElements: false,
    content: [
      "./views/layouts/*.handlebars",
      "./views/partials/*.handlebars",
      "./src/**/*.handlebars",
      "./views/*.handlebars",
      "./public/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
};
