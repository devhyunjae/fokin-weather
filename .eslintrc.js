module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'import/no-unresolved': ['off'],
    'react/prop-types': ['off'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/style-prop-object': ['off'],
  },
};
