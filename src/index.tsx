import React from "react";
import { createRoot } from "react-dom/client";

import App from "@/components/App";

import "./index.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Failed to find the root element");
}

const AppContainer = () => <App />;

const root = createRoot(rootElement);

root.render(<AppContainer />);
