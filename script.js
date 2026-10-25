const form = document.getElementById("fare-form");
const fuelInput = document.getElementById("fuel");
const passengersInput = document.getElementById("passengers");
const feeInput = document.getElementById("fee");
const hint = document.getElementById("hint");
const result = document.getElementById("result");
const totalOwedEl = document.getElementById("total-owed");
const baseShareEl = document.getElementById("base-share");
const feeShownEl = document.getElementById("fee-shown");

function parseIntegerField(raw, { allowEmpty = false } = {}) {
  const trimmed = String(raw ?? "").trim();
  if (trimmed === "") {
    return allowEmpty ? { ok: true, value: 0 } : { ok: false };
  }
  if (!/^-?\d+$/.test(trimmed)) {
    return { ok: false };
  }
  return { ok: true, value: Number.parseInt(trimmed, 10) };
}

function hideResult() {
  result.hidden = true;
  result.classList.remove("is-visible");
}

function showError() {
  hideResult();
  hint.hidden = false;
}

function showResult(baseShare, fee, totalOwed) {
  hint.hidden = true;
  totalOwedEl.textContent = String(totalOwed);
  baseShareEl.textContent = String(baseShare);
  feeShownEl.textContent = String(fee);
  result.hidden = false;
  result.classList.remove("is-visible");
  void result.offsetWidth;
  result.classList.add("is-visible");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fuelParsed = parseIntegerField(fuelInput.value);
  const passengersParsed = parseIntegerField(passengersInput.value);
  const feeParsed = parseIntegerField(feeInput.value, { allowEmpty: true });

  const fuelOk = fuelParsed.ok && fuelParsed.value > 0;
  const passengersOk = passengersParsed.ok && passengersParsed.value >= 1;
  const feeOk = feeParsed.ok && feeParsed.value >= 0;

  if (!fuelOk || !passengersOk || !feeOk) {
    showError();
    return;
  }

  const totalPeople = passengersParsed.value + 1;
  const baseShare = Math.round(fuelParsed.value / totalPeople);
  const totalOwed = baseShare + feeParsed.value;
  showResult(baseShare, feeParsed.value, totalOwed);
});
