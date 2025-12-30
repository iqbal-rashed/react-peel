# React Peel

<div align="center">
  <img src="docs/public/logo.png" height="150" alt="React Peel Logo" />
  
  <p><strong>Create realistic peeling effects in React applications</strong></p>

  [![npm](https://img.shields.io/npm/v/react-peel?style=flat-square)](https://www.npmjs.com/package/react-peel)
  [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-peel?style=flat-square)](https://bundlephobia.com/package/react-peel)
  [![npm downloads](https://img.shields.io/npm/dm/react-peel?style=flat-square)](https://www.npmjs.com/package/react-peel)
  [![license](https://img.shields.io/npm/l/react-peel?style=flat-square)](https://github.com/iqbal-rashed/react-peel/blob/main/LICENSE)
</div>

---

A powerful React wrapper for [peel.js](https://github.com/andrewplummer/peel-js) with hooks, presets, and animations. Create beautiful page peel, page flip, scratch card, and reveal effects with zero external dependencies.

## ✨ Features

- 🎨 **Pre-built Presets** - Ready-to-use effects for sticky notes, page flips, scratch cards, and more
- 🎣 **React Hooks** - `usePeel` hook for complete programmatic control
- ⚡ **Zero Dependencies** - Lightweight bundle with no runtime dependencies
- 🎬 **Smooth Animations** - Built-in easing functions and animation utilities
- 📦 **TypeScript Ready** - Full type definitions included
- 🎯 **Easy to Use** - Simple API with sensible defaults

## 📖 Documentation

Full documentation with interactive examples:
**https://iqbal-rashed.github.io/react-peel**

## 🚀 Installation

```bash
npm install react-peel
```

## 💡 Quick Start

```tsx
import { PeelWrapper, PeelTop, PeelBack, PeelBottom } from "react-peel";

function MyComponent() {
  return (
    <PeelWrapper height={200} width={200} drag>
      <PeelTop style={{ backgroundColor: "#81afcb" }}>
        Top Layer
      </PeelTop>
      <PeelBack style={{ backgroundColor: "#a0c7df" }} />
      <PeelBottom style={{ backgroundColor: "#688394" }}>
        Content Revealed!
      </PeelBottom>
    </PeelWrapper>
  );
}
```

## 🎨 Using Presets

```tsx
import { PeelWrapper, PeelTop, PeelBack, PeelBottom } from "react-peel";

// Sticky note effect
<PeelWrapper preset="stickyNote" height={150} width={150} drag>
  <PeelTop style={{ backgroundColor: "#fff9c4", padding: 16 }}>
    Remember to call! 📞
  </PeelTop>
  <PeelBack style={{ backgroundColor: "#fff59d" }} />
  <PeelBottom style={{ backgroundColor: "#f5f5f5" }} />
</PeelWrapper>
```

**Available presets:** `stickyNote`, `pageFlip`, `revealCard`, `calendar`, `envelope`, `giftCard`, `photoAlbum`, `scratchCard`

## 🎣 Programmatic Control

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
          🎉 Surprise!
        </PeelBottom>
      </PeelWrapper>
    </>
  );
}
```

## 📚 API Reference

### PeelWrapper Props

| Prop | Type | Description |
|------|------|-------------|
| `preset` | `PresetName` | Apply a preset configuration |
| `corner` | `CornerValue` | Corner to peel from (default: `"BOTTOM_RIGHT"`) |
| `drag` | `boolean` | Enable drag interaction |
| `mode` | `"book" \| "calendar"` | Predefined constraint modes |
| `fadeThreshold` | `number` | Threshold (0-1) to fade out top layer |
| `onPeelStart` | `(peel) => void` | Called when peeling starts |
| `onPeelProgress` | `(progress, peel) => void` | Called with progress (0-1) |
| `onPeelEnd` | `(peel) => void` | Called when peeling ends |

### usePeel Hook

```tsx
const { peelRef, animate, reset, setPosition, getProgress, stop, isAnimating } = usePeel();
```

### Animation Utilities

```tsx
import { animate, animatePeelPosition, loopPeel, peelHint, easings } from "react-peel";
```

## 🌟 Real-World Examples

- **Sticky Notes** - Interactive reminders with peel corners
- **Photo Album** - Book-style page flip galleries
- **Scratch Cards** - Lottery-style reveal effects
- **Product Cards** - E-commerce discount reveals
- **Gift Cards** - Dramatic code reveals
- **Magazines** - Multi-page publication viewers
- **Calendars** - Flip calendar animations
- **Envelopes** - Letter opening effects

See all examples in the [documentation](https://iqbal-rashed.github.io/react-peel).

## 🔧 Framework Support

- ✅ Next.js (with `"use client"`)
- ✅ Vite
- ✅ Create React App
- ✅ Remix
- ✅ Any React 16.8+ project

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](https://github.com/iqbal-rashed/react-peel/blob/main/.github/contributing.md) before submitting a pull request.

## 📄 License

MIT © [Iqbal Rashed](https://github.com/iqbal-rashed)

---

<div align="center">
  <sub>Built with ❤️ based on <a href="https://github.com/andrewplummer/peel-js">peel.js</a> by Andrew Plummer</sub>
</div>
