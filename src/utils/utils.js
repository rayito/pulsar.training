export default {
  leadZeros: (number) => `0${number}`.slice(-2),
  parseDate: (input) => {
    const parts = input.match(/(\d+)/g);
    // note parts[1]-1
    return new Date(parts[2], parts[1] - 1, parts[0]);
  },
};
