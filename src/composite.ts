interface Component {
  getPrice(): number;
}

class Item implements Component {
  price: number;
  constructor(price: number) {
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
}

class Bag implements Component {
  items: Component[];
  constructor(items: Component[]) {
    this.items = items;
  }
  getPrice(): number {
    return this.items.reduce((acc, cur) => {
      return (acc += cur.getPrice());
    }, 0);
  }
}

const component = [
  new Item(1), // 1
  new Item(1), // 1
  new Item(1), // 1
  new Bag([new Item(5), new Item(5)]), // 10
  new Bag([new Item(3), new Item(3)]), // 6
  new Bag([new Bag([new Item(1), new Item(2)]), new Item(3)]), // 6
];
console.log(component.reduce((acc, cur) => (acc += cur.getPrice()), 0));
