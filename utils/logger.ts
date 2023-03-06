export class Logger {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  isDev() {
    return process.env.NODE_ENV === "development";
  }
  info(message: any) {
    if (this.isDev()) {
      console.info(`[INFO:${this.name}]: ${message}`);
    }
  }

  debug(message: any) {
    if (this.isDev()) {
      console.info(`[DEBUG:${this.name}]: ${message}`);
    }
  }

  warn(message: any) {
    if (this.isDev()) {
      console.warn(`[WARN:${this.name}]: ${message}`);
    }
  }

  error(message: any) {
    if (this.isDev()) {
      console.error(`[ERROR:${this.name}]: ${message}`);
    }
  }

  network(message: any) {
    if (this.isDev()) {
      console.log(`[NETWORK:${this.name}]: ${message}`);
    }
  }
}

export default Logger;
