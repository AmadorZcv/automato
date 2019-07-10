import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const [values, setValues] = React.useState({
    value: '',
    automato: null,
    error: false,
    oldAut: null,
    valid: false
  });
  const Q1 = value => {
    let automato = null
    let valid = false;
    if (value === "X" || value === "Y") {
      automato = "Q1"
    } else if (value === "A" || value === "B") {
      automato = "Q2"
    }
    else if (value === "1" || value === "2") {
      valid = true
      automato = "Q3"
    }
    else {
      console.log("erro Q1")
    }
    return { automato, valid };
  }
  const Q2 = value => {
    let automato = null
    let valid = false;
    if (value === "A" || value === "B") {
      automato = "Q2"
    }
    else if (value === "1" || value === "2") {
      valid = true
      automato = "Q3"
    }
    else {
      console.log("erro Q2")

    }
    return { automato, valid };
  }
  const handleValue = event => {
    const { value } = event.target
    let autToCompare = values.automato;
    let valueToUse = value;
    if (value.length < values.value.length) {
      console.log("Emtrou", values.value, "Es", values.oldAut)
      autToCompare = values.oldAut;
      valueToUse = values.value.slice(0, values.value.length - 1);
    }
    const trueValue = valueToUse.slice(valueToUse.length - 1, valueToUse.length);

    let automato = null;

    let valid = false
    if (autToCompare === null || autToCompare === "Q1") {
      const retorno = Q1(trueValue);
      automato = retorno.automato;
      valid = retorno.valid;
    } else if (autToCompare === "Q2") {

      const retorno = Q2(trueValue);
      automato = retorno.automato;
      valid = retorno.valid;
    } else if (autToCompare === "Q3") {
      console.log("erro Q3")
      automato = "Q3"
    }

    setValues({ ...values, value, automato, valid, oldAut: values.automato });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Estado é {values.automato}
        <TextField
          id="outlined-name"
          label="String"
          value={values.value}
          onChange={(event) => handleValue(event)}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={() => setValues({ ...values, value: "", automato: null, valid: false })}>
          Resetar
      </Button>
        A string é válida {values.valid.toString()}
      </header>
    </div>
  );
}

export default App;
