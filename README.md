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
✅ Supports **slide** animations  
✅ Custom sound support (`notification.mp3`)  
✅ Lightweight and dependency-free  
✅ Built with TypeScript  

---

## 📦 Installation

Install via npm or yarn:

```bash
npm install react-echo-toast

```
---

## ⚙️Setup

### Wrap your application with the NotificationProvider at the root level (e.g., in App.tsx or main.tsx):

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NotificationProvider } from "@suryavamsi1729/notify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EchoToastProvider>
      <App />
    </EchoToastProvider>
  </React.StrictMode>
);
```

## 🔔 Usage Example

### Inside any component, use the useEchoToast() hook:

```tsx
import { useEchoToast } from "react-echo-toast";

export default function ExampleComponent() {
  const { notify } = useEchoToast();

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

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="border-bottom: 3px solid #000;">
      <th style="text-align: left; padding: 8px;">Type</th>
      <th style="text-align: left; padding: 8px;">message</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">info</td>
      <td style="padding: 8px;">General information</td>
    </tr>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">success</td>
      <td style="padding: 8px;">Operation successful</td>
    </tr>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">warning</td>
      <td style="padding: 8px;">Caution alert</td>
    </tr>
    <tr>
      <td style="padding: 8px;">error</td>
      <td style="padding: 8px;">Error alert</td>
    </tr>
  </tbody>
</table>

---

#### Position Options

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="border-bottom: 3px solid #000;">
      <th style="text-align: left; padding: 8px;">Value</th>
      <th style="text-align: left; padding: 8px;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">topRight</td>
      <td style="padding: 8px;">Appears at top-right corner (default)</td>
    </tr>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">topLeft</td>
      <td style="padding: 8px;">Appears at top-left corner (default)</td>
    </tr>
    <tr>
      <td style="padding: 8px;">topCenter</td>
      <td style="padding: 8px;">Appears at top-center corner</td>
    </tr>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">bottomRight</td>
      <td style="padding: 8px;">Appears at bottom-right corner (default)</td>
    </tr>
    <tr>
      <td style="padding: 8px;">bottomLeft</td>
      <td style="padding: 8px;">Appears at bottom-left corner</td>
    </tr>
    <tr>
      <td style="padding: 8px;">bottomCenter</td>
      <td style="padding: 8px;">Appears at bottom-center corner</td>
    </tr>
  </tbody>
</table>

---

#### Animation Options

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="border-bottom: 3px solid #000;">
      <th style="text-align: left; padding: 8px;">Value</th>
      <th style="text-align: left; padding: 8px;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">slide</td>
      <td style="padding: 8px;">Slides in from the right</td>
    </tr>
  </tbody>
</table>

---

#### Sound Options

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="border-bottom: 3px solid #000;">
      <th style="text-align: left; padding: 8px;">Value</th>
      <th style="text-align: left; padding: 8px;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #ccc;">
      <td style="padding: 8px;">enable</td>
      <td style="padding: 8px;">Plays notification sound(booelan)</td>
    </tr>
    <tr>
      <td style="padding: 8px;">src</td>
      <td style="padding: 8px;">path for sound mp3 track put it on public folder</td>
    </tr>
  </tbody>
</table>

🔔 You can add your custom sound file under `/public/sounds/notification.mp3`.

---

#### Duration

Set how long the notification should appear (in milliseconds). Default is **3000ms (3s)**.

```tsx
notify(
  "info", 
  { 
    title: "Heads up", 
    message: "This will disappear in 6s" 
  }, 
  { duration: 6000 }
);
```


### 🧠 Tech Stack

- ⚛️ React + TypeScript  
- 🎨 Tailwind CSS  
- 💅 class-variance-authority (CVA)  
- 🧩 Lucide Icons


### 🧑‍💻 Contributing

Contributions are welcome!  

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/new-feature`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to your branch (`git push origin feature/new-feature`)  
5. Open a Pull Request 🎉
