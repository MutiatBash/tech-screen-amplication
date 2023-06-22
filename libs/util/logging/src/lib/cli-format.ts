import { format } from "winston";
import { Format } from "logform";
import { inspect } from "util";
<<<<<<< HEAD

const clc = {
  bold: (text: string) => `\x1B[1m${text}\x1B[0m`,
=======
import { LEVEL, MESSAGE, SPLAT } from "triple-beam";
const clc = {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  green: (text: string) => `\x1B[32m${text}\x1B[39m`,
  yellow: (text: string) => `\x1B[33m${text}\x1B[39m`,
  red: (text: string) => `\x1B[31m${text}\x1B[39m`,
  magentaBright: (text: string) => `\x1B[95m${text}\x1B[39m`,
  cyanBright: (text: string) => `\x1B[96m${text}\x1B[39m`,
};

const colorScheme: Record<string, (text: string) => string> = {
  info: clc.green,
  error: clc.red,
  warn: clc.yellow,
  debug: clc.magentaBright,
  verbose: clc.cyanBright,
};

export const customFormat = (): Format =>
  format.printf(({ context, level, timestamp, message, ms, ...meta }) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const color = colorScheme[level];
    const cyanBright = clc.cyanBright;

<<<<<<< HEAD
    const componentName = meta["component"];

    // Deduplicate meta component
    meta["component"] = undefined;

    const stringifiedMeta = JSON.stringify(meta);
    const formattedMeta = inspect(JSON.parse(stringifiedMeta), {
      colors: true,
      depth: null,
=======
    // Deduplicate meta component
    /* istanbul ignore next */
    const {
      component: componentName,
      [LEVEL]: metaLevel,
      [MESSAGE]: metaMessage,
      [SPLAT]: metaSplat,
      ...metadata
    } = meta;

    const formattedMeta = inspect(metadata, {
      colors: true,
      depth: null,
      compact: true,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    });

    return (
      `${cyanBright(`[${componentName}]`)} ` +
      `${color(level)} ` +
      ("undefined" !== typeof timestamp ? `${timestamp} ` : "") +
      ("undefined" !== typeof context
        ? `${cyanBright("[" + context + "]")} `
        : "") +
      `${color(message)} ` +
      `${formattedMeta}` +
      ("undefined" !== typeof ms ? ` ${cyanBright(ms)}` : "")
    );
  });
