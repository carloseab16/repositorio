var trace1 = {
    x: [26.29281609,25.48281955,25.95613165,26.14422033,26.09388889,25.67335329,24.96338225,25.65263889,25.60833333,26.12243056,26.23808495,25.49694444,26.23455533,26.07693452,26.07028302,26.04715278,25.86041667,26.08930556,25.17876344,25.01491935,25.85868056,26.29312331,26.04416667,26.89428763,26.27390548,26.38848672,26.07737154,26.08775429,26.70453564,25.92534052,25.82608399,26.04976197,26.71553817,26.62985694,27.25050278,27.96565614,26.99998584,28.28911728,27.70274621,27.95593171,27.81333912,28.54348118,28.55860215,27.09042969,26.24967448,27.07731855,25.9302265,27.81079313,25.5630662,25.70104167,26.64808333,26.33125569,25.98723949,25.10933333,26.24190705,26.78035714,26.57410714,26.02460064,25.99652778,24.75898438],
    y: [115.3482393,76.15827421,77.44897363,64.40300306,63.30891759,100.0288993,64.26944032,182.3122868,91.2826097,48.78655245,29.38159021,23.25919858,22.04562499,23.72986257,27.2324475,27.16333155,43.52118051,70.99775193,72.42324615,122.6333051,66.78760926,88.96684499,88.78012644,76.91566574,334.7661212,23.46467817,23.34599901,23.72081161,23.97475808,12.24645963,16.99653595,32.11702342,29.72137327,12.5509643,218.1122327,10.51153951,11.25619195,10.03769321,3.535216238,13.89211779,16.92131073,8.337476077,13.01077751,17.68407895,22.35738038,27.03068182,12.28481876,5.154238095,18.64740599,25.41192261,15.90403815,17.26965769,20.33671878,6.418118741,6.949786252,11.0919833,11.15166671,11.81482976,22.47784518,7.133218664],
    name:'TempOUT - Rain',
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [26.29281609,25.48281955,25.95613165,26.14422033,26.09388889,25.67335329,24.96338225,25.65263889,25.60833333,26.12243056,26.23808495,25.49694444,26.23455533,26.07693452,26.07028302,26.04715278,25.86041667,26.08930556,25.17876344,25.01491935,25.85868056,26.29312331,26.04416667,26.89428763,26.27390548,26.38848672,26.07737154,26.08775429,26.70453564,25.92534052,25.82608399,26.04976197,26.71553817,26.62985694,27.25050278,27.96565614,26.99998584,28.28911728,27.70274621,27.95593171,27.81333912,28.54348118,28.55860215,27.09042969,26.24967448,27.07731855,25.9302265,27.81079313,25.5630662,25.70104167,26.64808333,26.33125569,25.98723949,25.10933333,26.24190705,26.78035714,26.57410714,26.02460064,25.99652778,24.75898438],
    y: [9.498936458,8.231061958,8.584753223,8.485708458,8.156772424,8.317546224,8.239028977,9.36649794,8.966379594,9.34650814,8.783528069,7.280042742,8.377895426,8.814357793,7.388380825,8.824682973,7.799594134,7.873843218,8.67686658,8.945924694,9.367783863,9.068744685,8.662843537,8.794107022,8.286470901,8.124492885,8.383643551,7.878374722,9.229997166,8.353666834,9.143005769,9.348188722,9.517490522,9.131340753,11.3553676,11.15224797,11.07504875,13.38257098,11.88359643,11.76345071,13.98500264,13.63957501,12.25634891,11.00046677,7.815638304,9.026753156,9.324164882,13.06220991,6.396821429,6.600548727,8.033404528,7.804832014,6.030865246,6.502969597,6.727851068,7.989702778,7.681307391,6.846668856,6.265136781,4.546081205],
    xaxis: 'x2',
    yaxis: 'y2',

    name:'TempOUT - SolarRad',
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [26.29281609,25.48281955,25.95613165,26.14422033,26.09388889,25.67335329,24.96338225,25.65263889,25.60833333,26.12243056,26.23808495,25.49694444,26.23455533,26.07693452,26.07028302,26.04715278,25.86041667,26.08930556,25.17876344,25.01491935,25.85868056,26.29312331,26.04416667,26.89428763,26.27390548,26.38848672,26.07737154,26.08775429,26.70453564,25.92534052,25.82608399,26.04976197,26.71553817,26.62985694,27.25050278,27.96565614,26.99998584,28.28911728,27.70274621,27.95593171,27.81333912,28.54348118,28.55860215,27.09042969,26.24967448,27.07731855,25.9302265,27.81079313,25.5630662,25.70104167,26.64808333,26.33125569,25.98723949,25.10933333,26.24190705,26.78035714,26.57410714,26.02460064,25.99652778,24.75898438],
    y: [2.248134579,2.276413015,2.148313174,1.928852893,1.807586796,1.834237416,2.101178735,2.344987745,2.229835723,1.989089954,2.258137566,2.090953283,2.013763344,1.925386837,2.012271733,2.110375958,2.027407136,1.778019324,2.084543011,2.28177576,2.095114928,2.034355505,2.113600959,2.195015105,1.979832993,1.924131289,1.981301595,2.004388489,2.043601443,2.02453455,1.95776718,2.121285396,2.270163115,1.739272908,1.762689107,1.774643973,2.009294131,1.97191358,1.9,2.038888889,2.561111111,2.089393939,2.027272727,1.683333333,1.683333333,1.65,1.616666667,1.666666667,2.051729328,2.156907717,2.184341051,2.117989193,1.827080587,1.935903287,1.841478056,1.967196842,1.800924586,1.965817212,2.322724659,2.472902489],
    xaxis: 'x3',
    yaxis: 'y3',
    name:'TempOUT - WindSpeed',
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace4 = {
    x: [26.29281609,25.48281955,25.95613165,26.14422033,26.09388889,25.67335329,24.96338225,25.65263889,25.60833333,26.12243056,26.23808495,25.49694444,26.23455533,26.07693452,26.07028302,26.04715278,25.86041667,26.08930556,25.17876344,25.01491935,25.85868056,26.29312331,26.04416667,26.89428763,26.27390548,26.38848672,26.07737154,26.08775429,26.70453564,25.92534052,25.82608399,26.04976197,26.71553817,26.62985694,27.25050278,27.96565614,26.99998584,28.28911728,27.70274621,27.95593171,27.81333912,28.54348118,28.55860215,27.09042969,26.24967448,27.07731855,25.9302265,27.81079313,25.5630662,25.70104167,26.64808333,26.33125569,25.98723949,25.10933333,26.24190705,26.78035714,26.57410714,26.02460064,25.99652778,24.75898438],
    y: [3.371608743,2.850086843,3.042936287,2.749439467,2.669925729,2.533462178,2.530699386,2.596940897,2.788761378,3.114266568,3.243741852,2.820753397,3.046393721,3.227778069,2.577490819,2.645114951,2.59348364,2.430815927,2.446178739,2.639853012,2.791794779,3.17291164,2.913447568,3.102277261,2.906574216,2.974283757,2.779576138,2.478713919,2.873241972,2.569212071,2.586804406,2.323344031,2.809724347,2.912627571,4.34544126,4.220440988,4.743055831,5.52154124,4.531233003,5.282869167,4.903357685,5.409302662,5.050651042,4.394097222,4.482986111,4.185521953,3.996625819,5.307204079,9.528370633,9.740885406,9.722143213,9.495470555,9.514930729,9.514482562,9.452898619,8.756995677,8.909578828,9.13531946,8.775348287,9.549066726],
    xaxis: 'x4',
    yaxis: 'y4',
    name:'TempOUT - UV',
    mode: 'markers',
    type: 'scatter'
  };


  var data = [trace1, trace2, trace3, trace4];
  
  var layout = {
    title: 'Relaciones TempOut con Dimensiones(2012 -2016)',
    xaxis: {domain: [0, 0.45]},
    yaxis: {domain: [0, 0.45]},
    xaxis4: {
      domain: [0.55, 1],
      anchor: 'y4'
    },
    xaxis3: {
      domain: [0, 0.45],
      anchor: 'y3'
    },
    xaxis2: {domain: [0.55, 1]},
    yaxis2: {
      domain: [0, 0.45],
      anchor: 'x2'
    },
    yaxis3: {domain: [0.55, 1]},
    yaxis4: {
      domain: [0.55, 1],
      anchor: 'x4'
    }
  };
  
  Plotly.newPlot('myDiv3', data, layout);