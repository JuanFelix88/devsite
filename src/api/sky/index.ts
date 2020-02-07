import ApplyStyle from "../apply-style";

interface LayerOptions {
  /**
   * @default 1
   */
  scale?: number;
  /**
   * @default 0
   */
  blur?: number;
  /**
   * @default 40
   */
  maximumItems?: number;
}

interface Layer {
  /**
   * For optional created Layer
   */
  options: LayerOptions;
  /**
   * Items HTML with meta data
   */
  items: ItemElement[];
}

interface GenerateList {
  list: string[];
  resolveList(): void;
}

interface ItemElement {
  /**
   * Opacity number
   */
  opactiy: number;
  /**
   * HTML Element
   */
  element: HTMLElement;
  /**
   * Position map
   */
  position: [number, number];
  /**
   * Size
   */
  size: [number, number];
  /**
   * Orientation
   * - radius directon number
   */
  orientation: number;
  /**
   * Velocity
   * - velocity number;
   * - `pixel`;
   */
  velocity: number;
  /**
   * Velocity
   * - velocity number;
   * - `pixel`;
   */
  rotationVelocity: number;
  /**
   * Rotation
   * - angle;
   * - `pixel`;
   */
  rotation: number;
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFromInterval(min: number, max: number) {
  // min and max included
  return Math.random() * (max - min + 1) + min;
}

class Engine {
  private timeLoop: number = 25;
  public activated: boolean = true;
  public layers: Layer[] = [];
  private loop: NodeJS.Timeout;
  public mode: "sleep" | "activated" = "sleep";
  public colorStage: number = 0;
  /**
   *
   *
   * ### Engine sky boxes
   * - Event loop;
   */
  constructor() {
    this.addLayer();
    this.loop = setInterval(() => {
      this.layers.forEach((layer, index) => {
        layer.items.forEach(item => {
          if (this.garbageRespawn(index, item)) this.calculateAndRender(item);
        });
      });
    }, this.timeLoop);
    // this.changeColor();
  }

  protected changeColor() {
    setInterval(() => {
      this.layers.forEach((layer, index) => {
        layer.items.forEach(item => {
          item.element.style.webkitTransition = "opacity 800ms ease-in-out";
          item.element.style.transition = `filter 750ms ease-in-out, 
            background-color 1450ms ease-in-out,
            opacity 800ms ease-in-out`;

          item.element.style.backgroundColor =
            this.colorStage === 0
              ? "#fa1a23"
              : this.colorStage === 1
              ? "#Ee9a"
              : "#72F";

          this.colorStage = this.colorStage === 2 ? 0 : this.colorStage + 1;
          item.element.style.webkitFilter = `opacity(${randomFromInterval(
            1,
            3
          )}%)`;
        });
      });
    }, 8000);
  }
  /**
   * Render by 5 miliseconds
   */
  protected __init__(): void {
    this.activated = true;
    if (this.mode === "activated") return;
    this.loop = setInterval(() => {
      this.layers.forEach((layer, index) => {
        layer.items.forEach(item => {
          if (this.garbageRespawn(index, item)) this.calculateAndRender(item);
        });
      });
    }, this.timeLoop);
  }
  /**
   *
   * @returns This method retuns false when item was removed and true when execute nothing
   */
  protected garbageRespawn(layer: number, item: ItemElement): boolean {
    const maximunWidth = window.innerWidth + 140;

    if (item.position[0] > maximunWidth) {
      const index = this.layers[layer].items.indexOf(item);
      this.layers[layer].items[index].position[0] = -170;
      return true;
    }

    return true;
  }
  /**
   *
   */
  public turnOff(): void {
    this.activated = false;
    clearInterval(this.loop);
  }
  /**
   *
   */
  public turnOn(): void {
    if (this.activated === false) this.__init__();
  }
  /**
   *
   * @param item
   */
  protected calculateAndRender(item: ItemElement): void {
    const { element } = item;

    item.position[0] += item.velocity;

    item.rotation += item.rotationVelocity;

    element.style.transform = `rotate(${item.rotation}deg)`;
    element.style.left = `${item.position[0]}px`;
  }
  /**
   * Add layer
   *
   */
  public addLayer(options?: LayerOptions): number {
    const index = this.layers.push({
      options: options || {},
      items: []
    });

    return index - 1;
  }
  /**
   * Add random box
   *
   */
  public addRandomBox(
    docId: string,
    layer: number,
    minSize = 60,
    maxSize = 200
  ): void {
    // @ts-ignore
    const element: HTMLElement = document.getElementById(docId);

    /**
     * - element Prototype contains a meta
     * informations of element, size, rotation, and others
     */
    const prototype: ItemElement = {
      opactiy: randomFromInterval(0, 1.8),
      rotationVelocity: randomFromInterval(-1.5, 1) / 12,
      element,
      orientation: randomIntFromInterval(0, 360),
      position: [
        randomIntFromInterval(-130, window.innerWidth + 100),
        randomIntFromInterval(-100, window.innerHeight + 100)
      ],
      rotation: randomIntFromInterval(0, 360),
      size: [
        randomIntFromInterval(minSize, maxSize),
        randomIntFromInterval(minSize, maxSize)
      ],
      velocity: randomFromInterval(0.5, 1) / 10
    };

    if (window.innerWidth > 2000) prototype.velocity += 0.3;

    element.style.left = `${prototype.position[0]}px`;

    element.style.webkitFilter = `
      opacity(${prototype.opactiy}%)
    `;
    element.style.top = `${prototype.position[1]}px`;
    element.style.transform = `rotate(${prototype.rotation}deg)`;
    element.style.width = `${prototype.size[0]}px`;
    element.style.height = `${prototype.size[1]}px`;

    // add in layer
    this.layers[layer].items.push(prototype);
  }
  /**
   *
   *
   *
   */
  public generateListBox(layer: number, amount: number): GenerateList {
    amount = amount > 30 ? 30 : amount;

    let idDefault = "ipx";
    const listId: string[] = [...Array(amount)].map((_, i) => {
      return i + idDefault;
    });

    return {
      list: listId,
      resolveList: () => {
        listId.forEach(id => this.addRandomBox(id, layer));
      }
    };
  }
}

export default new Engine();
