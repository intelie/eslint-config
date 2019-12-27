# Intelie [ESLint](http://eslint.org/) config


### Install the needed packages
```bash
yarn install -D @intelie/eslint-config
yarn add -D @intelie/prettier-config
```


### Install the peer dependencies
```bash
npx install-peerdeps --dev -o --yarn @intelie/eslint-config
```



### On your `package.json`:

```json
    "prettier": "@intelie/prettier-config",
    "eslintConfig": {
        "extends": "@intelie"
    },
```

Open your preferred code editor, install an ESLint extension and you're good to go, no more arguing about code formatting and styles! 😊
