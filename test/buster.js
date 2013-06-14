var config = module.exports;

config["fruitmachine-ftdomdelegate"] = {
  rootPath: '../',
  environment: "browser",
  sources: [
    "test/build/fruitmachine-ftdomdelegate.test.js",
    "node_modules/fruitmachine/build/fruitmachine.js"
  ],
  tests: [
    "test/tests/*.test.js"
  ]
};
