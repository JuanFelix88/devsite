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

type callback = () => any;

type CallbackScroll = [ScrollDefinition, callback, boolean];

let callbacks: CallbackScroll[] = [];

function defineObserverScroll(): void {
  const elementor = document.getElementById("root");
  if (elementor !== null)
    elementor.onscroll = event => {
      // @ts-ignore
      const element: HTMLElement = event.target;

      const scroll = element.scrollTop;
      const maxScroll = element.scrollHeight - element.offsetHeight;
      const minScroll = 0;

      callbacks.forEach((item, index) => {
        const [option, callback, executed] = item;
        if (
          scroll > (option.isGreaterThan || minScroll) &&
          scroll < (option.isLowerThan || maxScroll) &&
          (option.onlyOnce ? !executed : true)
        ) {
          callback();
          callbacks[index][2] = true;
        }
      });
    };
}

/**
 * ### Use Page EventScroll
 * - define event on scroll option defined;
 * - create multiple observers;
 */
export function usePageEventScroll(
  observer: ScrollDefinition,
  callback: callback
): void {
  if (callback.length === 0) defineObserverScroll();

  callbacks.push([observer, callback, false]);
}
