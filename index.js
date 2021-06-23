module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "jest",
        "prettier",
        "standard"
    ],
    "extends": [
        "standard",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/standard"
    ],
    "env": {
        "browser": true,
        "jest": true
    },
    "rules": {
        "no-return-assign": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "curly": [
            "warn",
            "multi-line",
            "consistent"
        ],
        "newline-before-return": "warn",
        "prettier/prettier": "warn",
        'no-unused-expressions': 'off',
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "overrides": [
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "react/prop-types": "off",
                "@typescript-eslint/explicit-module-boundary-types": ["error"],
                "@typescript-eslint/explicit-function-return-type": ["warn", {
                    "allowExpressions": true
                }],
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                        allowTaggedTemplates: true,
                    }
                ],
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": ["warn", { "functions": false, "classes": false, "variables": false }]
            }
        }
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "globals": {
        "jQuery": true,
        "$": true,
        "require": true,
        "Live": true,
        "context": true
    }
}


