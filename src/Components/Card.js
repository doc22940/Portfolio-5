import React, { useState } from "react";
import "../Styles/main.css";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const ButtonStyles = {
  position: "absolute",
  top: 20 + "px",
  right: 20 + "px",
};

Modal.setAppElement("#root");
function Card(props) {
  const { title, image, desc, code, site, stack } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="card">
      <img src={image} className="image" alt="project card" />
      <div
        className="overlay overlayBottom"
        onClick={() => setModalIsOpen(true)}
      >
        <div class="text">View More</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { zIndex: 999 },
          content: { zIndex: 999 },
        }}
      >
        <div className="modal-container">
          <h2 className="modal-title">{title}</h2>
          <h3 className="techsUsed">{stack}</h3>
          <p className="modal-desc">{desc}</p>
          <div className="buttons">
            <a
              className="button"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Code
            </a>
            <a
              className="button"
              href={site}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(false)} style={ButtonStyles}>
            <MdClose size="1.5rem" />
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Card;
