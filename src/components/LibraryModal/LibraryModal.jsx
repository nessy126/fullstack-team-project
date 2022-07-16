import { useEffect, useState } from "react";
import Modal from "../MainNav/Modal/Modal";

export const LibraryModal = () => {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const openModal = () => {
      setModal({
        open: true,
      });
    };
    openModal();
  }, []);

  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  return (
    <>
      {modal.open && (
        <Modal closeModal={closeModal}>
          <h2>
            <strong>STEP 1</strong>
          </h2>
        </Modal>
      )}
    </>
  );
};
