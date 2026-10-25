document.getElementById('calculateBtn').addEventListener('click', function() {
    // Retrieve input values
    const totalKm = parseFloat(document.getElementById('totalKm').value) || 0;
    const fuelEff = parseFloat(document.getElementById('fuelEff').value) || 1;
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value) || 0;
    const totalPeople = parseInt(document.getElementById('totalPeople').value) || 1;
    const driverIncome = parseFloat(document.getElementById('driverIncome').value) || 0;
    const transferFee = parseFloat(document.getElementById('transferFee').value) || 0;

    // Validation checks
    if (totalPeople < 1) {
        alert("Total people in the car must be at least 1.");
        return;
    }

    // 1. Calculate fuel consumption and cost
    const totalLitres = totalKm / fuelEff;
    const totalFuelCost = totalLitres * fuelPrice;

    // 2. Add driver compensation and transfer fees to total trip expense
    const grandTotalExpense = totalFuelCost + driverIncome + transferFee;

    // 3. Determine passenger count (Total people minus 1 driver)
    const passengerCount = Math.max(1, totalPeople - 1);

    // 4. Split total cost evenly among passengers
    const costPerPassenger = grandTotalExpense / passengerCount;

    // 5. Display results in DOM
    document.getElementById('resFuelLitres').innerText = totalLitres.toFixed(2) + ' Liters';
    document.getElementById('resFuelCost').innerText = 'Rs. ' + totalFuelCost.toFixed(2);
    document.getElementById('resDriverTotal').innerText = 'Rs. ' + driverIncome.toFixed(2);
    document.getElementById('resPerPassenger').innerText = 'Rs. ' + costPerPassenger.toFixed(2);

    document.getElementById('resSummaryText').innerText = 
        `Shared across ${passengerCount} passenger(s) for a ${totalKm} km trip (${totalPeople} total people in car).`;

    // Reveal results card
    document.getElementById('resultsCard').classList.remove('hidden');
});