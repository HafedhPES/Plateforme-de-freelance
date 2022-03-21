import Input from "../form/Input"

export default function stepTwo() {
  return (
    <div className="modal-main">
        <div className="barre">
          <div className="done ut1"></div>
          <div className="undone"></div>
        </div>
        <div className="titre">
<h2>Votre motivation </h2>
        </div>
        <div className="content">
<Input type="textarea" className="registerInput" placeholder="Votre message pour le client"/>
        </div>
        <div className="next">
          <span className="modal-step">Etape 3 sur 3</span>
          <button  className="modal-button">Postuler</button>
        </div>
        <div className="footer">

        </div>

        </div>

  )
}
