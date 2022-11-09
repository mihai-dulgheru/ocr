// Unsharp Masking: http://situs.biomachina.org/hn06/talks/Baldwin/convolution_filters_new.pdf; page 33
const a = 1;
const kernel = [
  [(1 / 9) * -1 * a, (1 / 9) * -1 * a, (1 / 9) * -1 * a],
  [(1 / 9) * -1 * a, (1 / 9) * (9 + 8 * a), (1 / 9) * -1 * a],
  [(1 / 9) * -1 * a, (1 / 9) * -1 * a, (1 / 9) * -1 * a],
];

module.exports = { kernel };
