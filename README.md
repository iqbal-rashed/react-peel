# React Peel

<div style="text-align: center; margin: auto;">
  <img src="docs/public/logo.png" height="200" style="object-fit: contain;">

</div>

<br>

> Important Note: This is the first release of the library, so if you encounter any issues, please submit them. Your feedback is greatly appreciated. Contributors are also welcome!

[<img src="https://img.shields.io/badge/React Peel - JS-010101?&style=for-the-badge&logo=Npm"/>](https://www.npmjs.com/package/react-peel)

`react-peel` is a React library that serves as a wrapper around the [peel.js](https://github.com/andrewplummer/peel-js) library created by Andrew Plummer.

The library allows you to create realistic peeling effects in your React applications. It comes with a set of props and events to customize and control the peeling behavior.

## **Check out the docs at https://react-peel.vercel.app**

## Installation

To install `react-peel` in your project, use the following command:

```sh
npm install react-peel
```

## Basic usage

```jsx
import React from "react";
import { PeelWrapper, PeelTop, PeelBottom, PeelBack } from "react-peel";

const MyComponent = () => {
  return (
    <PeelWrapper height={200} width={200} drag>
      <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
      <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
      <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
    </PeelWrapper>
  );
};

export default MyComponent;
```

This basic example demonstrates how to set up a peel effect using react-peel. You can customize the appearance, size, and behavior of the peel by adjusting the props and styles passed to the components within the PeelWrapper.

## PeelWrapper Props

The `PeelWrapper` component provides the following props to customize the peeling effect:

| Props           | Type                                                                                                                                                                                                                    | Note                                                                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`           | `MutableRefObject<any> \| undefined`                                                                                                                                                                                    | Reference to the Peel object, containing values and methods.                                                                                                  |
| `className`     | `string \| undefined`                                                                                                                                                                                                   | Represents the class of PeelWrapper.                                                                                                                          |
| `height`        | `string \| undefined`                                                                                                                                                                                                   | Sets the height of PeelWrapper.                                                                                                                               |
| `width`         | `string \| undefined`                                                                                                                                                                                                   | Sets the width of PeelWrapper.                                                                                                                                |
| `options`       | `object \| undefined`                                                                                                                                                                                                   | Options to pass to the underlying peel.js constructor. [See options here](https://andrewplummer.github.io/peel-js/#options).                                  |
| `peelPosition`  | `{ x: number, y: number } \| undefined`                                                                                                                                                                                 | The position of the peel effect. This point is the position of the corner that is being peeled back.                                                          |
| `corner`        | `{ x: number, y: number } \| "TOP_LEFT" \| "TOP_RIGHT" \| "BOTTOM_LEFT" \| "BOTTOM_RIGHT" \| undefined`                                                                                                                 | The corner for the effect to peel back from. Can be 2 arguments as x,y coordinates or a single argument as a corner name. Default is the bottom right corner. |
| `constraints`   | `{ x: number, y: number } \| "TOP_LEFT" \| "TOP_RIGHT" \| "BOTTOM_LEFT" \| "BOTTOM_RIGHT" \| undefined \| Array<{ x: number, y: number } \| "TOP_LEFT" \| "TOP_RIGHT" \| "BOTTOM_LEFT" \| "BOTTOM_RIGHT" \| undefined>` | List of constraints on the distance of the peel. Can be 2 arguments as x,y coordinates or a single argument as a corner name.                                 |
| `drag`          | `boolean \| undefined`                                                                                                                                                                                                  | A shorthand for setting the `@drag` event to set the peel position to the mouse.                                                                              |
| `mode`          | `"book" \| "calendar" \| undefined`                                                                                                                                                                                     | A shortcut for setting predefined `constraints`. Currently `"book"` and `"calendar"`.                                                                         |
| `fadeThreshold` | `number \| undefined`                                                                                                                                                                                                   | A threshold above which the top layer will begin to fade out. The threshold is between 0 (no peel) and 1 (top layer is fully peeled off).                     |
| `timeAlongPath` | `number \| undefined`                                                                                                                                                                                                   | Sets the peel effect to a point in time (between 0 and 1) along a previously specified path. Will throw an error if no path exists.                           |
| `peelPath`      | `number[] \| undefined`                                                                                                                                                                                                 | A path along which the peel will follow. This can be a flat line segment or a bezier curve.                                                                   |

## Contribution

Contributions are welcome! Feel free to check out the [Contributing Guide](https://github.com/iqbal-rashed/react-peel/blob/main/.github/contributing.md) before making a pull request.
