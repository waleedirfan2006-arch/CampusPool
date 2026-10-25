// We wrap everything in DOMContentLoaded so the buttons 100% work!
document.addEventListener('DOMContentLoaded', function() {
    
    // Toggle Info Panel
    document.getElementById('infoToggle').addEventListener('click', function() {
        document.getElementById('infoPanel').classList.toggle('hidden');
    });

    // Quick Fuel Add Buttons
    const fuelInput = document.getElementById('fuel');
    
    document.getElementById('add500').addEventListener('click', function() {
        const current = parseInt(fuelInput.value) || 0;
        fuelInput.value = current + 500;
    });

    document.getElementById('add1000').addEventListener('click', function() {
        const current = parseInt(fuelInput.value) || 0;
        fuelInput.value = current + 1000;
    });

    document.getElementById('clearFuel').addEventListener('click', function() {
        fuelInput.value = '';
    });

    // Passenger Stepper Logic (+ / -)
    const passInput = document.getElementById('passengers');
    
    document.getElementById('plusPass').addEventListener('click', () => {
        passInput.value = parseInt(passInput.value) + 1;
    });

    document.getElementById('minusPass').addEventListener('click', () => {
        if(parseInt(passInput.value) > 1) {
            passInput.value = parseInt(passInput.value) - 1;
        }
    });

    // Core Calculation Logic
    document.getElementById('calculateBtn').addEventListener('click', function() {
        const fuelInputVal = document.getElementById('fuel').value;
        const passVal = document.getElementById('passengers').value;
        const feeInputVal = document.getElementById('fee').value;

        const errorHint = document.getElementById('error-hint');
        const resultContainer = document.getElementById('result-container');
        
        const fuel = parseInt(fuelInputVal);
        const passengers = parseInt(passVal);
        const fee = feeInputVal === '' ? 0 : parseInt(feeInputVal);

        // Check for errors
        if (isNaN(fuel) || fuel <= 0) {
            resultContainer.classList.add('hidden');
            errorHint.classList.remove('hidden');
            return;
        }

        errorHint.classList.add('hidden');

        // Math calculation (Driver is added here)
        const totalPeople = passengers + 1; 
        const baseShare = Math.round(fuel / totalPeople);
        const totalOwed = baseShare + fee;

        document.querySelector('#final-amount span').textContent = totalOwed;
        
        // Explicit explanation for new users
        document.getElementById('math-breakdown').innerHTML = 
            `Divided among <strong>${totalPeople} total people</strong> (${passengers} passengers + 1 driver).<br> ${fuel} Rs ÷ ${totalPeople} = ${baseShare} Rs.`;
            
        document.getElementById('fee-breakdown').textContent = 
            `(Base Share: ${baseShare} + Transfer Fee: ${fee})`;

        resultContainer.classList.remove('hidden');
    });

});