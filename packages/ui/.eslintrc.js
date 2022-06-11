module.exports = {
  root: true,
  extends: ['@my-namespace/eslint-config/react', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['*.stories.@(js|jsx|ts|tsx)'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'variable', format: ['StrictPascalCase', 'strictCamelCase'] },
        ],
        'storybook/hierarchy-separator': 'error',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
