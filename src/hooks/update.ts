import { DirectiveFunction } from "vue";
import bind from "./bind";

// This function runs when the component updates.
// It basically checks if the value has changed,
//  and if so, reruns the setVars function.
const update: DirectiveFunction = (el, binding, vnode, oldVnode) =>
    binding.value !== binding.oldValue && bind(el, binding, vnode, oldVnode);

export default update;
