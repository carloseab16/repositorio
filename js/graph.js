Plotly.d3.csv("data.csv ", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'TempOut',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'TempOut'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'HiTemp',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'HiTemp'),
  line: {color: '#7F7F7F'}
}


var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'LowTemp',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'LowTemp'),
  line: {color: '#cf1762'}
}

var trace4 = {
  type: "scatter",
  mode: "lines",
  name: 'HeatIndex',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'HeatIndex'),
  line: {color: '#cf2817'}
}

var trace5 = {
  type: "scatter",
  mode: "lines",
  name: 'THW Index',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'THW Index'),
  line: {color: '#1762cf'}
}

var data = [trace1,trace2,trace3,trace4,trace5];

var layout = {
  title: 'Series temporales de Ucayali (2012 -2016)',
  xaxis: {
    autorange: true,
    range: ['2012-01-31', '2017-01-01'], 
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1mes',
          step: 'month',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '6meses',
          step: 'month',
          stepmode: 'backward'
        },
        {step: 'todos'}
      ]},
      rangeslider: {range: ['2012-01-31', '2017-01-01']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [1.75898437500001,40.75898437500001], 
    type: 'linear'
  }
};

Plotly.newPlot('myDiv', data, layout);
})