import React from "react";

export const Spinner = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <p className="text-2xl text-blue-400"> Loading...</p>
      <div className="w-20 h-20 border-t-4 border-b-4 border-blue-400 rounded-full animate-spin"></div>
    </div>
  );
};
