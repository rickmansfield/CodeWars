function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

//===============or==============
function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }

//==============or===============
function getCount(str) {
    var vowelsCount = 0;
    vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length:0;
  }