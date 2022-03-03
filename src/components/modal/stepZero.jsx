import Input from "../form/Input"

export default function stepZero({setStep}) {
  return (
    <div className="modal-main">
        <div className="barre">
          <div className="done ut1"></div>
          <div className="undone ut3"></div>
        </div>
        <div className="titre">
<h2>Donner un titre à votre projet</h2>
        </div>
        <div className="content">
<Input type="text" className="registerInput" placeholder="Ex: Création d'un site, Crétion d'un logo ..."/>
        </div>
        <div className="next">
          <span className="modal-step">Etape 1 sur 4</span>
          <button onClick={()=>setStep(1)} className="modal-button">Continuer</button>
        </div>
        <div className="footer">

        </div>

        </div>

  )
}
