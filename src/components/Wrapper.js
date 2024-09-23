import { Children } from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";

export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <Header></Header>
      {Children.map(children, (child) => {
        return child;
      })}
      <Footer></Footer>
    </div>
  );
}
