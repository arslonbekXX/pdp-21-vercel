import { createRoot } from "react-dom/client";
import { Counter } from "./counter";
import "./index.css";
const root = createRoot(document.getElementById("root")!);
root.render(
  <div className="container mx-auto pt-4 px-4">
    <Counter children2={<h1>Hello World</h1>} />
  </div>
);

const counter = new Counter({ children2: <h1>Hello World</h1> });
