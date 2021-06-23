function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    

    for (let letter of str.toLowerCase()) 
    {

      if (vowels.includes(letter)) 
      {
        vowelsCount += 1;
      }
    }
    
    return vowelsCount;
  }

  console.log(getCount('aeiouiii'));