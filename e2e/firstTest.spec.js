describe('AwesomeProject', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should be login', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
