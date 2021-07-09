import { PluginObject } from "vue";

export interface IVueStylistConfig {
    directive?: string;
}

const VueStylist: PluginObject<IVueStylistConfig> = {
    install(Vue, { directive }) {
    }
}

export default VueStylist;