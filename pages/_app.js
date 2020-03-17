import App from "next/app";
import React from "react";
import { Provider } from "react-globally";
import "../styles/styles.scss";
import { initialState } from "../utils/state";

export default class MyApp extends App {
  render() {
    console.log(initialState);
    const { Component, pageProps } = this.props;
    return (
      <Provider globalState={initialState}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
