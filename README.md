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


## Editor notes:

### VSCode


#### Validation
Make sure you typescript validation is enabled - it is enabled by default.

```json
"typescript.validate.enable": true
```
If for some reason you want to turn it off, configure eslint specific validation on your settings:

```json
"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
```


#### Working directories
If your Javascript project is not on the root of the open project you must define the `"eslint.workingDirectories": ["my-js-application"]` setting of the VSCode ESLint plugin to make it work.
