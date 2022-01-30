import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** The badge expose two modes : dark or light */ darkMode?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type WebCarbonBadgeProps = typeof __propDef.props;
export declare type WebCarbonBadgeEvents = typeof __propDef.events;
export declare type WebCarbonBadgeSlots = typeof __propDef.slots;
export default class WebCarbonBadge extends SvelteComponentTyped<WebCarbonBadgeProps, WebCarbonBadgeEvents, WebCarbonBadgeSlots> {
}
export {};
