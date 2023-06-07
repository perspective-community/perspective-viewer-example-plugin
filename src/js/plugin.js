import STYLE from "../../dist/css/perspective-viewer-example.css";

export class PerspectiveViewerExamplePluginElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this._container) {
            this._shadow = this.attachShadow({ mode: "open" });

            this._container = document.createElement("div");
            this._container.classList.add("summary-container");

            this._style = document.createElement("style");
            this._style.textContent = STYLE;
            this._shadow.appendChild(this._style);
            this._shadow.appendChild(this._container);
        }
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
    PerspectiveViewerExamplePluginElement
);

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
