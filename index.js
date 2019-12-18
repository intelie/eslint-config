module.exports = {
    "plugins": [
        "react",
        "flowtype",
        "jest",
        "react-hooks",
        "standard"
    ],
    "extends": [
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
        "prettier/flowtype",
        "prettier/react",
        "prettier/standard"      
    ],
    "env": {
        "browser": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "classes": true,
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "no-return-assign": "off",
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