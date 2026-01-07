import React from "react";

interface TextInputProperties {
  children?: string | React.ReactNode;

  password?: boolean;
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: any;
}

export default class TextInput extends React.Component<TextInputProperties> {
  render(): React.ReactNode {
    return (
      <input
        type={this.props.password ? "password" : "text"}
        placeholder={this.props.placeholder}
        value={this.props.defaultValue}
        onChange={this.props.onChange}
        className={`text_input`}
        name={this.props.name}
        id={this.props.name}
      >
        {this.props.children}
      </input>
    );
  }
}
