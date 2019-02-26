"use strict";

module.exports = {
    extends: "stylelint-config-wordpress",
    plugins: [
        "stylelint-declaration-use-variable",
        "stylelint-order"
    ],
    rules: {
        "string-quotes": null,
        "block-no-empty": null,
        "rule-empty-line-before": null,
        "declaration-colon-space-after": null,
        "function-parentheses-space-inside": null,
        "color-named": null,
        "sh-waqar/declaration-use-variable": [["/color/", { ignoreValues: ["transparent", "inherit"] }]],
        "order/properties-alphabetical-order": true,
        "function-url-quotes": "always",
        "selector-class-pattern": null,
        "no-eol-whitespace": null,
        "declaration-colon-space-before": null,
        "at-rule-empty-line-before": null
    }
};
