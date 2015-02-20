var Pizza = {
  toppings: "",
  size: function(newSize) {
    this.size = newSize;
  },
  sliceAmount: function(c) {
    return this.sliceAmount = this.size / 2 + " slices";
  }
};






// ---------------------------------------------------------

// if (this.size <= 9) {
//   return "2 slices";
// } else if (this.size > 9 && < 15) {
//   return "4 slices";
// } else if (this.size >=15) {
//
// } else {
//   return "something is wrong"
// }
