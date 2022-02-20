import React from "react";

function PrinterWrapper(props) {
  return <div ref={props.printableRef}>{props.children}</div>;
}

export default PrinterWrapper;
