import React from "react";
import cn from 'classnames';
import bgImg from "../img/bg1.jpeg";
import s from "./layout.module.css";

const Layout = ({ title, urlBg = "", colorBg, children }) => {
  return (
    <section
      className={s.root}
      style={
        urlBg
          ? { backgroundImage: `url(${bgImg})` }
          : { backgroundColor: colorBg }
      }
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.desc, s.full)}>
            <p>{children}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
