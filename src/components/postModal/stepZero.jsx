import Input from "../form/Input"

export default function stepZero({setStep}) {
  return (
    <div className="modal-main">
        <div className="barre">
          <div className="done ut1"></div>
          <div className="undone ut2"></div>
        </div>
        <div className="titre">
<h2>Donner votre proposotion de prix</h2>
        </div>
        <div className="content">
<Input type="text" className="registerInput" placeholder="Votre offre en DT"/>
        </div>
        <div className="next">
          <span className="modal-step">Etape 1 sur 3</span>
          <button onClick={()=>setStep(1)} className="modal-button">Continuer</button>
        </div>
        <div className="footer">

        </div>

        </div>

  )
}
