module.exports = {
  env: {
    node: true // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    "eslint:recommended", // Use the recommened rules from eslint
    "plugin:@typescript-eslint/recommended" // Use the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 12, // Use 2021 syntax
    sourceType: "module" // Allows for the use of imports
  },
  plugins: [
    "@typescript-eslint" // Allows for manually setting @typescript-eslint/* rules 
  ],
  rules: {}
};
