var Chart = require('chart.js');

var ctx = document.getElementById('pie-chart').getContext('2d');
var yellowGradient = ctx.createLinearGradient(0, 0, 0, 120);
yellowGradient.addColorStop(0, "#FFE39C");
yellowGradient.addColorStop(1, "#FFBA9C");

var purpleGradient = ctx.createLinearGradient(0, 0, 0, 60);
purpleGradient.addColorStop(0, "#BC9CFF");
purpleGradient.addColorStop(1, "#8BA4F9");

var greenGradient = ctx.createLinearGradient(0, 60, 0, 120);
greenGradient.addColorStop(0, "#6FCF97");
greenGradient.addColorStop(1, "#66D2EA");

var myChart = new Chart(ctx, {
  type: 'doughnut',

  data: {
    labels: ['Удовлетворительно', 'Хорошо', 'Великолепно'],
    datasets: [{
      backgroundColor: [purpleGradient, greenGradient, yellowGradient],
      hoverBackgroundColor: [purpleGradient, greenGradient, yellowGradient],
      borderColor: 'rgb(255, 255, 255)',
      hoverBorderColor: 'rgb(255, 255, 255)',
      borderWidth: 4,
      hoverBorderWidth: 0,
      data: [25, 25, 50]
    }]
  },
  options: {
    animation: {
      animateScale: false,
      animateRotate: false
    },
    cutoutPercentage: 85,
    legend: false,
    tooltips: {
      enabled: false
    }
  }
});

myChart.canvas.parentNode.style.height = '120px';
myChart.canvas.parentNode.style.width = '120px';