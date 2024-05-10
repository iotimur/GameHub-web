import React from "react";

import {
  WrapperSearch,
  SearchInput,
  InputPlace,
  IconSearch,
} from "./search.styled";

export const Search = () => {
  return (
    <WrapperSearch>
      <SearchInput>
        <a href="" target="_blank" hidden></a>
        <InputPlace type="text" placeholder="Type to search.." />
        <IconSearch>
          <i className="fas fa-search"></i>
        </IconSearch>
      </SearchInput>
    </WrapperSearch>
  );
};
