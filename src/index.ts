import { PluginObject } from "vue";

import bind from "./hooks/bind";
import update from "./hooks/update";
import unbind from "./hooks/unbind";

export interface IVueStylistConfig {
    directive?: string;
}

const VueStylist: PluginObject<IVueStylistConfig> = {
    install(Vue, { directive }) {
        Vue.directive(directive || "css", {
            bind,
            update,
            componentUpdated: update,
            unbind,
        });
    }
}

export default VueStylist;