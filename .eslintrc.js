module.exports = {
  env: {
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    'eslint:recommended', // Use the recommened rules from eslint
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Use eslint-config-prettier to disable ESLint formatting rules from @typescript-eslint/eslint-plugin that would conflict with Prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 12, // Use 2021 syntax
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
    'prettier', // Allows for manually setting prettier/* rules
  ],
  rules: {},
};
