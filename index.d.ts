import type { IPerspectiveViewerPlugin } from "@finos/perspective-viewer";

declare global {
    interface CustomElementRegistry {
        get(
            tagName: "perspective-viewer-example",
        ): PerspectiveViewerExamplePluginElement;

        // TODO is this needed?
        whenDefined(tagName: "perspective-viewer-example"): Promise<void>;
    }
}

interface PerspectiveViewerExamplePluginElement
    extends IPerspectiveViewerPlugin {}

export declare class PerspectiveViewerExamplePluginElement
    extends HTMLElement
    implements IPerspectiveViewerPlugin {}
