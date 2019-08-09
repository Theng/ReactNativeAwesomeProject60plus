/* eslint-disable */

describe("AwesomeProject", () => {
    // beforeEach(async () => {
    //   await device.reloadReactNative();
    // });

    it("should be show home", async () => {
        await expect(element(by.id("home-screen"))).toBeVisible();

        await expect(element(by.id("AboutScreen-button"))).toBeVisible();
        await element(by.id("AboutScreen-button")).tap();
    });

    it("should be show about", async () => {
        await expect(element(by.id("about-screen"))).toBeVisible();
    });
});
