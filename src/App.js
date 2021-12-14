import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([

    // {
    //   id: 0,
    //   tarefa: 'Lavar os pratos da cozinha',
    //   finalizada: false
    // },
    // {
    //   id: 1,
    //   tarefa: 'Estudar para projeto Canvas da Fatec',
    //   finalizada: false
    // },
    // {
    //   id: 2,
    //   tarefa: 'Fazer as compras do mês no supermercado',
    //   finalizada: true
    // },

  ]);

  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(!modal);
  }

  const salvarTarefa = () => {
    //TODO: Salvar a tarefa;
    var tarefa = document.getElementById('content-tarefa');

    setTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada: false
      }
    ]);

    setModal(false);
  }

  const marcarConcluida = (id) => {
    let novasTarefas = tarefas.filter(function (val) {
      if (val.id === id) {
        val.finalizada = true;
      }
      return val;
    })

    setTarefas(novasTarefas);
  }

  useEffect(() => {
    // Fazer uma chamada para API e preencher o estado tarefas
  }, [])

  return (
    <div className="App">
      {
        modal ?
          <div className="modal">
            <div className="modalContent">
              <h3>Adicionar sua tarefa</h3>
              <input id="content-tarefa" type="text" />
              <button onClick={() => salvarTarefa()}>SALVAR</button>
            </div>
          </div>
          :
          <div></div>
      }

      <div
        onClick={() => abrirModal()}
        className="addTarefa">
        +
      </div>

      <div className="boxTarefas">
        <h2>Minhas tarefas do Dia!</h2>
        {
          tarefas.map((val) => {
            if (!val.finalizada) {
              return (
                <p
                  onClick={() => marcarConcluida(val.id)}
                >
                  {val.tarefa}
                </p>
              );
            }
            else {
              return (
                <p
                  style={{ textDecoration: 'line-through' }}
                  onClick={() => marcarConcluida(val.id)}
                >
                  {val.tarefa}
                </p>
              );
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
