import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import PspCard from "./PspCard";
import Directory from "../components/Directory";

export const hexify = (a) => a.toString(16);

const PspDir = forwardRef(function PspDir({ dir }, ref) {
  const headline = (
    <>
      <span>{`type: ${dir.directoryType}`}</span>
      <span>{`magic: ${dir.magic}`}</span>
      <span>{`address: 0x${hexify(dir.address)}`}</span>
    </>
  );
  return (
    <Directory
      headline={headline}
      files={dir.entries}
      renderFile={(p, open) => <PspCard key={p.index} psp={p} open={open} />}
      ref={ref}
    />
  );
});

PspDir.propTypes = {
  dir: PropTypes.object,
};

export default PspDir;
