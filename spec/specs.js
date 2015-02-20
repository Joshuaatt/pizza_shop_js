describe("Pizza", function() {
  describe("size", function() {
    it("takes diameter input and returns that input +in", function() {
    var testPizza = Object.create(Pizza);
    testPizza.size(10);
    expect(testPizza.size).to.equal(10);
    });
  });

  describe("slices", function() {
    it("takes an input of 10 and returns 5", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size(10);
      expect(testPizza.sliceAmount()).to.equal("5 slices");
    });
  });
});
