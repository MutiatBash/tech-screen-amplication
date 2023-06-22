import React from "react";
import "./Label.scss";
export type LabelTypes = "normal" | "error";

export type Props = React.HTMLProps<HTMLSpanElement> & {
  text: string;
  type?: LabelTypes;
};

const CLASS_NAME = "amplication-label";

export function Label({ text, ...props }: Props) {
  return (
<<<<<<< HEAD
    <span {...props} className={`${CLASS_NAME}__${props.type || ""}`}>
=======
    <span
      {...props}
      className={`${CLASS_NAME}__${props.type || ""} ${props.className || ""}`}
    >
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      {text}
    </span>
  );
}
