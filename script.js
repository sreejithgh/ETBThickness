// PLOT 1
data = [
  {
    x: ["CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [200, 200, 200, 200, 200],
    type: "bar",
    name: "GSB",
    xaxis: "x1",
    barmode: "stack",
    marker: { color: "C69B7B" },
  },
  {
    x: [ "CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [200, 175, 160, 125, 105],
    type: "bar",
    name: "ETB",
    xaxis: "x1",
    barmode: "stack",
    marker: { color: "73777B" },
  },
  {
    x: ["CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [50, 50, 50, 50, 50],
    type: "bar",
    name: "AC/DBM",
    xaxis: "x1",
    barmode: "stack",
    marker: { color: "15133C" },
  },
  {
    x: ["CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [200, 200, 200, 200, 200],
    type: "bar",
    name: "GSB",
    xaxis: "x2",
    barmode: "stack",
    marker: { color: "C69B7B" },
  },
  {
    x: [ "CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [195, 170, 160, 145, 125],
    type: "bar",
    name: "ETB",
    xaxis: "x2",
    barmode: "stack",
    marker: { color: "73777B" },
  },
  {
    x: ["CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [90, 90, 70, 70, 70],
    type: "bar",
    name: "AC/DBM",
    xaxis: "x2",
    barmode: "stack",
    marker: { color: "15133C" },
  },
  {
    x: ["CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [200, 200, 200, 200, 200],
    type: "bar",
    name: "GSB",
    xaxis: "x3",
    barmode: "stack",
    marker: { color: "C69B7B" },
  },
  {
    x: [ "CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [210, 190, 150, 140, 130],
    type: "bar",
    name: "ETB",
    xaxis: "x3",
    barmode: "stack",
    marker: { color: "73777B" },
  },
  {
    x: ["CBR-5&#37;", "CBR-7&#37;", "CBR-10&#37;", "CBR-12&#37;", "CBR-15&#37;"],
    y: [110, 100, 105, 100, 90],
    type: "bar",
    name: "AC/DBM",
    xaxis: "x3",
    barmode: "stack",
    marker: { color: "15133C" },
  },
  
];
// var annotations = [
//   {
//     x: "20&#8451;",
//     y: 450 / 2,
//     text: "450",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "20&#8451;",
//     y: 450 + 115 / 2,
//     text: "115",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "25&#8451;",
//     y: 450 / 2,
//     text: "450",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "25&#8451;",
//     y: 450 + 125 / 2,
//     text: "125",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "30&#8451;",
//     y: 450 / 2,
//     text: "450",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "30&#8451;",
//     y: 450 + 135 / 2,
//     text: "135",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "35&#8451;",
//     y: 450 / 2,
//     text: "450",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "35&#8451;",
//     y: 450 + 145 / 2,
//     text: "145",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "40&#8451;",
//     y: 450 / 2,
//     text: "450",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
//   {
//     x: "40&#8451;",
//     y: 450 + 165 / 2,
//     text: "165",
//     font: {
//       size: 11,
//       color: "white",
//     },
//     xanchor: "center",
//     yanchor: "bottom",
//     showarrow: false,
//   },
// ];
var layout = {
  barmode: "stack",
  paper_bgcolor: "floralwhite",
  height: 700,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "custom_image",
    height: 600,
    width: 900,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
  // annotations: annotations,
  title:
    ' <b style="color:#f46074;">Design Flexible Pavement Thicknesses considering Emulsion Treated Base (ETB)</b> <br> Design MSA: 10, 25 and 50, Design CBR - 5%, 7%, 10%, 12% and 15% <br> IRC 37-2018',
  yaxis: {
    title: "Pavement Thickness, mm",
    // range: [0, 110],
    showgrid: true,
    showline: true,
    dtick: 50,
    // gridcolor: "#e8dff5",
  },
  // yaxis: { tickformat: '%' },
  xaxis: {
    domain: [0, 0.33],
    anchor: "x1",
    title: "Design MSA=10 <br> Subgrade CBR=5-15%",
  },
  xaxis2: {
    domain: [0.33, 0.66],
    title: "Design MSA=25 <br> Subgrade CBR=5-15%",
  },
  xaxis3: {
    domain: [0.67, 1.0],
    title: "Design MSA=50 <br> Subgrade CBR=5-15%",
  },
};

var config = {
  responsive: true,

  editable: true,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "custom_image",
    height: 600,
    width: 1300,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
};

Plotly.newPlot("myDiv1", data, layout, config);

// PLOT 2

// Plotly.newPlot(
//   "myDiv2",
//   [
//     {
//       x: ["20&#8451;", "25&#8451;", "30&#8451;", "35&#8451;", "40&#8451;"],
//       y: [450, 450, 450, 450, 450],
//       type: "bar",
//       name: "Unbound layer, Design MSA=50",
//       xaxis: "x1",
//       barmode: "stack",
//       marker: { color: "#e8c370" },
//     },
//     {
//       x: ["20&#8451;", "25&#8451;", "30&#8451;", "35&#8451;", "40&#8451;"],
//       y: [140, 150, 160, 180, 200],
//       type: "bar",
//       name: "Asphalt layer, Design MSA=50",
//       xaxis: "x1",
//       barmode: "stack",
//       marker: { color: "#c8cada" },
//     },
//     {
//       x: ["20&#8451;", "25&#8451;", "30&#8451;", "35&#8451;", "40&#8451;"],
//       y: [450, 450, 450, 450, 450],
//       type: "bar",
//       name: "Unbound layer, Design MSA=100",
//       xaxis: "x2",
//       barmode: "stack",
//       marker: { color: "#e0b045" },
//     },
//     {
//       x: ["20&#8451;", "25&#8451;", "30&#8451;", "35&#8451;", "40&#8451;"],
//       y: [165, 175, 190, 205, 235],
//       type: "bar",
//       name: "Asphalt layer, Design MSA=100",
//       xaxis: "x2",
//       barmode: "stack",
//       marker: { color: "#b4b6cc" },
//     },
//     {
//       x: ["20&#8451;", "25&#8451;", "30&#8451;", "35&#8451;", "40&#8451;"],
//       y: [450, 450, 450, 450, 450],
//       type: "bar",
//       name: "Unbound layer, Design MSA=200",
//       xaxis: "x3",
//       barmode: "stack",
//       marker: { color: "#c19020" },
//     },
//     {
//       x: ["20&#8451;", "25&#8451;", "30&#8451;", "35&#8451;", "40&#8451;"],
//       y: [190, 200, 220, 240, 270],
//       type: "bar",
//       name: "Asphalt layer, Design MSA=200",
//       xaxis: "x3",
//       barmode: "stack",
//       marker: { color: "#767ca4" },
//     },
//   ],

//   {
//     barmode: "stack",
//     paper_bgcolor: "floralwhite",
//     height: 590,
//     title:
//       '<b style="color:#f46074;">Design Asphalt Pavement Thickness Variability Based on Pavement Temperature (MAPT)</b><br> IRC 37-2018, Effective Subgrade CBR = 5',
//     yaxis: {
//       title: "Pavement Thickness, mm",
//       //   range: [0, 110],
//       showgrid: true,
//       showline: true,
//       dtick: 50,
//       // gridcolor: "#e8dff5",
//     },
//     // yaxis: { tickformat: '%' },
//     xaxis: {
//       domain: [0, 0.33],
//       anchor: "x1",
//       title: "Design MSA=50 <br> Subgrade CBR=5",
//     },
//     xaxis2: {
//       domain: [0.33, 0.66],
//       title: "Design MSA=100 <br> Subgrade CBR=5",
//     },
//     xaxis3: {
//       domain: [0.67, 1.0],
//       title: "Design MSA=200 <br> Subgrade CBR=5",
//     },
//   },
//   {
//     responsive: true,

//     editable: true,
//     toImageButtonOptions: {
//       format: "svg", // one of png, svg, jpeg, webp
//       filename: "custom_image",
//       height: 600,
//       width: 1300,
//       scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
//     },
//     displaylogo: false,
//   }
// );
