import React, {
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

/**
 * FadeIn Component
 * -----------------
 * Smoothly fades in child elements one by one.
 * Used across my portfolio to create clean, animated transitions.
 *
 * @param delay               Delay between each element fade-in (default: 80ms)
 * @param transitionDuration  Duration of each fade animation (default: 400ms)
 * @param wrapperTag          The wrapper element (default: div)
 * @param childTag            The tag used for each child element (default: div)
 * @param className           Optional class for the wrapper
 * @param childClassName      Optional class for each child
 * @param visible             Whether elements should be visible or hidden
 * @param onComplete          Callback once the animation finishes
 */

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxVisible, setMaxVisible] = useState(0);
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 80;
  const WrapperTag = props.wrapperTag || "div";
  const ChildTag = props.childTag || "div";
  const visible = props.visible ?? true;

  useEffect(() => {
    let totalChildren = React.Children.count(props.children);
    if (!visible) totalChildren = 0;

    if (totalChildren === maxVisible) {
      const timeout = setTimeout(() => {
        props.onComplete?.();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const increment = totalChildren > maxVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxVisible(maxVisible + increment);
    }, delay);

    return () => clearTimeout(timeout);
  }, [props.children, delay, maxVisible, visible, transitionDuration]);

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => (
        <ChildTag
          className={props.childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
            transform: maxVisible > i ? "none" : "translateY(15px)",
            opacity: maxVisible > i ? 1 : 0,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
