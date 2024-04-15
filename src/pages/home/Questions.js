import React, { useState, useEffect } from 'react';
import anteriorIcon from '../../images/anterior.png';

const Preguntas = () => {
  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      pregunta: '¿Tiene alguna condición médica especial para consumir alimentos?\nPor ejemplo hipertensión, Diabetes, etc.',
      respuesta: '',
    },
    {
      id: 2,
      pregunta: '¿Cuáles son sus objetivos alimenticios?\nPor ejemplo subir o bajar de peso',
      respuesta: '',
    },
    {
      id: 3,
      pregunta: '¿Cómo describiría su estilo de vida?\nPor ejemplo Sedentario, activo.',
      respuesta: '',
    },
  ]);

  const [indicePregunta, setIndicePregunta] = useState(0);

  useEffect(() => {
    const respuestasGuardadas = JSON.parse(localStorage.getItem('respuestas'));
    if (respuestasGuardadas) {
      setPreguntas(respuestasGuardadas);
    }
  }, []);

  const handleRespuestaChange = (e) => {
    const nuevasPreguntas = [...preguntas];
    nuevasPreguntas[indicePregunta].respuesta = e.target.value;
    setPreguntas(nuevasPreguntas);
  };

  const handleSiguientePregunta = () => {
    if (indicePregunta < preguntas.length - 1) {
      setIndicePregunta((prevIndice) => prevIndice + 1);
    }
  };

  const handlePreguntaAnterior = () => {
    if (indicePregunta > 0) {
      setIndicePregunta((prevIndice) => prevIndice - 1);
    }
  };

  const guardarRespuestas = () => {
    localStorage.setItem('respuestas', JSON.stringify(preguntas));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen mt-[-5rem]">
      {preguntas.map((pregunta, index) => (
        index === indicePregunta && (
          <div key={pregunta.id} className="mb-4 flex flex-col items-center">
            <p className="mb-2 text-center font-semibold text-xl mb-8">{pregunta.pregunta.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}</p>
            <input
              type="text"
              className="border rounded-2xl px-2 py-1 w-[26rem] border-2 border-black"
              value={pregunta.respuesta}
              onChange={handleRespuestaChange}
            />
          </div>
        )
      ))}
      <div className="flex justify-between mt-4 w-[35rem]">
        <button
          className={` ${indicePregunta === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePreguntaAnterior}
          disabled={indicePregunta === 0}
        >
          <img src={anteriorIcon} alt="Next"  />
        </button>
        <button
          className={`  ${indicePregunta === preguntas.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSiguientePregunta}
          disabled={indicePregunta === preguntas.length - 1}
        >
          <img src={anteriorIcon} alt="Next" style={{ transform: 'rotate(180deg)' }}/>
        </button>
      </div>
      {indicePregunta === preguntas.length - 1 && (
        <button
          className="bg-lime-900 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={guardarRespuestas}
        >
          Guardar
        </button>
      )}
    </div>
  );
};

export default Preguntas;
