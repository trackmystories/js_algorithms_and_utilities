// currency convertor
// temperature convertor

let print = console.log;

function celsiusToFahreheit(f) {
  let c = (f * 9) / 5;
  let c2f = c + 32;
  return c2f;
}

function fahreheitToCelsius(c) {
  let f = c - 32;
  let f2c = (f * 5) / 9;
  return f2c;
}

function fahreheitToKalvin(f) {
  let k = f - 32;
  let k2 = (k * 5) / 9;
  let f2k = k2 + 273.15;
  return f2k;
}

function celsiusToKalvin(c) {
  let k = c + 273.15;
  return k;
}

print(celsiusToFahreheit(10));

print(fahreheitToCelsius(50));

print(fahreheitToKalvin(50));

print(celsiusToKalvin(30));