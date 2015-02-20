describe("Pizza", function() {
  describe("size", function() {
    it("takes diameter input and returns that input +in", function() {
    var testPizza = Object.create(Pizza);
    testPizza.size(10);
    expect(testPizza.size).to.equal(10);
    });

    it("takes diameter input and returns that input +in", function() {
    var testPizza = Object.create(Pizza);
    testPizza.size(12);
    expect(testPizza.size).to.equal(12);
    });
  });

  describe("sliceAmount", function() {
    it("takes an input of 10 and returns 5 slices", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size(10);
      expect(testPizza.sliceAmount()).to.equal("5 slices");
    });

    it("takes an input of 12 and returns 6 slices", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size(12);
      expect(testPizza.sliceAmmount()).to.equal("6 slices");
    });
  });
});
