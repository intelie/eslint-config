module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "react-hooks",
        "flowtype",
        "@typescript-eslint",
        "jest",
        "prettier",
        "standard"
    ],
    "extends": [
        "standard",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:flowtype/recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
        "prettier/flowtype",
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
        "flowtype/no-types-missing-file-annotation": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "next-line space-infix-ops": "off",
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
        "prettier/prettier": "warn"
    },
    "globals": {
        "jQuery": true,
        "$": true,
        "require": true,
        "Live": true,
        "context": true
    }
}