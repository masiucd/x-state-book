// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
  mount: {
    public: {
      url: "/",
      static: true,
    },
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-typescript", "@snowpack/plugin-react-refresh"],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  alias: {
    "@components": "./src/components",
    "@hooks": "./src/hooks",
  },
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
};
