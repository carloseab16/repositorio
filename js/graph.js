Plotly.d3.csv("data.csv ", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'TempOut'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'LowTemp'),
  line: {color: '#cf1762'}
}


var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'LowTemp'),
  line: {color: '#cf1762'}
}

var data = [trace1,trace2,trace3];

var layout = {
  title: 'Time Series with Rangeslider',
  xaxis: {
    autorange: true,
    range: ['2012-01-31', '2017-01-01'], 
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1m',
          step: 'month',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '6m',
          step: 'month',
          stepmode: 'backward'
        },
        {step: 'all'}
      ]},
      rangeslider: {range: ['2012-01-31', '2017-01-01']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [20.75898437500001,40.75898437500001], 
    type: 'linear'
  }
};

Plotly.newPlot('myDiv', data, layout);
})