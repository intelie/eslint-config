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


### Editor notes:

#### VSCode

Make sure you typescript validation is enabled - it is enabled by default.

```json
"typescript.validate.enable": true
```
If for some reason you want to turn it off, configure eslint specific validation on your settings:

```json
"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
```
