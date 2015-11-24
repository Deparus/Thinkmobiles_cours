var car = {
  speedometer: 0,
};

Object.defineProperties(car, {
  setSpeed: {
    value: function(value) {
      this.speedometer = value;
      return this;
    }
  },
  getSpeed: {
    value: function() {
      return this.speedometer;
    }
  },
  clearSpeed: {
    value: function() {
      this.speedometer = 0;
      return this;
    }
  }
});

car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed();