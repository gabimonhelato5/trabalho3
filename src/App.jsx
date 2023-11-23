import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [animaisPerdidos, setAnimaisPerdidos] = useState([]);
  const [novoAnimal, setNovoAnimal] = useState({ nome: '', tipo: '', localizacao: '', telefone: '' });

  const adicionarAnimalPerdido = () => {
    setAnimaisPerdidos([...animaisPerdidos, novoAnimal]);
    setNovoAnimal({ nome: '', tipo: '', localizacao: '', telefone: '' });
  };

  const removerAnimalPerdido = (index) => {
    const novosAnimaisPerdidos = [...animaisPerdidos];
    novosAnimaisPerdidos.splice(index, 1);
    setAnimaisPerdidos(novosAnimaisPerdidos);
  };

  return (
    <div className="App">
      <h1>Animais Perdidos</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={novoAnimal.nome}
          onChange={(e) => setNovoAnimal({ ...novoAnimal, nome: e.target.value })}
        />
      </div>
      <div>
        <label>Tipo:</label>
        <input
          type="text"
          value={novoAnimal.tipo}
          onChange={(e) => setNovoAnimal({ ...novoAnimal, tipo: e.target.value })}
        />
      </div>
      <div>
        <label>Localização:</label>
        <input
          type="text"
          value={novoAnimal.localizacao}
          onChange={(e) => setNovoAnimal({ ...novoAnimal, localizacao: e.target.value })}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          value={novoAnimal.telefone}
          onChange={(e) => setNovoAnimal({ ...novoAnimal, telefone: e.target.value })}
        />
      </div>
      <button onClick={adicionarAnimalPerdido}>Adicionar Animal Perdido</button>
      <ul>
        {animaisPerdidos.map((animal, index) => (
          <li key={index}>
            <strong>{animal.nome}</strong> ({animal.tipo}) - {animal.localizacao}, Telefone: {animal.telefone}
            <button onClick={() => removerAnimalPerdido(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
