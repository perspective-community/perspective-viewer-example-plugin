import type { IPerspectiveViewerPlugin } from "@finos/perspective-viewer";

declare global {
    interface CustomElementRegistry {
        get(
            tagName: "perspective-viewer-example",
        ): HTMLPerspectiveViewerExamplePluginElement;

        // TODO is this needed?
        whenDefined(tagName: "perspective-viewer-example"): Promise<void>;
    }
}

interface HTMLPerspectiveViewerExamplePluginElement
    extends IPerspectiveViewerPlugin {}

export declare class HTMLPerspectiveViewerExamplePluginElement
    extends HTMLElement
    implements IPerspectiveViewerPlugin {}
