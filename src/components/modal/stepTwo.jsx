import Input from "../form/Input"

export default function stepTwo() {
  return (
    <div className="modal-main">
        <div className="barre">
          <div className="done ut3"></div>
          <div className="undone ut1"></div>
        </div>
        <div className="titre">
<h2>Détailler vote besoin</h2>
        </div>
        <div className="content">
<Input type="textarea" className="registerInput" placeholder="Décrire en détails votre projet"/>
        </div>
        <div className="next">
          <span className="modal-step">Etape 3 sur 4</span>
          <button className="modal-button">Continuer</button>
        </div>
        <div className="footer">

        </div>

        </div>

  )
}
