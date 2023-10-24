let transparent = document.getElementById("transparent");
let colored = document.getElementById("colored");


function calculatePrice() {
    let baseWidth = document.getElementById('baseWidth').value;
    let neonLength = document.getElementById('neonLength').value; 
    let baseHeight = document.getElementById('baseHeight').value;
    let elementCount = document.getElementById('elementCount').value;

    let totalPrice = baseWidth + neonLength + baseHeight * elementCount;

    document.getElementById('estimatedCost').textContent = totalPrice;
}

let sliders = document.querySelectorAll('input[type=range]');

transparent.addEventListener("change", () => {
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
})

colored.addEventListener("change", () => {
    sliders.forEach(slider => {
        let span = document.getElementById(slider.id + 'Value');
        span.textContent = slider.value;
    
        slider.oninput = function() {
            span.textContent = this.value;
    
            let baseWidth = document.getElementById('baseWidth').value * 5;
            let neonLength = document.getElementById('neonLength').value * 2000; 
            let baseHeight = document.getElementById('baseHeight').value * 20;
            let elementCount = document.getElementById('elementCount').value * 100;
    
            let totalPrice = baseWidth + neonLength + baseHeight + elementCount*10;
    
            document.getElementById('estimatedCost').textContent = totalPrice;
        }
    });
})

