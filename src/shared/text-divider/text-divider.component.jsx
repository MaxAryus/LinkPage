import React from "react";

const TextDividerHorizontalH4 = ({ title, subtext }) => {
  return (
    <div className="p-0 ms-4 mt-2">
      <div className="hstack gap-3">
        <div className="hr"></div>
        <div className="fs-3 fw-bold text-uppercase"> {title} </div>
        <div className="fs-4 fw-regular"> {subtext} </div>
      </div>
    </div>
  );
};

export default TextDividerHorizontalH4;

const TextDividerVerticalH4 = ({ title, subtext }) => {
  return (
    <div className="p-0 ms-4 mt-2">
      <div className="hstack gap-3">
        <div className="vr"></div>
        <div className="fs-4 fw-bold text-uppercase"> {title} </div>
      </div>
      <div className="hstack gap-3">
        <div className="vr"></div>
        <div className="fs-6 fw-regular"> {subtext} </div>
      </div>
    </div>
  );
};

export { TextDividerVerticalH4 };
