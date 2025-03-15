var ctx = document.getElementById('myChart').getContext('2d');

// Creăm un grafic gol
var myChart = new Chart(ctx, {
    type: 'bar', // Tipul graficului
    data: {
        labels: [], // Fără etichete inițial
        datasets: [{
            label: 'Date',
            data: [], // Fără valori inițial
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Adăugăm etichete și valori în grafic
myChart.data.labels = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie'];
myChart.data.datasets[0].data = [10, 20, 30, 40];

// Actualizăm graficul
myChart.update();

