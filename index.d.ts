type Styles = string | TemplateStringsArray | Array<string | boolean> | Record<string, boolean>;

declare function process(theme: Record<string, unknown>): (strings: Styles) => Record<string, unknown>;
declare function configure(theme: Record<string, unknown>): Record<string, unknown>;
declare function themed(theme?: Record<string, unknown>): (strings: Styles) => string;
declare function _default(strings: Styles): string;

declare function hydrate(): void;
declare function setup(options: {
    injector?: {
        sheet?: CSSStyleSheet;
        insert(rule: string, index: number): number;
        nonce: string | undefined;
        ruleTexts: string[];
    };
    prefix?: string;
}): void;

export { process, configure, themed, hydrate, setup };
export default _default;
