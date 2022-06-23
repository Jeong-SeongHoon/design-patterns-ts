interface Computer {
  mouse: Mouse;
  keyboard: Keyboard;
  execute(): void;
}

class SamsungComputer implements Computer {
  mouse: SamsungMouse;
  keyboard: SamsungKeyboard;
  constructor(mouse: SamsungMouse, keyboard: SamsungKeyboard) {
    this.mouse = mouse;
    this.keyboard = keyboard;
  }
  execute(): void {
    this.mouse.execute();
    this.keyboard.execute();
  }
}
class LGComputer implements Computer {
  mouse: LGMouse;
  keyboard: LGKeyboard;
  constructor(mouse: LGMouse, keyboard: LGKeyboard) {
    this.mouse = mouse;
    this.keyboard = keyboard;
  }
  execute(): void {
    this.mouse.execute();
    this.keyboard.execute();
  }
}

interface Mouse {
  execute(): void;
}
class SamsungMouse implements Mouse {
  execute(): void {
    console.log("SamsungMouse");
  }
}
class LGMouse implements Mouse {
  execute(): void {
    console.log("LGMouse");
  }
}

interface Keyboard {
  execute(): void;
}
class SamsungKeyboard implements Keyboard {
  execute(): void {
    console.log("SamsungKeyboard");
  }
}
class LGKeyboard implements Keyboard {
  execute(): void {
    console.log("LGKeyboard");
  }
}

interface ComputerFactory {
  computerPartsFactory: ComputerPartsFactory;
  create(): Computer;
}
class SamsungComputerFactory implements ComputerFactory {
  computerPartsFactory: ComputerPartsFactory;
  constructor(computerPartsFactory: ComputerPartsFactory) {
    this.computerPartsFactory = computerPartsFactory;
  }
  create(): Computer {
    return new SamsungComputer(
      this.computerPartsFactory.createMouse(),
      this.computerPartsFactory.createKeyboard()
    );
  }
}
class LGComputerFactory implements ComputerFactory {
  computerPartsFactory: ComputerPartsFactory;
  constructor(computerPartsFactory: ComputerPartsFactory) {
    this.computerPartsFactory = computerPartsFactory;
  }
  create(): Computer {
    return new LGComputer(
      this.computerPartsFactory.createMouse(),
      this.computerPartsFactory.createKeyboard()
    );
  }
}

interface ComputerPartsFactory {
  createMouse(): Mouse;
  createKeyboard(): Keyboard;
}

class BasicSamsungComputerPartsFactory implements ComputerPartsFactory {
  createMouse(): Mouse {
    return new SamsungMouse();
  }
  createKeyboard(): Keyboard {
    return new SamsungKeyboard();
  }
}
class BasicLGComputerPartsFactory implements ComputerPartsFactory {
  createMouse(): Mouse {
    return new LGMouse();
  }
  createKeyboard(): Keyboard {
    return new LGKeyboard();
  }
}

const c1 = new SamsungComputerFactory(
  new BasicSamsungComputerPartsFactory()
).create();
const c2 = new LGComputerFactory(new BasicLGComputerPartsFactory()).create();
c1.execute();
c2.execute();
