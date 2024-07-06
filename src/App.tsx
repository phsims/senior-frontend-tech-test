import { Cypher } from "./Cypher/Cypher";
import "./App.css";

function App() {
  return (
    <>
      {/* <div>
        <h1>The Bots Frontend coding challenge</h1>
        <p>
          For this challenge we would like you to create a{" "}
          <a href="https://en.wikipedia.org/wiki/Caesar_cipher">
            Caeser Cipher
          </a>
          . You will create an input, which will take any string and apply the
          cipher, then display the results below.
        </p>
        <h2>The Spec</h2>
        <ul>
          <li>
            Create a form which takes a string input, and outputs the string
            with the cipher applied
          </li>
          <li>
            Add a form element to set if the cipher is applied forwards or
            backwards
          </li>
          <li>Numbers & special characters should be ignored</li>
        </ul>

        <h2>Getting started</h2>
        <ul>
          <li>Open a terminal and run `npm run dev`</li>
          <li>A second terminal can be opened to run tests: `npm run test`</li>
        </ul>

        <h2>Considerations</h2>
        <ul>
          <li>No libraries please</li>
          <li>Please provide the solution with tests & types</li>
          <li>Expected time should be 1 hour</li>
        </ul>
        <p>
          Please fork this repo and send us a link to your solution. Good luck!
        </p>
      </div> */}
      <Cypher />
    </>
  );
}

export default App;
