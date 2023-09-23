$(function(){

	$(".link-item").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
  });
  $(".nums").change(function(){
    $("input").removeClass("active");
    $(this).addClass("active");
  });
       
});

function viewPassword1() {
  let passField1 = document.getElementById("password-field1");
  let iconEye1 = document.getElementById("icon-eye1") ;
  if (passField1.type === "password") {
    passField1.type = "text";
    iconEye1.classList = "fa-regular fa-eye";


  } else {
    passField1.type = "password";
    iconEye1.classList ="fa-regular fa-eye-slash";
  }
}

function viewPassword2() {
  let passField2 = document.getElementById("password-field2");
  let iconEye2 = document.getElementById("icon-eye2") ;
  if (passField2.type === "password") {
    passField2.type = "text";
    iconEye2.classList = "fa-regular fa-eye";


  } else {
    passField2.type = "password";
    iconEye2.classList ="fa-regular fa-eye-slash";
  }
}
function viewPassword3() {
  let passField3 = document.getElementById("password-field3");
  let iconEye3 = document.getElementById("icon-eye3") ;
  if (passField3.type === "password") {
    passField3.type = "text";
    iconEye3.classList = "fa-regular fa-eye";


  } else {
    passField3.type = "password";
    iconEye3.classList ="fa-regular fa-eye-slash";
  }
}

// const arabicLabels = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو'];
// const data = [10, 20, 15, 25, 30];
// const ctx = document.getElementById('myChart').getContext('2d');

// Chart.defaults.font.family = 'droid'; // Replace 'Arial' with your preferred Arabic font

// const chartConfig = {
//   type: 'graphs', // Change this to the chart type you want (e.g., 'bar', 'line', etc.)
//   data: {
//     labels: arabicLabels,
//     datasets: [
//       {
//         label: 'البيانات',
//         data: data,
//         backgroundImage: 'linear-gradient(182deg, #0A7FEB -70.64%, rgba(255, 255, 255, 0.00) 98.72%);', // Customize the colors as needed
//         borderColor: '#1165BF',
//         borderWidth: 1
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'الشهور'
//         }
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'القيمة'
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top'
//       },
//       tooltip: {
//         enabled: true,
//         rtl: true, // Enable right-to-left text direction for tooltips
//       }
//     }
//   }
// };

const categories = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const data = [0, 20, 15, 25, 30,0];
Highcharts.chart('container', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''
    
  },
  xAxis: {
    categories: categories,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data,
    color:'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF', // Customize the line color
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)' // Customize the marker color
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500 // Define the maximum width for responsiveness
      },
      chartOptions: {
        legend: {
          enabled: false // Hide the legend on small screens
        }
      }
    }]
  }
});
