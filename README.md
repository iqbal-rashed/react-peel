# React Peel

<div style="text-align: center; margin: auto;">
  <img src="docs/public/logo.png" height="200" style="object-fit: contain;" alt="React Peel Logo" />
</div>

<br>

> **Important Note:** This is the first release of `react-peel`. If you encounter any issues or have suggestions, please open an issue. Contributions and feedback are highly appreciated!

[<img src="https://img.shields.io/badge/React Peel-JS-010101?&style=for-the-badge&logo=Npm" alt="npm package" />](https://www.npmjs.com/package/react-peel)

`react-peel` is a React wrapper around the original [peel.js](https://github.com/andrewplummer/peel-js) library by Andrew Plummer. It enables realistic peel effects in React applications with a flexible API to customize and control the peeling behavior.

## 🌐 Documentation

Explore the full documentation and examples at:  
**https://iqbal-rashed.github.io/react-peel**

## Installation

Install `react-peel` via npm:

```bash
npm install react-peel
```

## Basic Usage Example

```jsx
import React from "react";
import { PeelWrapper, PeelTop, PeelBack, PeelBottom } from "react-peel";

const MyComponent = () => {
  return (
    <PeelWrapper height={200} width={200} drag>
      <PeelTop style={{ backgroundColor: "#81afcb" }} />
      <PeelBack style={{ backgroundColor: "#a0c7df" }} />
      <PeelBottom style={{ backgroundColor: "#688394" }} />
    </PeelWrapper>
  );
};

export default MyComponent;
```

This example sets up a peel effect with customizable layers and enables drag interaction. You can style the peel layers and control the peel behavior through the available props.

## PeelWrapper Props

| Prop            | Type                                                                                                    | Description                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`           | `MutableRefObject<any> \| undefined`                                                                    | Reference to the Peel instance, exposing methods and internal state.                                                                      |
| `className`     | `string \| undefined`                                                                                   | CSS class applied to the PeelWrapper container.                                                                                           |
| `height`        | `string \| number \| undefined`                                                                         | Sets the height of the peel container.                                                                                                    |
| `width`         | `string \| number \| undefined`                                                                         | Sets the width of the peel container.                                                                                                     |
| `options`       | `object \| undefined`                                                                                   | Configuration options passed to the underlying peel.js instance. [See peel.js options](https://andrewplummer.github.io/peel-js/#options). |
| `peelPosition`  | `{ x: number; y: number } \| undefined`                                                                 | Coordinates of the peel position, representing the corner currently peeling.                                                              |
| `corner`        | `{ x: number; y: number } \| "TOP_LEFT" \| "TOP_RIGHT" \| "BOTTOM_LEFT" \| "BOTTOM_RIGHT" \| undefined` | Defines the corner from which the peel originates. Can be coordinate or corner name. Defaults to `"BOTTOM_RIGHT"`.                        |
| `constraints`   | `{ x: number; y: number } \| string \| Array<{ x: number; y: number } \| string> \| undefined`          | List of constraints limiting how far the peel can extend, defined as coordinates or corner names.                                         |
| `drag`          | `boolean \| undefined`                                                                                  | Enables peel dragging using mouse/touch to move the peel position dynamically.                                                            |
| `mode`          | `"book" \| "calendar" \| undefined`                                                                     | Predefined peel modes with specific constraints. Supported: `"book"` and `"calendar"`.                                                    |
| `fadeThreshold` | `number \| undefined`                                                                                   | Threshold (0 to 1) at which the top peel layer begins to fade out as it is peeled away.                                                   |
| `timeAlongPath` | `number \| undefined`                                                                                   | Animates the peel along a predefined path at a given time (between 0 and 1). Throws error if no path is set.                              |
| `peelPath`      | `number[] \| undefined`                                                                                 | Defines the path (line or bezier curve) along which the peel moves.                                                                       |

## Contribution

Contributions are very welcome! If you'd like to contribute, please review the [Contributing Guide](https://github.com/iqbal-rashed/react-peel/blob/main/.github/contributing.md) before submitting a pull request.

---
