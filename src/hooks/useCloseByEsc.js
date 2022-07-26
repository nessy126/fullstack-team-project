import {  useEffect, useCallback } from "react";  

 // При нажатии на клавишу ESС селект закрывается и инпут очищается
export const useCloseByEsc = (callbback, isActive) => {
  const closeSelectByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        callbback()
      }
    },
    [callbback]
  );
  useEffect(() => {
    if (isActive) {
      window.addEventListener("keydown", closeSelectByEsc);
      return () => {
        window.removeEventListener("keydown", closeSelectByEsc);
      };
    };
  }, [closeSelectByEsc, isActive]);
}
  
  
