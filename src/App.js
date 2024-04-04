import './App.css';

//importation des composants nécessaires
import Cardd from './Components/Card';
import photo from './n.jpg'



function App() {
  const firstName = "Amin BEN REJEB"; 
  return (
    

    <div  style ={{background:'#F4EAE0'}} className="App">
      
<Cardd/>
<br/><br/>
   
  <p style={{fontWeight:'bold',textAlign:'center'}}>Bonjour, {firstName ? `${firstName} !` : "là !"}</p>
   {firstName && <img  src={photo} alt="image" style={{ width: '250px', height: '250px',marginLeft:'40px',marginTop:'20px',marginBottom:'20px',borderRadius:'50%',border:'solid' }} />}
  </div>
    
      
  );
}

export default App;
