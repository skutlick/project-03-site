let ratings = ['G', 'PG', 'PG-13', 'R'];
//let years = ['1991','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','NA'];

// Metric variable for function inputs
let metric = "worldwide_gross";
//let metric = "production_cost"
//let metric2 = "worldwide_gross";

// Create a function to calculate the average of a metric
function metricMean(films, rating, metric) {
  // Initialize variables to increment
  let count = 0;
  let total = 0;

  // Loop through the array of films
  for (let i = 0; i < films.length; i++) {

    // Store the film at index `i` for evaluation
    let row = films[i];

    //Compare 'mpaa' value to 'rating' provided as argument
    if (row.mpaa == rating){

      // Increment by `metric` argument value
      total += row[metric];
      // Increment by one
      count += 1;
    }
  }

  // Calculate the average value
  let meanValue = total / count;

  // Return the calculated average
  return meanValue;
}

// Invoke the metric average function
// Calculate the average for each rating individually
let metricG = metricMean(films, "G", metric);
let metricPG = metricMean(films, "PG", metric);
let metricPG_13 = metricMean(films, "PG-13", metric);
let metricR = metricMean(films, "R", metric);

// Create an array of rating averages
let metricArray = [metricG, metricPG, metricPG_13, metricR];

// Create a function to plot the rating average metric results
function plotMetric(metricArray, ratings, metric){

  let trace1 = {
    x: ratings,
    y: metricArray,
    type: "bar"
  };

  let data = [trace1];

  // Pass metric to chart title
  let layout = {
    title: `${metric} by MPAA Rating `
  };

  Plotly.newPlot("plot", data, layout);
}
// Invoke the plot creating function
plotMetric(metricArray, ratings, metric);