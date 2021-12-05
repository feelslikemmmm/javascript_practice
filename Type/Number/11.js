const v = 1 / 0;
console.log(v); // Infinity

console.log('Infinity', v === Infinity); // true
console.log('Number.isFinite', Number.isFinite(v)); // false
