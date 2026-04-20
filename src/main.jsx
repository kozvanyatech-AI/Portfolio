import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import emailjs from "@emailjs/browser";
import favicon from "./assets/icons/icon.png";

// Initialize EmailJS with your public key
emailjs.init("tBAx4yF6PgJrDz0Kk");

const faviconElement = document.querySelector("link[rel='icon']");
if (faviconElement) {
  faviconElement.href = favicon;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
