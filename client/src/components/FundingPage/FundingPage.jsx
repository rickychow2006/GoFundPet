import { useEffect, useState } from "react";
import PetListContainer from './PetListContainer /PetListContainer';

const FundingPage = () => {

  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/pets')
      .then(r => r.json())
      .then(petData => setPets(petData))
  }, [])

  

  return (
    <div style={{textAlign:"center"}}>
      <div className="header">
        <h1>Meet our Pets in Need</h1>
      </div>
      <PetListContainer pets = {pets}/>
    </div>
  )
}

export default FundingPage