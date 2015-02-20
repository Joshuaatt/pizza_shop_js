describe("Pizza", function() {
  describe("size", function() {
    it("takes diameter input and returns that input +in", function() {
    var testPizza = Object.create(Pizza);
    testPizza.size(10);
    expect(testPizza.size).to.equal("10in");
    });
  });
});
