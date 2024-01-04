import React from "react";
import { Breadcrumbs } from "baseui/breadcrumbs";
import { StyledLink } from "baseui/link";
import { EmptyFunction } from "./default";

export default function Crums({ crum = [], setIsClicked = EmptyFunction }) {
  var crumpieces = [];

  for (let i = 0; i < crum.length - 1; i++) {
    crumpieces[i] = crum[i];
  }
  return (
    <Breadcrumbs>
      {crumpieces.map((i) => {
        return (
          <StyledLink
            style={{ cursor: "pointer" }}
            key={i}
            onClick={() => setIsClicked(i)}
          >
            {i}
          </StyledLink>
        );
      })}
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setIsClicked(crum[crum.length - 1])}
      >
        {crum[crum.length - 1]}
      </span>
    </Breadcrumbs>
  );
}
