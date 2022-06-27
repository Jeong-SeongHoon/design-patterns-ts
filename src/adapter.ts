namespace adapter {
  class Target {
    request(): void {
      console.log("Target request");
    }
  }

  class Adaptee {
    adapteeRequest() {
      console.log("Adaptee request");
    }
  }

  class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
      super();
      this.adaptee = adaptee;
    }

    request(): void {
      this.adaptee.adapteeRequest();
      console.log("translate to Target request");
    }
  }

  const request = (target: Target) => {
    target.request();
  };

  request(new Target());
  request(new Adapter(new Adaptee()));
}
