namespace factory_method {
  interface Ship {
    operation(): void;
  }

  class WhiteShip implements Ship {
    operation(): void {
      console.log("WhiteShip");
    }
  }

  class BlackShip implements Ship {
    operation(): void {
      console.log("BlackShip");
    }
  }

  interface ShipFactory {
    createShip(): Ship;
  }

  class WhiteShipFactory implements ShipFactory {
    createShip(): WhiteShip {
      return new WhiteShip();
    }
  }

  class BlackShipFactory implements ShipFactory {
    createShip(): BlackShip {
      return new BlackShip();
    }
  }

  const whiteShip = new WhiteShipFactory().createShip();
  const blackShip = new BlackShipFactory().createShip();

  whiteShip.operation();
  blackShip.operation();
}
