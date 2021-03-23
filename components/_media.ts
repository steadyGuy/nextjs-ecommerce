const breakpoints = [320, 480, 768, 992, 1200];

const mq = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`,
);

export default mq;
