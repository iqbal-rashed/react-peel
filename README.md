# React Peel

<div align="center">
  <img src="docs/public/logo.png" height="150" alt="React Peel Logo" />

  <p><strong>Realistic peel effects for React</strong></p>

  [![npm](https://img.shields.io/npm/v/react-peel?style=flat-square)](https://www.npmjs.com/package/react-peel)
  [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-peel?style=flat-square)](https://bundlephobia.com/package/react-peel)
  [![npm downloads](https://img.shields.io/npm/dm/react-peel?style=flat-square)](https://www.npmjs.com/package/react-peel)
  [![license](https://img.shields.io/npm/l/react-peel?style=flat-square)](https://github.com/iqbal-rashed/react-peel/blob/main/LICENSE)
</div>

---

React Peel is a React wrapper around [peel.js](https://github.com/andrewplummer/peel-js) that makes page peel, page flip, scratch card, and reveal effects easy to build. It ships with presets, hooks, and animation helpers, with no runtime dependencies beyond React.

## Features

- Presets for common effects like sticky notes, page flips, and scratch cards
- `usePeel` hook for programmatic control
- Animation utilities and easing helpers
- Full TypeScript types
- Works with React 16.8+ and popular frameworks

## Documentation

Full documentation and examples:
https://iqbal-rashed.github.io/react-peel

## Installation

```bash
npm install react-peel
```

## Basic Usage

```tsx
import { PeelWrapper, PeelTop, PeelBack, PeelBottom } from "react-peel";

function MyComponent() {
  return (
    <PeelWrapper height={200} width={200} drag>
      <PeelTop style={{ backgroundColor: "#81afcb" }} />
      <PeelBack style={{ backgroundColor: "#a0c7df" }} />
      <PeelBottom style={{ backgroundColor: "#688394" }}>
        Content revealed here
      </PeelBottom>
    </PeelWrapper>
  );
}
```

The three layer components map to the peel effect layers:

- `PeelTop` is the layer that peels back.
- `PeelBack` is the underside of the peeled layer.
- `PeelBottom` is the content revealed underneath.

## Presets

```tsx
<PeelWrapper preset="stickyNote" height={150} width={150} drag>
  <PeelTop style={{ backgroundColor: "#fff9c4", padding: 16 }}>
    Remember this
  </PeelTop>
  <PeelBack style={{ backgroundColor: "#fff59d" }} />
  <PeelBottom style={{ backgroundColor: "#f5f5f5" }} />
</PeelWrapper>
```

Available presets:
`stickyNote`, `pageFlip`, `revealCard`, `calendar`, `envelope`, `giftCard`, `photoAlbum`, `scratchCard`

## Programmatic Control

```tsx
import { PeelWrapper, PeelTop, PeelBack, PeelBottom, usePeel } from "react-peel";

function RevealCard() {
  const { peelRef, animate, reset } = usePeel();

  const handleReveal = async () => {
    await animate({
      to: { x: -100, y: -100 },
      duration: 800,
      easing: "easeOut",
    });
  };

  return (
    <>
      <button onClick={handleReveal}>Reveal</button>
      <button onClick={reset}>Reset</button>

      <PeelWrapper ref={peelRef} height={200} width={200}>
        <PeelTop style={{ backgroundColor: "#e3f2fd" }} />
        <PeelBack style={{ backgroundColor: "#bbdefb" }} />
        <PeelBottom style={{ backgroundColor: "#90caf9" }}>
          Surprise
        </PeelBottom>
      </PeelWrapper>
    </>
  );
}
```

## Notes

- React Peel injects a small global style block for the peel layers (you can override the classes in your own CSS).
- For SSR frameworks like Next.js, render the component on the client (for example with `"use client"`).

## License

MIT (c) [Iqbal Rashed](https://github.com/iqbal-rashed)

---

<div align="center">
  <sub>Built on top of <a href="https://github.com/andrewplummer/peel-js">peel.js</a> by Andrew Plummer</sub>
</div>
