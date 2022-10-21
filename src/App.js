import './App.css';

import Drinks from './drinks';
import 

function App() {
  return(
    <div className='box'>
      <h1>Margarita Cocktail DB</h1>

    {
      Drinks.map((drink) => {
        return(
          <div>
          <div key={drink.idDrink}></div>
          <strong>{drink.strDrink}</strong>
          <img src="{drink.strImageSource}"></img>
         </div>
          
        )
        
      })
    }


    </div>

  )

  
 
}

export default App;
