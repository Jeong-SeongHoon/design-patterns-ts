namespace decorator {
  interface Component {
    execute(): void;
  }

  class Espresso implements Component {
    execute(): void {
      console.log("+에스프레소");
    }
  }

  class Decorator implements Component {
    component: Component;
    constructor(component: Component) {
      this.component = component;
    }

    execute(): void {
      this.component.execute();
    }
  }

  class Americano extends Decorator {
    execute(): void {
      super.execute();
      console.log("+물");
    }
  }

  class Latte extends Decorator {
    execute(): void {
      super.execute();
      console.log("+우유");
    }
  }

  class Ice extends Decorator {
    execute(): void {
      super.execute();
      console.log("+얼음");
    }
  }

  (() => {
    const espresso = new Espresso();
    console.log(`<에스프레소 만들기>`);
    espresso.execute();

    const americano = new Americano(espresso);
    console.log(`<아메리카노 만들기>`);
    americano.execute();

    const latte = new Latte(espresso);
    console.log(`<라떼 만들기>`);
    latte.execute();

    const iceAmericano = new Ice(americano);
    console.log(`<아이스 아메리카노 만들기>`);
    iceAmericano.execute();

    const iceLatte = new Ice(latte);
    console.log(`<아이스 라떼 만들기>`);
    iceLatte.execute();
  })();
}
