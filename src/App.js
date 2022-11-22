import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

// const App = () => {
 
//   const [ativo, setAtivo] = React.useState(true);
 
 // const ativoHook = React.useState(false);
 // const ativoValor = ativoHook[0];
 // const atualizaValor = ativoHook[1];
  
 // function handleClick() {
 // atualizaValor(!ativoValor);
 // }

//   return( 
//     <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Botão Ativo' : 'Botão Inativo' }</button>
//   );
// };




export default App;
