import {useState} from 'react';
import {useSelector } from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar'

function PetCard({petData}) {
  const user = useSelector(state => state.session.user)
  const {name, age, image, cause, goal, id, donations} = petData
  const donationReceived = donations.reduce((accum,donation) => {return accum + donation.amount},0)
  const [toggle, setToggle] = useState(false);
  const [amount, setAmount] = useState(0);
  const [newDonationReceived, setNewDonationReceived] = useState(donationReceived);
  
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle)
    console.log(id)
  }

  const handleDonation = (e) => {
    e.preventDefault();

    const donationData = {
      donation: {
        amount: amount,
        pet_id: id,
        user_id: user.id
      }
    }

    return fetch("/api/donations", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(donationData)
    })
    .then( r=> r.json())
    .then(updatedDonation => {
      setNewDonationReceived(newDonationReceived+updatedDonation.amount)
      setAmount(0)
      setToggle(!toggle)
    }
    )
  }

  return (
    <li className = "card" >
      <div className= "image-icon">
        <img src={image} alt={name}/>
      </div>
      <div className ="container">
      <h4>Name: {name}</h4>
      <p><strong>Age: </strong> {age}</p>
      <p><strong>Cause: </strong> {cause}</p>
      <p><strong>Target: </strong>{goal}</p>
      <p><strong>Donation Received: </strong> {newDonationReceived}</p>
      <ProgressBar
          striped
          variant="info"
          now={newDonationReceived/goal*100} 
          style={{ width: "50%", margin: "auto" }}
        />    
      {toggle?( 
        <form on onSubmit={handleDonation}> 
          <input             
            type="number"
            name="amount"
            min="0"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}>
          </input>
        <button>Donate</button>
        </form>) :null
      }
      <div className="footer">
      {!toggle? (<button onClick = {handleToggle} className="button">Donate Now</button>):<button onClick = {handleToggle} lassName="button">Close Donation Form</button>}
      </div>
    </div>
    </li>
  );
};

export default PetCard; 
