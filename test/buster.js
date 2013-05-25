var config = module.exports;

config["fruitmachine-domdelegate"] = {
  rootPath: '../',
  environment: "browser",
  sources: [
    "test/build/fruitmachine-domdelegate.test.js",
    "node_modules/fruitmachine/build/fruitmachine.js"
  ],
  tests: [
    "test/tests/*.test.js"
  ]
};
