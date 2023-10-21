function calculatePrice() {
    let baseWidth = document.getElementById('baseWidth').value;
    let neonLength = document.getElementById('neonLength').value; // convert to cm
    let baseHeight = document.getElementById('baseHeight').value;
    let elementCount = document.getElementById('elementCount').value;

    let totalPrice = baseWidth * 100 + neonLength + baseHeight * elementCount;

    document.getElementById('estimatedCost').textContent = totalPrice;
}

// Update slider values dynamically
let sliders = document.querySelectorAll('input[type=range]');

sliders.forEach(slider => {
    let span = document.getElementById(slider.id + 'Value');
    span.textContent = slider.value;

    slider.oninput = function() {
        span.textContent = this.value;

        let baseWidth = document.getElementById('baseWidth').value * 100;
        let neonLength = document.getElementById('neonLength').value * 8000; 
        let baseHeight = document.getElementById('baseHeight').value * 50;
        let elementCount = document.getElementById('elementCount').value * 1500;

        let totalPrice = baseWidth + neonLength + baseHeight + elementCount*10;

        document.getElementById('estimatedCost').textContent = totalPrice;
    }
});