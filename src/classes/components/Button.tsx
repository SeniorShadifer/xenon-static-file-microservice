import type { ReactNode } from "react";
import React from "react";

interface ButtonProperties {
  children?: React.ReactNode;

  onClick?: CallableFunction;
}

export default class Button extends React.Component<ButtonProperties> {
  render(): ReactNode {
    return (
      <button
        className="button"
        onClick={() => {
          if (typeof this.props.onClick != "undefined") {
            this.props.onClick();
          }
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
