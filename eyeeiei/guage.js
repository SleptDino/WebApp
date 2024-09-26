const maxWeight = 100;  // Set your maximum weight here (in kilograms)
const gaugeFill = document.getElementById('gaugeFill');
const gaugeText = document.getElementById('gaugeText');

// Function to update the gauge chart based on weight
function updateGauge(weight) {
    const percentage = (weight / maxWeight) * 100;
    const dashOffset = 100 - percentage;
            
    gaugeFill.style.strokeDashoffset = dashOffset;
    gaugeText.textContent = weight.toFixed(2) + ' kg';
}

// Simulate receiving weight data from the load cell (Replace with real-time data fetching)
function getWeightData() {
// For demo purposes, this function simulates weight readings.
// In reality, you would use fetch or WebSocket to get data from your load cell system.
    return Math.random() * maxWeight;  // Random weight for demo
}
setInterval(async () => {
    const response = await fetch('http://147.50.228.21:5000/weight');
    const data = await response.json();
    updateGauge(data.weight);  // Update gauge chart with new weight
}, 1000);

// Update the gauge every second with new weight data
setInterval(() => {
    const weight = getWeightData();
    updateGauge(weight);
    }, 1000);  // Adjust the interval based on your real-time data update rate

// Servo control function (replace with actual control logic)
function controlServo() {
    // JavaScript code to control the servo motor here
    alert('Servo motor control triggered');
}

function getWeightData() {
    return fetch('/api/weight')
        .then(response => response.json())
        .then(data => data.weight);  // Assuming the API returns { "weight": <value> }
}