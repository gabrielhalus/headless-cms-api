import time from './time';

const COLOR = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  fgBlack: '\x1b[30m',
  fgRed: '\x1b[31m',
  fgGreen: '\x1b[32m',
  fgYellow: '\x1b[33m',
  fgBlue: '\x1b[34m',
  fgMagenta: '\x1b[35m',
  fgCyan: '\x1b[36m',
  fgWhite: '\x1b[37m',
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
};

const logger = {
  info: (message: String = '') => {
    console.log(`[${time.now()}] INFO: ${message}${COLOR.reset}`);
  },
  warn: (message: String = '') => {
    console.log(`${COLOR.fgYellow}[${time.now()}] WARN: ${message}${COLOR.reset}`);
  },
  error: (message: String = '') => {
    console.log(`${COLOR.bgRed}[${time.now()}] ERROR: ${message}${COLOR.reset}`);
  },
};

export default logger;
