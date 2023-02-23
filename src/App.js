import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import './App.css';

import FirstNameForm from './components/FirsNameForm';
import PdfDocument from './components/PdfDocument';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [renderPdf, setRenderPdf] = useState(false);

  return (
    <div>
      {!renderPdf && (
        <FirstNameForm
          firstName={firstName}
          setFirstName={setFirstName}
          handleSubmit={() => {
          
                      setRenderPdf(true);


                      
          }}
        />
      )}
      {renderPdf && (
        <div className="pdf-container">
          <PDFViewer
            style={{
              width: '100%',
              height: '100vh',
            }}
          >
            <PdfDocument firstName={firstName} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default App;
