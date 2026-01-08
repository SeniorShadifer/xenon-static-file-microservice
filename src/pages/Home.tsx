import React from "react";

import Container from "../classes/components/Container";
import PageTitle from "../classes/components/PageTitle";
import Title from "../classes/components/Title";
import Text from "../classes/components/Text";

import { logger, stack_list } from "../main";

import catchFatal from "../functions/catchFatal";
import StackElement from "../classes/other/StackElement";

export default class Home extends React.Component {
  render(): React.ReactNode {
    //<temp>
    try {
      logger.debug(stack_list);

      var current_stack = stack_list.getCurrentStack();
      logger.debug(current_stack);

      current_stack.setCurrentElement(
        new StackElement(
          "experimental",
          "/",
          new Map([["message", "Hello, world!"]])
        )
      );
      logger.debug(current_stack);

      stack_list.setCurrentStack(current_stack);
      logger.debug(stack_list);
    } catch (error) {
      catchFatal(error);
    }
    //</temp>

    return (
      <>
        <>
          <PageTitle title="Home"></PageTitle>
        </>
        <Container center_y fullscreen_x wrap>
          <img src="favicon.png"></img>
          <Title>Hello, world!</Title>
          <Text>
            Welcome to "Xenon" - open-source, free and secure web-service for
            I2P.
          </Text>
        </Container>
      </>
    );
  }
}
