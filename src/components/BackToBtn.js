import React from "react";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function BackTopBtn() {
  const [BackTopBtn, setBackTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackTopBtn(true);
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="topBtn">
      {BackTopBtn && (
        <button
          style={{
            position: "fixed",
            bottom: "4%",
            left: "8%",
            zIndex: "1",
            color: "var(--text-color)",
            backgroundColor: "transparent",
            fontSize: "2rem",
            textAlign: "center",
            textDecoration: "none",
            cursor: "pointer",
            border: "none",
          }}
          onClick={scrollUp}
        >
          <FaArrowCircleUp />
        </button>
      )}
    </div>
  );
}

export default BackTopBtn;
