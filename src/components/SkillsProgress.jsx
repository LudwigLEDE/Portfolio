import React from "react";

export default function SkillsProgress({ value }) {
  return (
    <div>
      <progress id="progressBar" value={value} max={100}></progress>
    </div>
  );
}
