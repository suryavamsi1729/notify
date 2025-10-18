# 🔔 React Notify — Lightweight Notification System for React

[![npm version](https://img.shields.io/npm/v/@suryavamsi1729/notify.svg?color=brightgreen)](https://www.npmjs.com/package/@suryavamsi1729/notify)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-%5E17%20|%5E18-blue?logo=react)](https://react.dev)

> A simple, customizable, and animated notification (toast) system for React built with TypeScript and Tailwind CSS.

---

## 🚀 Features

✅ Clean, minimal toast design  
✅ Supports **info, success, warning, and error** types  
✅ Auto-dismiss after custom duration  
✅ Supports **slide** and **fade** animations  
✅ Custom sound support (`notification.mp3`)  
✅ Lightweight and dependency-free  
✅ Built with TypeScript  

---

## 📦 Installation

Install via npm or yarn:

```bash
npm install @suryavamsi1729/notify
# or
yarn add @suryavamsi1729/notify
```
---

## ⚙️Setup

### Wrap your application with the NotificationProvider at the root level (e.g., in App.tsx or main.tsx):

```bash
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NotificationProvider } from "@suryavamsi1729/notify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
);
```

## 🔔 Usage Example

### Inside any component, use the useNotify() hook:

```bash
import { useNotify } from "@suryavamsi1729/notify";

export default function ExampleComponent() {
  const { notify } = useNotify();

  const handleClick = () => {
    notify("success", 
    {
      title: "Success!",
      message: "Your data has been saved successfully."
    }, 
    {
      duration: 4000,
      position: "topRight",
      animation: "slide",
      sound: "on"
    });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Show Notification
    </button>
  );
}
```

### 🎨 Customization

#### Notification Types

  Type      Description           
 ---------------------------------
 `info`     General information  
 ---------------------------------
 `success`  Operation successful 
 ---------------------------------
 `warning`  Caution alert        
 ---------------------------------
 `error`    Error alert          

<table>
  <tr>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr><td>info</td><td>General information</td></tr>
  <tr><td>success</td><td>Operation successful</td></tr>
  <tr><td>warning</td><td>Caution alert</td></tr>
  <tr><td>error</td><td>Error alert</td></tr>
</table>



