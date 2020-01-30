interface Transition {
  /**
   * Use to declare which style used in transition
   */
  optional?: string[];
  /**
   * `ms`
   * @default 100
   */
  time: number;
  /**
   * @default "linear"
   */
  typeTransition: "linear" | "ease-in" | "ease-out" | "ease-in-out";
}

function applyStyle(
  el: HTMLElement | null,
  style?: CSSStyleDeclaration,
  transition: Transition = {
    time: 100,
    typeTransition: "linear"
  }
) {
  if (el === null) return;

  if (!style)
    return (style?: CSSStyleDeclaration) => applyStyle(el, style, transition);

  Object.keys(style).forEach(key => {
    transition.optional.forEach(item => {
      el.style.transition += `${item} ${transition.time}ms ${transition.typeTransition}`;
    });
    el.style[key] = style[key];
  });
}

export default applyStyle;
