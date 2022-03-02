import Input from "../form/Input"
import Select from "../form/Select"

export default function stepOne() {
  return (
    <section>
<Input label="Nom: *" className="registerInput" />

<Input label="Prénom: *" className="registerInput" />   
<Input label="Tel: *" className="registerInput" />  

 <Select className="registerSelect">
        <option value="">Sélectionner un gouvernorat</option>
        <option value="client">Nabeul</option>
        <option value="client">Tunis</option>
        <option value="client">Sousse</option>
        <option value="client">Monastir</option>
        <option value="client">Sfax</option>
        <option value="client">Kef</option>
        <option value="client">Beja</option>
        <option value="client">Zaghouene</option>
        <option value="client">Kairouan</option>
        <option value="client">Sidi Bouzid</option>
       
        <option value="client">Bizerte</option>
        <option value="client">Gabes</option>
        <option value="client">Gafsa</option>
        <option value="client">Kébili</option>
        <option value="client">Mahdia</option>
        <option value="client">Mednine</option>
        <option value="client">Tataouine</option>
        <option value="client">Tozeur</option>
        <option value="client">Siliana</option>
        <option value="client">Kasserine</option>
    </Select>
    <Input label="Ville: *" className="registerInput" />  
    
</section>
  )
}
