import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { AppContext } from "./context";

const Modal = () => {
  const data = useContext(AppContext);

  return (
    <>
      <div
        className={
          data.isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }
      ></div>
      <div
        className={
          data.isModalOpen ? "modal-content show-modal" : "modal-content"
        }
      >
        <FiX
          className="modal-close-btn"
          onClick={() => data.setIsModalOpen(false)}
        />
        <h2>This is the heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ratione sint optio enim cumque facilis voluptatum aut placeat impedit
          laborum?
        </p>
      </div>
    </>
  );
};

export default Modal;
