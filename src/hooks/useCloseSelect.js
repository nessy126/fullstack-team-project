import {  useEffect, useRef } from "react"; 

 // Для закрытия селекта кликом по экрану
  export const useMouseClose = (callbback, isActive) => {
    const domElement = useRef();
    useEffect(() => {
      const handleMouseDown = (e) => {
        if (domElement.current && !domElement.current.contains(e.target)) {
          callbback();
        }
      };
      if (isActive) {
      document.addEventListener("mousedown", handleMouseDown);
        return () => {
        document.removeEventListener("mousedown", handleMouseDown);
      }}
      ;
    }, [isActive,callbback ]);
    return domElement;
  };