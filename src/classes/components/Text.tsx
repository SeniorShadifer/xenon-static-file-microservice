import React from "react";

import "./Text.css";

interface TextProperties {
  children?: string | React.ReactNode;
}

export default class Text extends React.Component<TextProperties> {
  render() {
    return <p className="text">{this.props.children}</p>;
  }
}
