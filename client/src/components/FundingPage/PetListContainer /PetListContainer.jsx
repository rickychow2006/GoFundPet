import React from 'react';
import PetCard from '../PetCard/PetCard';

function PetListContainer ({pets, updatePet}) {

  return (
    <div className="cards">
      {pets.map(petObj => <PetCard key={petObj.id} petData = {petObj} updatePet={updatePet}/>)}
    </div>
  )
}

export default PetListContainer;
