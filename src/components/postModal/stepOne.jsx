import Input from "../form/Input"

export default function stepOne({setStep}) {
  return (
    <div className="modal-main">
        <div className="barre">
          <div className="done ut2"></div>
          <div className="undone ut1"></div>
        </div>
        <div className="titre">
<h2>Durée estimaive du projet</h2>
        </div>
        <div className="content">
<Input type="text" className="registerInput" placeholder="Durée"/>
        </div>
        <div className="next">
          <span className="modal-step">Etape 2 sur 3</span>
          <button onClick={()=>setStep(2)} className="modal-button">Continuer</button>
        </div>
        <div className="footer">

        </div>

        </div>

  )
}
