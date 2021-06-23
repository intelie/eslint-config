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


### If you need to make custom changes, extend this configuration:

```json
 "extends": "@intelie/eslint-config",
  "rules": {
       ..."your other rules"
      }
 
```

## IDE & Code Editor notes:

### IntelliJ
Under `Languages & Frameworks > Javascript > Code Quality Tools > ESLint`:

- [x] *Automatic ESLint configuration*
- [x] *Run eslint --fix on save*

### VSCode

#### Working directories
Under `Eslint: Working directories`:

If your Javascript project is not on the root of the open project you must define the `"eslint.workingDirectories": ["my-root-folder"]` setting of the VSCode ESLint plugin to make it work.
