import React from "react";
import { useNavigate } from "react-router-dom";

const EditCards: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateDeck = () => {
    navigate("/create-deck");
  };

  const handleEditDeck = () => {
    navigate("/edit-deck");
  };

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Edit Cards</h1>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor || '')}
onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor || '')}
          onClick={handleCreateDeck}
        >
          Create Deck
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor || '')}
onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor || '')}
          onClick={handleEditDeck}
        >
          Edit Deck
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor || '')}
onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor || '')}
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(3/5 * 100vh)", // Set the minimum height to 3/5 of the screen height
    minWidth: "550px", // Set the minimum width to 550px
    margin: "calc(1/5 * 100vh) 0", // Set the top and bottom margin to 1/5 of the screen height
    backgroundColor: "#f0f0f0", // Off-white background
    textAlign: "center",
    border: "2px solid #000", // Black border
    borderRadius: "15px", // Curved corners
    padding: "20px",
    fontFamily: "Consolas, monospace", // Consolas font
    boxSizing: "border-box", // Include padding and border in the element's total width and height
    overflowY: "auto", // Allow vertical scrolling
    zIndex: 10, // Ensure the frame is behind the main menu
    position: "relative", // Ensure z-index works
  },
  title: {
    fontSize: "2.5rem", // Adjust font size to fit better
    marginBottom: "20px",
    fontFamily: "Consolas, monospace", // Consolas font
    color: "#000", // Black text
    textShadow: "2px 2px #fff", // White shadow for blocky effect
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px", // Small gap between buttons
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#fff", // White background
    color: "#000", // Black text
    border: "2px solid #000", // Black border
    borderRadius: "5px", // Curved corners
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontFamily: "Consolas, monospace", // Consolas font
  },
  buttonHover: {
    backgroundColor: "#ccc" as string, // Grey shade on hover
  },
};

export default EditCards;
