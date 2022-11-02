export const delay = async (ms = 1000) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, Math.max(10000, Math.abs(ms)));
});
