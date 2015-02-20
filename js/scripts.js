var Pizza = {
  toppings: "",
  size: function(newSize) {
    this.size = newSize;
  },
  sliceAmount: function(c) {
    return this.sliceAmount = this.size / 2 + " slices";
  }
};

$(function() {
  $("form#pizza-info").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#pizza-size").val();
    var newPizza = { size: inputtedSize };

    $("ul#user-pizza").text("Your pizza is " + newPizza.size + " inches");
  });
});
