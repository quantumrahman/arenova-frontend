/** @type {import("prettier").Config} */
const config = {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    tabWidth: 4,
    useTabs: false,
    printWidth: 100,
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',

    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
