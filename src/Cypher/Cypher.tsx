import { useState, useMemo, ChangeEvent, FormEvent } from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";


const applyCipher = (message: string, isToggled: boolean): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let cleanString = message.replace(/[^a-zA-Z]/g, "").toLowerCase();

  if (isToggled) {
    cleanString = cleanString.split("").reverse().join("");
  }

  return cleanString
    .split("")
    .map((letter) => {
      const index = alphabet.indexOf(letter);
      return alphabet[(index + 5) % 26];
    })
    .join("");
};

export function Cypher() {
  const [message, setMessage] = useState<string>("");
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [submittedMessage, setSubmittedMessage] = useState<string>("");

  const cypherString = useMemo(
    () => applyCipher(submittedMessage, isToggled),
    [submittedMessage, isToggled]
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedMessage(message);
  };

  const toggleCypher = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label htmlFor="inputMessage">Input message to encrypt:</label>
        <input
          id="inputMessage"
          type="text"
          value={message}
          onChange={handleInputChange}
        />
        <br />
        <button data-testid="submit" type="submit">Encrypt Message</button>
      </form>
      <section>
        <p>Output encrypted message:</p>
        <p data-testid="encryptedMsg">{cypherString}</p>
        <ToggleButton onToggle={toggleCypher} />
      </section>
    </>
  );
}
