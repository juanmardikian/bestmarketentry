
import React, { useState }from 'react';


import './App.css';


//        LA APP ESTA EN INGLES

// function App()  {
//   const [checkedArray, setCheckedArray] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false]);
//   console.log(checkedArray);
//   const handleCheck = (index) => {
//     const newCheckedArray = [ ...checkedArray ];
//     newCheckedArray[index] = !checkedArray[index];
//     setCheckedArray(newCheckedArray);
//   }
//   const firstFiveChecked = checkedArray[0] && checkedArray[1] && checkedArray[2] && checkedArray[3] && checkedArray[4];
//   const checkedItemOfLastEight = (checkedArray.filter((c, index) => {
//     if (index > 4 && c) {
//       return true;
//     }
//     return false;
//   })).length;
//   return (
//     <div >
// <h1>A MUST to go into the Market</h1>
// <div className="check">
// <div className="tips"><p>1. Price in the 3rd Deviation Zone</p></div> <div className="tip"><input id='check1' type="checkbox" defaultChecked={checkedArray[0]} onClick={() => handleCheck(0)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>2. Price outside the Value Area</p></div> <div className="tip"><input id='check2' type="checkbox" defaultChecked={checkedArray[1]} onClick={() => handleCheck(1)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>3. Without the VWAP of last week againt</p></div> <div className="tip"><input id='check3' type="checkbox" defaultChecked={checkedArray[2]} onClick={() => handleCheck(2)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>4. Ratio Benefit / Risk greater than 1:1</p></div> <div className="tip"><input id='check4' type="checkbox" defaultChecked={checkedArray[3]} onClick={() => handleCheck(3)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>5. Divergence of Pressure or Price<br/>
// (closed in the 3rd Deviation Zone)</p></div> <div className="tip"><input id='check5' type="checkbox" defaultChecked={checkedArray[4]} onClick={() => handleCheck(4)} /></div>
// </div>
// <h1>Optional: 6 out of 8</h1>
// <div className="check">
// <div className="tips"><p>1. Value Area with a Balanced Profil</p></div> <div className="tip"><input id='check6' type="checkbox" defaultChecked={checkedArray[5]} onClick={() => handleCheck(5)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>2. POC between the Price and the VWAP</p></div> <div className="tip"><input id='check7' type="checkbox" defaultChecked={checkedArray[6]} onClick={() => handleCheck(6)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>3. Horizontal Desviations</p></div> <div className="tip"><input id='check8' type="checkbox" defaultChecked={checkedArray[7]} onClick={() => handleCheck(7)} /></div>
// </div>  
// <div className="check">
// <div className="tips"><p>4. MAX / MIN of the Weekly Session</p></div> <div className="tip"><input id='check9' type="checkbox" defaultChecked={checkedArray[8]} onClick={() => handleCheck(8)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>5. No Agreements Pending of Liquidation</p></div> <div className="tip"><input id='check10' type="checkbox" defaultChecked={checkedArray[9]} onClick={() => handleCheck(9)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>6. Increase of Volume in the Divergence</p></div> <div className="tip"><input id='check11' type="checkbox" defaultChecked={checkedArray[10]} onClick={() => handleCheck(10)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>7. Delta Δ / Volume greater than 5%</p></div> <div className="tip"><input id='check12' type="checkbox" defaultChecked={checkedArray[11]} onClick={() => handleCheck(11)} /></div>
// </div>
// <div className="check">
// <div className="tips"><p>8. Progressive Disinterest in the last</p></div> <div className="tip"><input id='check13' type="checkbox" defaultChecked={checkedArray[12]} onClick={() => handleCheck(12)} /></div>
// </div>
// {firstFiveChecked && checkedItemOfLastEight === 6 && <div style={{'marginTop':'3vw','fontSize':'3vw', 'color':'lime' }}><h1>Good Market Entry</h1></div>}
// {firstFiveChecked && checkedItemOfLastEight === 7 && <div style={{'marginTop':'3vw','fontSize':'3vw', 'color':'lime' }}><h1>Better Market Entry</h1></div>}
// {firstFiveChecked && checkedItemOfLastEight === 8 && <div style={{'marginTop':'3vw','fontSize':'3vw', 'color':'lime' }}><h1>Best Market Entry</h1></div>}
//     </div>
//   );
// }















// LA APP ESPANIOL







function App()  {
  const [checkedArray, setCheckedArray] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false]);
  console.log(checkedArray);
  const handleCheck = (index) => {
    const newCheckedArray = [ ...checkedArray ];
    newCheckedArray[index] = !checkedArray[index];
    setCheckedArray(newCheckedArray);
  }
  const firstFiveChecked = checkedArray[0] && checkedArray[1] && checkedArray[2] && checkedArray[3] && checkedArray[4];
  const checkedItemOfLastEight = (checkedArray.filter((c, index) => {
    if (index > 4 && c) {
      return true;
    }
    return false;
  })).length;
  return (
    <div >
<h1 style={{marginTop: 0}}>Requisitos Obligatorios</h1>
<div className="check">
<div className="tips"><p>1. Precio en Zona de 3ª Desviación</p></div> <div className="tip"><input id='check1' type="checkbox" defaultChecked={checkedArray[0]} onClick={() => handleCheck(0)} /></div>
</div>
<div className="check">
<div className="tips"><p>2. Precio fuera del Área de Valor</p></div> <div className="tip"><input id='check2' type="checkbox" defaultChecked={checkedArray[1]} onClick={() => handleCheck(1)} /></div>
</div>
<div className="check">
<div className="tips"><p>3. Sin VWAP de la semana pasada en contra</p></div> <div className="tip"><input id='check3' type="checkbox" defaultChecked={checkedArray[2]} onClick={() => handleCheck(2)} /></div>
</div>
<div className="check">
<div className="tips"><p>4. Ratio Beneficio / Riesgo superior al 1:1</p></div> <div className="tip"><input id='check4' type="checkbox" defaultChecked={checkedArray[3]} onClick={() => handleCheck(3)} /></div>
</div>
<div className="check">
<div className="tips"><p>5. Divergencia de Presión o Precio</p></div> <div className="tip"><input id='check5' type="checkbox" defaultChecked={checkedArray[4]} onClick={() => handleCheck(4)} /></div>
</div>
<div className="check">
<div className="tips"><p>(Cerrada en Zona de 3ª Desviación )</p></div></div>
<h1>Requisitos Opcionales: mínimo 6 de 8</h1>
<div className="check">
<div className="tips"><p>1. Perfil Equilibrado en el Área de Valor</p></div> <div className="tip"><input id='check6' type="checkbox" defaultChecked={checkedArray[5]} onClick={() => handleCheck(5)} /></div>
</div>
<div className="check">
<div className="tips"><p>2. POC entre el Precio y el VWAP</p></div> <div className="tip"><input id='check7' type="checkbox" defaultChecked={checkedArray[6]} onClick={() => handleCheck(6)} /></div>
</div>
<div className="check">
<div className="tips"><p>3. Desviaciones Horizontales</p></div> <div className="tip"><input id='check8' type="checkbox" defaultChecked={checkedArray[7]} onClick={() => handleCheck(7)} /></div>
</div>  
<div className="check">
<div className="tips"><p>4. MAX / MIN de la Sesión Semanal</p></div> <div className="tip"><input id='check9' type="checkbox" defaultChecked={checkedArray[8]} onClick={() => handleCheck(8)} /></div>
</div>
<div className="check">
<div className="tips"><p>5. Sin Contratos Pendientes de Liquidar</p></div> <div className="tip"><input id='check10' type="checkbox" defaultChecked={checkedArray[9]} onClick={() => handleCheck(9)} /></div>
</div>
<div className="check">
<div className="tips"><p>6. Aumento de Volumen en la Divergencia</p></div> <div className="tip"><input id='check11' type="checkbox" defaultChecked={checkedArray[10]} onClick={() => handleCheck(10)} /></div>
</div>
<div className="check">
<div className="tips"><p>7. Delta Δ / Volumen superior al 5%</p></div> <div className="tip"><input id='check12' type="checkbox" defaultChecked={checkedArray[11]} onClick={() => handleCheck(11)} /></div>
</div>
<div className="check">
<div className="tips"><p>8. Desinterés Progresivo en los últimos 4/5 ticks</p></div> <div className="tip"><input id='check13' type="checkbox" defaultChecked={checkedArray[12]} onClick={() => handleCheck(12)} /></div>
</div>
{firstFiveChecked && checkedItemOfLastEight === 6 && <div className="entrada" ><h1>SE PUEDE ENTRAR A MERCADO</h1></div>}
{firstFiveChecked && checkedItemOfLastEight === 7 && <div className="entrada" ><h1>UNA ENTRADA MUY BUENA</h1></div>}
{firstFiveChecked && checkedItemOfLastEight === 8 && <div className="entrada" ><h1>UNA ENTRADA BUENÍSIMA</h1></div>}
    </div>
  );
}






export default App;
