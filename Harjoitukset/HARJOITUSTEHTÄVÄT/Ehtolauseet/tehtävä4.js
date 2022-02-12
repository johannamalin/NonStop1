function ajoneuvo()
  {
    var age = parseInt(document.getElementById('ika').value);
    if(age < 16)
    {
      document.write("Voit ajaa polkupyörällä...");
    }
    else if(age < 18)
    {
      document.write("Voit ajaa mopoa!");
    }
    else {
      document.write("Voit ajaa autoa!");
    }
  }
