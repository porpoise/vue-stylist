import { DirectiveFunction } from "vue";
import kebabify from "../utils/kebabify";

// This function will use the directive data
//  to set the element's css variables:
const bind: DirectiveFunction = (el, { arg, value, modifiers }) => {
    if (arg) {
        // If an argument is passed in, set a specific variable.
        // If the rule modifier is added, then set a style rule.
        const prop = modifiers.rule ? arg : `--${arg}`;

        el.style.setProperty(prop, value);
    } else if (typeof value === "object") {
        // If an object is passed, set a variable for each key.
        Object.entries(value as Record<string, any>).forEach(([k, v]) => {
            // If its camelcased, convert to kebab-case
            const prop = k !== k.toLowerCase() ? kebabify(k) : k;

            el.style.setProperty(prop, v);
        });
    }
};

export default bind;
