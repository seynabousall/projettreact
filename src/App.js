import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 class="h1">formulaire</h1>
      <InputGroup className="mb-3 pt-3">
        <InputGroup.Text id="basic-addon1">prenom</InputGroup.Text>
        <Form.Control
          placeholder="votre prenom"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3  pt-3">
        <InputGroup.Text id="basic-addon1">nom</InputGroup.Text>
        <Form.Control
          placeholder="votre nom"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3 pt-3">
        <InputGroup.Text id="basic-addon1">adresse</InputGroup.Text>
        <Form.Control
          placeholder="votre adresse"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3 pt-3">
        <InputGroup.Text id="basic-addon1">telephone</InputGroup.Text>
        <Form.Control
          placeholder="votre telephone"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      
      <InputGroup className="mb-3 pt-3 ">
        <InputGroup.Text id="basic-addon1">email</InputGroup.Text>
        <Form.Control
          placeholder="votre email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      
      <Button class="pre w-65 mt-2">envoyer</Button>
       
      </header>
    </div>
  );
}

export default App;
