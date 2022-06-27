namespace builder {
  class Computer {
    cpu: string;
    memory: string;
    disk: string;
    constructor(cpu: string, memory: string, disk: string) {
      this.cpu = cpu;
      this.memory = memory;
      this.disk = disk;
    }
    toString() {
      console.log(`cpu:${this.cpu}, memory:${this.memory}, disk:${this.disk}`);
    }
  }
  abstract class ComputerBuilder {
    protected cpu: string | undefined;
    protected memory: string | undefined;
    protected disk: string | undefined;
    abstract setCpu(cpu: string): ComputerBuilder;
    abstract setMemory(memory: string): ComputerBuilder;
    abstract setDisk(disk: string): ComputerBuilder;
    abstract build(): Computer;
  }

  class GameComputerBuilder extends ComputerBuilder {
    setCpu(cpu: string): ComputerBuilder {
      this.cpu = cpu;
      return this;
    }
    setMemory(memory: string): ComputerBuilder {
      this.memory = memory;
      return this;
    }
    setDisk(disk: string): ComputerBuilder {
      this.disk = disk;
      return this;
    }

    build(): Computer {
      return new Computer(this.cpu ?? "", this.memory ?? "", this.disk ?? "");
    }
  }

  const gameComputer = new GameComputerBuilder()
    .setCpu("intel")
    .setDisk("ssd")
    .setMemory("8g")
    .build();
  gameComputer.toString();
}
