import React, { useState, useRef } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import { useReactToPrint } from 'react-to-print';

import Header from './components/Header';
import Document from './components/Document';
import Button from './components/Button';

const App = () => {
  const componentRef = useRef();

  const [sampleValues, setSampleValues] = useState({
    tel: '',
    email: '',
    address: '',
    perfil: '',
    languages: [],
    references: '',
    name: '',
    career: '',
    academicFormation: [],
  });

  const handleLoadSample = () => {
    setSampleValues({
      tel: '987 652 921',
      email: 'random621@gmail.com',
      address: 'Las Casas 782',
      perfil:
        'Innovadora, creativa y profesional. Especializada en Marketing Digital y SM Marketing. Soy una chica alegre, ambiciosa y resiliente. Amante de mi trabajo y de conseguir objetivos en equipo. ',
      languages: [
        'Español - Nativo',
        'Inglés - Avanzado',
        'Frances - Intermedio',
      ],
      references: 'Disponibles bajo petición.',
      name: 'Daya Khart',
      career: 'Digital Marketer',
      academicFormation: [
        [
          { collegue: 'Universidad de Madrid' },
          { career: 'Carrera Publicidad y Relaciones Públicas' },
          { year: '2013/2016' },
        ],
        [
          { collegue: 'London Master University' },
          { career: 'Master en Marketing Digital' },
          { year: '2016/2018' },
        ],
      ],
      experienceInfo: [
        [{ title: 'Agencia de Marketing | 2018-2019' }, { text: loremIpsum() }],
        [{ title: 'Fauget Marketing | 2019-2020' }, { text: loremIpsum() }],
      ],
    });
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Header />
      <main>
        <div ref={componentRef}>
          <Document sampleValues={sampleValues} />
        </div>

        <div className="btn-actions">
          <Button
            value="Load Sample"
            haveClass="width-300"
            onClick={handleLoadSample}
          />

          <Button
            value="Generate Pdf"
            haveClass="width-300"
            onClick={handlePrint}
          />
        </div>
      </main>
    </>
  );
};

export default App;
