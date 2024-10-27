// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2020: true,
//   },
//   extends: [
//     'airbnb', // Add Airbnb configuration
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//     'plugin:prettier/recommended', // Integrates Prettier with ESLint
//     'prettier', // Turns off ESLint rules that conflict with Prettier
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   settings: {
//     react: {
//       version: '18.2',
//     },
//   },
//   plugins: ['react-refresh'],
//   rules: {
//     'react/jsx-no-target-blank': 'off',
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//       // { extensions: ['.jsx', '.js'] },
//     ],
//   },
// };
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb', // Airbnb style guide
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
    'prettier', // Disables conflicting ESLint rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      // Uncomment and configure extensions if needed
      // { extensions: ['.jsx', '.js'] },
    ],
  },
};
