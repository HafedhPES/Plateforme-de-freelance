import Input from "../form/Input"
import Select from "../form/Select"


export default function stepTwo() {
  return (
    <section>
<Input label="Photo de profil"  className="registerInput" />  

    <Select label="Secteur d'activité" className="registerSelect">
        <option value="">Choisissez un secteur...</option>
        <option value="client">Développeur web Fullstcak</option>
        <option value="client">Développeur web Frontend</option>
        <option value="client">Développrur web Backend</option>
        <option value="client">Infographiste</option>
        <option value="client">Traducteur</option>
        <option value="client">Statiticien</option>
        <option value="client">Agent bureautique</option>
        <option value="client">Digital Marketting</option>
    </Select>
    
    
<Input type="textarea" label="Présentation *" className="registerInput"/>
<Input label="Formation"  className="registerInput" />
</section>
  )
}
