// Made by Sam Brunno badge
// eslint-disable-next-line no-console
console.log('%cMade by Sam Brunno', 'background: #f74902; font-weight: normal; padding: 10px 14px; color: white');

document.addEventListener('DOMContentLoaded', () => {
  // @ts-ignore
  let timeout;

  // if (super.exists()) {
  // @ts-ignore
  window.addEventListener(
    'scroll',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (event) => {
      // If there's a timer, cancel it
      // @ts-ignore
      if (timeout) {
        // @ts-ignore
        window.cancelAnimationFrame(timeout);
      }

      // Setup the new requestAnimationFrame()
      // @ts-ignore
      timeout = window.requestAnimationFrame(() => {
        if (window.pageYOffset > 20) {
          document.body.classList.add('sticky-header');
        } else {
          document.body.classList.remove('sticky-header');
        }
        // @ts-ignore
      }, false);
    },
    // @ts-ignore
    50,
  );
});

// HMR (Hot Module Replacement)
if (module.hot) {
  module.hot.accept();
}
