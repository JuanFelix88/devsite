import { setInterval } from "timers";

interface ScrollDefinition {
  /**
   * @default  minHeight
   */
  isGreaterThan?: number;
  /**
   * @default maxHeight
   */
  isLowerThan?: number;
  /**
   * @default "vertical"
   */
  orientation?: "vertical";
  /**
   * @default false
   */
  onlyOnce?: boolean;
}

type callback = (scroll?: number) => any;

class TaskExecute {
  private receivedMsgScrolled: number[] = [];
  private lastMsgScrolled: number | undefined;
  private loop: NodeJS.Timeout | undefined;
  private tasks: CallbackScroll[] = [];
  public maxScroll = document.documentElement.offsetHeight;
  public minScroll = 0;

  public get actuallMsg(): number | undefined {
    return this.receivedMsgScrolled[this.receivedMsgScrolled.length - 1];
  }

  public get length(): number {
    return this.tasks.length;
  }

  constructor(public interval: number) {
    // observer
    this.__init__();
  }

  private __init__() {
    setInterval(() => {
      if (this.actuallMsg === undefined) return;

      this.executeTasks(this.actuallMsg);
      this.receivedMsgScrolled = [];
    }, this.interval);
  }

  public registerTask(observer: ScrollDefinition, callback: callback): void {
    if (this.tasks.length === 0) defineObserverScroll();

    this.tasks.push([observer, callback, false]);
  }

  public registerMsg(scroll: number): void {
    this.receivedMsgScrolled.push(scroll);
  }

  private executeTasks(scroll: number): void {
    this.maxScroll =
      this.maxScroll === 0
        ? document.documentElement.offsetHeight
        : this.maxScroll;

    this.tasks.forEach((item, index) => {
      const [option, callback, executed] = item;
      if (
        scroll > (option.isGreaterThan || this.minScroll) &&
        scroll < (option.isLowerThan || this.maxScroll) &&
        (option.onlyOnce ? !executed : true)
      ) {
        callback(scroll);
        this.tasks[index][2] = true;
      }
    });
  }
}

const tasks = new TaskExecute(100);

type CallbackScroll = [ScrollDefinition, callback, boolean];

let activated: boolean = false;

function defineObserverScroll(): void {
  document.body.onscroll = () => {
    const scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    tasks.registerMsg(scroll);
  };
  activated = true;
}

/**
 *
 *
 *
 *
 *
 * ### Use Page EventScroll
 * - define event on scroll option defined;
 * - create multiple observers;
 */
export function createEventScroll(
  observer: ScrollDefinition,
  callback: callback
): void {
  if (tasks.length === 0) defineObserverScroll();

  tasks.registerTask(observer, callback);
}

export function setActiveEventScroll(test: boolean): void {
  if (test) {
    if (activated) return;
    defineObserverScroll();
  } else {
    if (!activated) return;
    document.body.onscroll = null;
    activated = false;
  }
}
