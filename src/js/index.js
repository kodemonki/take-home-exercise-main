import '../styles/index.css';

import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);

function App() {
  return <h1>Hello world!</h1>;
}

console.log('App Running...');
