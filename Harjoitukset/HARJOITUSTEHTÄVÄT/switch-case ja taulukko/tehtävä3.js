function muunnaTauluksi() {
  var jono = [];
  jono = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var t = 0; t < jono[j].length; t++)
    {
      taulu += '<td>' + jono[j][t] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('taulunen').innerHTML = taulu;
}
