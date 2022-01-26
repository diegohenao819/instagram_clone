import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Container } from "semantic-ui-react";

export default function LayoutBasic(props) {
  const { children } = props;
  console.log(props.children.type)
  return (
    <Fragment>
      <h1>HEADER LAYTOUT BASIC</h1>
      <Container className="layout-basic">{children}</Container>
    </Fragment>
  );
}
