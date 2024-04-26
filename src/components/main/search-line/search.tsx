import React from "react";
import s from "./search.module.css";
const search_inputClassName = "search-input";

export const Search = () => {
  return (
    <div className={s.wrapper}>
      <div className={s[search_inputClassName]}>
        <a href="" target="_blank" hidden></a>
        <input type="text" placeholder="Type to search.." />
        <div className="autocom-box"></div>
        <div className={s.icon}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};
