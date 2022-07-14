namespace chain_of_responsibility {
  abstract class Handler {
    private nextHandler: Handler | undefined;

    setNextHandler(handler: Handler) {
      this.nextHandler = handler;
      return handler;
    }

    handle(request: string): string | null {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }

      return null;
    }
  }

  class AuthHandler extends Handler {
    handle(request: string) {
      console.log("인증");
      return super.handle(request);
    }
  }

  class LogHandler extends Handler {
    handle(request: string) {
      console.log("로깅");
      return super.handle(request);
    }
  }

  class PrintHandler extends Handler {
    handle(request: string) {
      console.log(request);
      return super.handle(request);
    }
  }

  const authHandler = new AuthHandler();
  const logHandler = new LogHandler();
  const printHandler = new PrintHandler();

  authHandler.setNextHandler(logHandler).setNextHandler(printHandler);
  authHandler.handle("안녕");
}
