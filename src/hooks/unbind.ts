import { DirectiveFunction } from "vue";
import kebabify from "../utils/kebabify";

// This function runs when the directive is unbound.
// It just removes the variables from the element.
const unbind: DirectiveFunction = (el, { arg, value, modifiers }) => {
    if (arg) {
        // If an argument is passed in, set a specific variable.
        // If the rule modifier is added, then set a style rule.
        const prop = modifiers.rule ? arg : `--${arg}`;

        el.style.removeProperty(prop);
    } else if (typeof value === "object") {
        // If an object is passed, set a variable for each key.
        Object.keys(value as Record<string, any>).forEach((k) => {
            // If its camelcased, convert to kebab-case
            const prop = k !== k.toLowerCase() ? kebabify(k) : k;

            el.style.removeProperty(prop);
        });
    }
};

export default unbind;