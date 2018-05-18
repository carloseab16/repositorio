Plotly.d3.csv('data.csv', function(err, rows){

function unpack(rows, key) {
  return rows.map(function(row) {
    return row[key];
  });
}

var trace = {
  x: unpack(rows, 'Date'),
  close: unpack(rows, 'TempOut'),
  high: unpack(rows, 'HiTemp'),
  low: unpack(rows, 'LowTemp'),
  open: unpack(rows, 'HeatIndex'),

  // cutomise colors
  increasing: {line: {color: 'black'}},
  decreasing: {line: {color: 'red'}},

  type: 'ohlc',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace];

var layout = {
 title: 'Outliers de Ucayali (2012 -2016)',
  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
    autorange: true,
    title: 'Fechas',
	 rangeselector: {
        x: 0,
        y: 1.2,
        xanchor: 'left',
        font: {size:8},
        buttons: [{
            step: 'meses',
            stepmode: 'backward',
            count: 1,
            label: '1 mes'
        }, {
            step: 'mes',
            stepmode: 'backward',
            count: 6,
            label: '6 meses'
        }, {
            step: 'Todos',
            label: 'Todos'
        }]
      }
  },
  yaxis: {
    autorange: true,
  }
};

Plotly.plot('myDiv2', data, layout);
});