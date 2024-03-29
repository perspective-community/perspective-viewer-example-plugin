import STYLE from "../../dist/css/perspective-viewer-example.css";

export class PerspectiveViewerExamplePluginElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this._container) {
            this._container = document.createElement("div");
        }
        this.appendChild(this._container);
    }

    disconnectedCallback() {}

    async activate(view) {}

    get name() {
        return "Example";
    }

    get select_mode() {
        return "toggle";
    }

    get min_config_columns() {
        return 1;
    }

    async draw(view) {
        const count = await view.num_rows();
        this.innerHTML = `View has ${count} rows`;
    }

    async update(view) {}

    async resize() {}

    async clear() {}

    save() {}

    restore(token) {}

    async restyle(view) {}

    delete() {}

    // Private
}

customElements.define(
    "perspective-viewer-example",
    PerspectiveViewerExamplePluginElement,
);

/**
 * Appends the default table CSS to `<head>`, should be run once on module
 * import.
 *
 */
function _register_global_styles() {
    const style = document.createElement("style");
    style.textContent = STYLE;
    document.head.insertBefore(style, document.head.firstChild);
}

/******************************************************************************
 *
 * Main
 *
 */

function register_element() {
    customElements
        .get("perspective-viewer")
        .registerPlugin("perspective-viewer-example");
}

customElements.whenDefined("perspective-viewer").then(register_element);
_register_global_styles();
