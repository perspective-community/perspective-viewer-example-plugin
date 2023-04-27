import { test, expect } from "@playwright/test";

async function getExampleContents(page) {
    return await page.evaluate(async () => {
        const viewer = document.querySelector(
            "perspective-viewer perspective-viewer-example"
        );
        return viewer.innerHTML || "MISSING";
    });
}

test.describe("Example with superstore data set", () => {
    test("exists", async ({ page }) => {
        await page.goto("./examples/basic.html", {
            waitUntil: "networkidle",
        });

        await page.evaluate(async () => {
            await document.querySelector("perspective-viewer").restore({
                plugin: "Example",
            });
        });

        const viewer = await getExampleContents(page);
        await expect(viewer).toEqual("View has 99 rows");
    });
});
