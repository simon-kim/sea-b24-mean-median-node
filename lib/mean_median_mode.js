var MeanMedianMode = function() {

  var data = process.argv.slice(2, process.argv.length).map(Number).sort(function(a, b) {
    return a-b;
    });

  this.mean = function(data) {
    var sum = 0;
      for(i=0; i < data.length; i++) {
        sum += data[i];
      }
    var avg = (sum / (data.length));
    return avg;
  };

  this.median = function(data) {
    var middle;

    if(data.length % 2 === 0) {
      middle = Math.floor(data.length / 2);
    } else {
      middle = Math.floor((data.length - 1) / 2);
    }
    return data[middle];
  };

  this.mode = function(data) {
    var count = {};
    var frequency = 0, highest = 0;
    data.forEach(function(num) {
      if(count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
      if(frequency < count[num]) {
        highest = num;
        frequency = count[num];
      }
    });
    return highest;
  };
};

var mmm = new MeanMedianMode();
module.exports = mmm;
