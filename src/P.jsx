import React from "react";

export default function P(props) {
  return (
    <>
      <p style={{ color: "red" }}>{props.children}</p>
    </>
  );
}
