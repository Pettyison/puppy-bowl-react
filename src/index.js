import React from "react";
import { createRoot } from 'react-dom/client';
import Form from "./components/Form";
import Main from "./components/Main";
import PuppyPower from "./PuppyPower";

const appElement = document.getElementById("app")

const root = createRoot(appElement)

root.render(<PuppyPower />)