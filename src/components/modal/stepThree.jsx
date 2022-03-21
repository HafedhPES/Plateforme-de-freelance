import Input from "../form/Input"

export default function stepThree() {
  return (
    <div className="modal-main">
        <div className="barre">
          <div className="done ut1"></div>
          <div className="undone"></div>
        </div>
        <div className="titre">
<h2>Votre proposition des frais </h2>
        </div>
        <div className="content">
<Input type="text" className="registerInput" placeholder="Budget end DT"/>
        </div>
        <div className="next">
          <span className="modal-step">Etape 4 sur 4</span>
          <button  className="modal-button">Déposer</button>
        </div>
        <div className="footer">

        </div>

        </div>

  )
}
