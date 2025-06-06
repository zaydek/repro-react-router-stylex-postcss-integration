import styleXPlugin from "@stylexjs/babel-plugin";

const config = {
  plugins: [
    [
      styleXPlugin,
      {
        // Required for this plugin
        runtimeInjection: false,
        dev: true,
        // Set this to true for snapshot testing
        // default: false
        test: false,
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: "commonJS",
          // The absolute path to the root directory of your project
          //// rootDir: __dirname,
          rootDir: process.cwd(), // Replace __dirname with process.cwd()
        },
      },
    ],
  ],
};

export default config;
