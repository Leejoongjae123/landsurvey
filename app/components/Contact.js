"use client";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (!isMobile) {
        event.preventDefault();
        alert("Please call 010-2971-7521");
      }
    };

    const telLink = document.getElementById("tel-link");
    telLink.addEventListener("click", handleClick);

    return () => {
      telLink.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <a
        className="hover:underline me-4 md:me-6"
        href="tel:01029717521"
        id="tel-link"
      >
        Contact
      </a>
    </>
  );
};

export default ContactPage;
