# Intelie [ESLint](http://eslint.org/) config


### Install the package
```bash
yarn add -D @intelie/eslint-config
```


### Install the peer dependencies
```bash
npx install-peerdeps@2.0.1 --dev -o --yarn @intelie/eslint-config
```



### On your `package.json`:

```json
    "prettier": "@intelie/prettier-config",
    "eslintConfig": {
        "extends": "@intelie"
    },
```

Open your preferred code editor, install an ESLint extension and you're good to go, no more discussions about code formatting and styles! 😊
