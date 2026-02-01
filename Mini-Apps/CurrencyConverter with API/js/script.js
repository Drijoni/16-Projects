// Frankfurter API - free, no API key, no rate limits
// https://www.frankfurter.dev/docs/
const API_LATEST = "https://api.frankfurter.dev/v1/latest";
const API_CURRENCIES = "https://api.frankfurter.dev/v1/currencies";

const selectEls = document.querySelectorAll("select");
const inputEls = document.querySelectorAll("input");
const dateEl = document.getElementById("date");
const messageEl = document.getElementById("message");
let rates = {};
const MAX_DIGITS = 12;

async function loadCurrencies() {
  try {
    const res = await fetch(API_CURRENCIES);
    if (!res.ok) throw new Error("Could not load currencies");
    const currencies = await res.json();
    return Object.keys(currencies).sort();
  } catch (err) {
    console.error(err);
    return ["EUR", "USD", "GBP", "JPY", "CHF"];
  }
}

async function loadRates() {
  try {
    const res = await fetch(API_LATEST);
    if (!res.ok) throw new Error("Could not load exchange rates");
    const data = await res.json();
    // Frankfurter returns rates relative to base; add base with rate 1 for conversion
    rates = { [data.base]: 1, ...data.rates };
    if (dateEl) dateEl.textContent = "Rates as of: " + data.date;
    if (messageEl) {
      messageEl.textContent = "";
      messageEl.className = "message";
    }
    return true;
  } catch (err) {
    console.error(err);
    if (messageEl) {
      messageEl.textContent = "Exchange rates unavailable. Check your connection.";
      messageEl.className = "message error";
    }
    if (dateEl) dateEl.textContent = "";
    return false;
  }
}

function buildOptions(codes) {
  return codes.map((code) => `<option value="${code}">${code}</option>`).join("");
}

function convert(fromIndex, toIndex) {
  const fromSelect = selectEls[fromIndex];
  const toSelect = selectEls[toIndex];
  const fromCode = fromSelect.value;
  const toCode = toSelect.value;
  const amount = parseFloat(inputEls[fromIndex].value) || 0;
  if (!rates[fromCode] || !rates[toCode]) return;
  const result = (amount * rates[toCode]) / rates[fromCode];
  inputEls[toIndex].value = result === 0 ? "" : result.toFixed(4).replace(/\.?0+$/, "");
}

function limitInput() {
  const val = inputEls[0].value;
  if (val.length > MAX_DIGITS) inputEls[0].value = val.slice(0, MAX_DIGITS);
}

async function init() {
  const codes = await loadCurrencies();
  const options = buildOptions(codes);
  selectEls.forEach((sel) => (sel.innerHTML = options));

  const loaded = await loadRates();
  if (!loaded) return;

  inputEls[0].addEventListener("input", () => {
    limitInput();
    convert(0, 1);
  });
  inputEls[0].addEventListener("keyup", () => convert(0, 1));

  selectEls[0].addEventListener("change", () => convert(0, 1));
  selectEls[1].addEventListener("change", () => convert(0, 1));
}

init();
