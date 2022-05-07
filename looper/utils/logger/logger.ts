// TODO: Add log colors
export class Logger {
  public static Info(...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.log(...args);
  }

  public static Warn(...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.warn(...args);
  }

  public static Debug(...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.debug(...args);
  }

  public static Error(...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.error(...args);
  }
}

export default Logger;
