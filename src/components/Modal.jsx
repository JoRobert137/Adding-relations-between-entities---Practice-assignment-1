
function Modal({ isOpen, onClose, destination }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="modal-image"
        />
        <h2>{destination.name}</h2>
        <h3>{destination.location}</h3>
        <p>{destination.description}</p>
      </div>
    </div>
  );
}


export default Modal;