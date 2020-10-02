// 5
// a
var car = {
  brand: 'Nissan',
  getBrand: function () {
    console.log(this.brand);
  },
};

var getCarBrand = car.getBrand;

// Det er kun funktionen der findes i getCarBrand
// brand property eksistere ikke længere, da den ligger på car.
// kan ses ved at console logge getCarBrand
console.log('car: ', car);
console.log('getCarBrand: ', getCarBrand);

var car = {
  brand: 'Nissan',
  getBrand: function () {
    console.log(this.brand);
  },
};

car.getBrand;
