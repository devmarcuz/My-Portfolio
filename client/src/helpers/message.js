import React from "react";

export const Alert = ({ error }) => {
  return <div className="error">{error}</div>;
};

export const Success = ({ success }) => {
  return <div className="success">{success}</div>;
};
