"use client";

import React from "react";
import notify from "../service/toast.service";

export default function ToastExample() {
  const runPromise = () => {
    const p = new Promise<string>((res, rej) => {
      setTimeout(() => res("Done"), 1500);
    });

    notify.promise(p, {
      loading: "Working...",
      success: () => "Completed successfully",
      error: () => "Failed",
    });
  };

  return (
    <div className="space-x-2">
      <button
        className="btn"
        onClick={() => notify.success("Saved successfully")}
      >
        Success
      </button>
      <button className="btn" onClick={() => notify.error("Something went wrong")}>Error</button>
      <button className="btn" onClick={() => notify.info("Heads up")}>Info</button>
      <button className="btn" onClick={runPromise}>Promise</button>
    </div>
  );
}
