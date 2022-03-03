import Input from "../form/Input"

export default function stepOne({setStep}) {
  return (
    <div className="modal-main">
        <div className="barre">
          <div className="done ut2"></div>
          <div className="undone ut2"></div>
        </div>
        <div className="titre">
<h2>Donner résumé à votre projet</h2>
        </div>
        <div className="content">
<Input type="textarea" className="registerInput" placeholder="Décrire brièvement votre projet"/>
        </div>
        <div className="next">
          <span className="modal-step">Etape 2 sur 4</span>
          <button onClick={()=>setStep(2)} className="modal-button">Continuer</button>
        </div>
        <div className="footer">

        </div>

        </div>

  )
}
