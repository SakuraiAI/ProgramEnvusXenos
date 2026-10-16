import ReactDOM from "react-dom/client";
import App from "./Portal";
import "./index.css";

const page = document.body.dataset.page || "home";

ReactDOM.createRoot(document.getElementById("root")).render(<App page={page} />);
