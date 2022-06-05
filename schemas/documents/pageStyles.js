import React from "react";

const headings = {
  display: "block",
  fontFamily: "'Raleway', sans-serif",
  fontWeight: "700",
  lineHeight: "1",
  marginBottom: "0",
};

export function H1(props) {
  const style = {
    fontSize: "3rem",
    textTransform: "capitalize",
    color: "#c69609",
  };

  return <h1 style={{ ...headings, ...style }}>{props.children}</h1>;
}

export function H2(props) {
  const style = {
    fontSize: "2.5rem",
    textTransform: "capitalize",
    color: "#1d262a",
  };

  return <h2 style={{ ...headings, ...style }}>{props.children}</h2>;
}

export function H3(props) {
  const style = {
    fontSize: "2rem",
    textTransform: "capitalize",
    color: "#5e5e5e",
  };

  return <h3 style={{ ...headings, ...style }}>{props.children}</h3>;
}

export function H4(props) {
  const style = {
    fontSize: "1.8rem",
    textTransform: "capitalize",
    color: "#353535",
  };

  return <h4 style={{ ...headings, ...style }}>{props.children}</h4>;
}

export function H5(props) {
  const style = {
    fontSize: "1.6rem",
    fontStyle: "italic",
    textTransform: "capitalize",
    color: "#c69609",
  };

  return <h5 style={{ ...headings, ...style }}>{props.children}</h5>;
}

export function H6(props) {
  const style = {
    fontSize: "1.4rem",
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#5e5e5e",
  };

  return <h6 style={{ ...headings, ...style }}>{props.children}</h6>;
}
