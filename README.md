# React + Vite Bootcamp: From Zero to Hero 🚀

A comprehensive journey through React development using Vite. This repository chronicles my learning path from fundamental concepts to advanced React techniques.

## 🌟 Features:

- ⚛️ React fundamentals (components, props, state)
- 🔄 Hooks (useState, useEffect, useContext, and custom hooks)
- 🧭 Routing with React Router
- 🎨 Styling approaches (CSS modules, Styled Components)
- 🔍 State management (Context API, Redux)
- 🌐 API integration and data fetching
- ✅ Testing with Jest and React Testing Library
- 🚀 Performance optimization techniques
- 📱 Responsive design principles

## 🛠️ Tech Stack:

- React 18+
- Vite
- TypeScript
- ESLint & Prettier
- Additional libraries: [List any major libraries you've used]

## 📚 Project Structure:

Each major concept is organized into its own directory, containing practical examples and exercises.

## 🏃‍♂️ How to Run:

[Include basic instructions for cloning and running the project]

## 🤝 Contributions:

While this is a personal learning project, suggestions and discussions are welcome! Feel free to open issues for any questions or improvements.

## 📜 License:

[Your chosen license]

Happy coding! 💻✨

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
