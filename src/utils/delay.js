export const delay = async (ms = 1000) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, Math.min(10000, Math.abs(ms)));
});
