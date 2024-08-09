"use client";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.replaceState(
      {},
      "",
      "ac/in/noc/Ecertificate/NPTEL23CS108S6343063072011001"
    );
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <a
        href="/NPTEL23CS108S63430630720118001.pdf"
        target="_blank"
        style={{
          color: "white",
          backgroundColor: "#3070bf",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          width: "156px",
        }}
      >
        Course Certificate
      </a>
    </div>
  );
}
