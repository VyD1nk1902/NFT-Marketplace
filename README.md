# NFT Marketplace - React + TypeScript + Vite

A practice project to cut and build an NFT Marketplace from Figma using React, TypeScript, and Tailwind CSS.

Figma Template: 👉 [NFT Marketplace Page Figma](https://www.figma.com/design/FOhDKjKZzGymr6LH0rcQUQ/NFT-Marketplace-Template---Create-an-NFT-website-in-minutes--Community-?node-id=1647-17907&p=f)

Demo: 👉 [NFT Marketplace Page Demo](https://nft-marketplace-smoky-eta.vercel.app/)

---

## Features

- **Modular structure:** Each section (header, hero, highlight, etc.) is built as a separate component and organized into the `modules` folder.
- **Reusable components:** Created common components (button, input, heroCard, etc.) for reusability and consistency.
- **Responsive design:** Used [react-responsive](https://github.com/yocontra/react-responsive) to implement fully responsive layouts for mobile, tablet, and desktop following the Figma template.
- **Countdown clock:** Used [react-flip-clock-countdown](https://github.com/sLeeNguyen/react-flip-clock-countdown) for the animated countdown timer in the Highlight section.
- **SVG as component:** Learned to convert SVG files to React components for easier usage.
- **State management:** Used Zustand for simple, fast state management (like open/close mobile modal).
- **Project structure:** Learned and practiced organizing files and folders in a scalable React project.
- **Currently finished:** Only the homepage; more pages (Marketplace, NFT detail, Artist, Create Account) are planned.
- **Deployment:** Hosted on [Vercel](https://vercel.com/) for easy and quick deployment.

### Tech Stack

- ⚛️ **React** – For fast, component-based UI development
- 🟦 **TypeScript** – For type safety and better development experience
- 💨 **Tailwind CSS** – Utility-first CSS framework for building responsive layouts
- 🧠 **Zustand** – Minimal, fast state-management solution
- 🏃‍♂️ **React Flip Clock Countdown** – For smooth countdown clock animation
- 🆔 **UUID** – For unique keys in lists
- 📏 **React Responsive** – For responsive rendering based on breakpoints
- 📱 **Responsive Design** – Optimized for both mobile, tablet and desktop screens
- 🧩 **Component-based Architecture** – All UI is split into reusable, isolated components
- ▲ **Deployed with Vercel** – Quick and seamless deployment platform for modern frontend apps

## Path Aliases

To keep import paths clean and maintainable, this project uses [Vite](https://vitejs.dev/) alias configuration.

**Alias configuration in `vite.config.ts`:**

```js
alias: {
  "@styles": path.resolve(__dirname, "./src/styles"),
  "@modules": path.resolve(__dirname, "./src/modules"),
  "@assets": path.resolve(__dirname, "./src/assets"),
  "@components": path.resolve(__dirname, "./src/components"),
  "@pages": path.resolve(__dirname, "./src/pages"),
  "@myTypes": path.resolve(__dirname, "./src/types"),
  "@stores": path.resolve(__dirname, "./src/stores"),
  "@hooks": path.resolve(__dirname, "./src/hooks"),
}
// Instead of:
import Button from "../../../components/Buttons" // ❌

// Use:
import Button from "@components/Buttons"         // ✅
```

## Roadmap

- [x] Homepage (Landing page)
- [ ] Marketplace Page
- [ ] NFT Detail Page
- [ ] Artist Page
- [ ] Create Account Page
- [ ] Polish UI, animations & loading state (optional)
- [ ] Add real data & connect to backend (optional)

## License

This project is for personal learning and practice only.
Do not use for commercial purposes.
