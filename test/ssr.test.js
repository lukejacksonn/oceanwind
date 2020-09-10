import { h } from "preact";
import render from "preact-render-to-string";
import htm from "htm";
import {
  filterOutUnusedRules,
  getStyleTag,
  VirtualInjector,
} from "otion/server";
import { setup, themed } from "../index.js";

describe("ssr", () => {
  test("renders server side", () => {
    // https://www.npmjs.com/package/otion#server-side-rendering
    const injector = VirtualInjector();
    setup({ injector });

    const html = htm.bind(h);
    const ow = themed({});
    const style = {
      main: ow`clearfix`,
    };

    const app = html`<main className=${style.main}>hello oceanwind</main>`;
    const appHtml = render(app);
    const styleTag = getStyleTag(filterOutUnusedRules(injector, appHtml));

    console.log("Generated a style tag", styleTag);

    expect(styleTag).toBeTruthy();
  });
});
