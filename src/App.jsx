import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Typewriter from "typewriter-effect";
import "./layout.css";
import "./App.css";
import xmark from "./assets/incorrect-icon.png";
import checkmark from "./assets/tick-mark-icon.png";
import { Water, Fire, Grass } from "./types.js";

function App() {
  const types = [Water, Fire, Grass];

  const [defenderTypes, setDefenderTypes] = useState(types);

  const [attacker, setAttacker] = useState(Fire);

  const [currentDefenderIndex, setCurrentDefenderIndex] = useState(0);

  const [defender, setDefender] = useState(defenderTypes[currentDefenderIndex]);

  const [answer, setAnswer] = useState("");

  const [result, setResult] = useState("");

  const [isCorrect, setIsCorrect] = useState("");

  const [changeAttackIsOpen, setChangeAttackIsOpen] = useState(false);

  const [correctCount, setCorrectCount] = useState(0);

  const [completedAttackers, setCompletedAttackers] = useState([]);

  const [isPokemonMaster, setIsPokemonMaster] = useState(false);

  useEffect(() => {
    if (correctCount === types.length) {
      setCompletedAttackers((prev) => {
        if (!prev.includes(attacker.name)) {
          return [...prev, attacker.name];
        }
        return prev;
      });
    }
  }, [correctCount, attacker.name]);

  useEffect(() => {
    if (completedAttackers.length === types.length) {
      setIsPokemonMaster(true);
    }
  }, [completedAttackers, types]);

  const onAnswerClick = (effectiveness) => {
    setAnswer(effectiveness);
  };

  const onAttack = () => {
    if (attacker.superEffective.includes(defender.name)) {
      return "super effective";
    } else if (attacker.notVeryEffective.includes(defender.name)) {
      return "not very effective";
    } else if (attacker.noEffect.includes(defender.name)) {
      return "no effect";
    } else {
      return "effective";
    }
  };

  const attackClick = () => {
    if (onAttack() === answer) {
      if (defenderTypes.length === 1) {
        setResult(`You have mastered ${attacker.name}!`);
      } else {
        setResult(`Correct! It is ${onAttack()}!`);
      }
      removeCurrentDefender(defender);
      setIsCorrect(true);
      setCorrectCount((prev) => prev + 1);
    } else {
      setResult(
        `Incorrect, ${attacker.name} is ${onAttack()} against ${defender.name}.`
      );
      setIsCorrect(false);
    }
  };

  const removeCurrentDefender = (type) => {
    const updatedDefenders = defenderTypes.filter((t) => t.name !== type.name);
    setDefenderTypes(updatedDefenders);
  };

  const nextDefender = () => {
    if (isCorrect) {
      const nextIndex = currentDefenderIndex % defenderTypes.length;
      setDefender(defenderTypes[nextIndex]);
    } else {
      const nextIndex = (currentDefenderIndex + 1) % defenderTypes.length;
      setCurrentDefenderIndex(nextIndex);
      setDefender(defenderTypes[nextIndex]);
    }
    setAnswer("");
    setResult("");
  };

  const changeAttacker = (attacker) => {
    setAttacker(attacker);
    setAnswer("");
    setResult("");
    setCorrectCount(0);
    setDefenderTypes(types);
  };

  const resetAttacker = (attackerToReset) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to reset the attacker?"
    );
    if (isConfirmed) {
      setCompletedAttackers((prevAttackers) =>
        prevAttackers.filter((attacker) => attacker !== attackerToReset)
      );
      setAnswer("");
      setResult("");
      setCorrectCount(0);
      setDefenderTypes(types);
    } else {
      ("");
    }
  };

  return (
    <>
      <h1>{isPokemonMaster ? "Pokemon Master" : "Pokemon Trainer"}</h1>
      <div className="pokemon-trainer-container">
        <div className="left-side">
          <div className="ChangeAttacker">
            <button onClick={() => setChangeAttackIsOpen((prev) => !prev)}>
              Choose Attacker
            </button>
            <ul
              className="AttackerList"
              style={
                changeAttackIsOpen ? { display: "flex" } : { display: "none" }
              }
            >
              <p>Mastered = *</p>
              {types.map((type, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      changeAttacker(type);
                      setChangeAttackIsOpen(false);
                      setCorrectCount(0);
                    }}
                    style={{ color: type.color }}
                  >
                    {type.name}
                    {completedAttackers.includes(type.name) ? "*" : ""}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="center">
          <div className="battle">
            <div className="Gym">
              <h2 style={{ backgroundColor: attacker.color }}>
                {attacker.name}
              </h2>
              <div>
                <h2 style={{ color: attacker.color }}>Attacks</h2>
              </div>
              <h2 style={{ backgroundColor: defender.color }}>
                {defender.name}
              </h2>
            </div>
            <div className="options">
              <div className="battletext">
                {!result ? (
                  <>
                    <p>The move will be?</p>
                    <p>{answer} &nbsp;</p>
                  </>
                ) : (
                  <p>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString(`${result}`).start();
                      }}
                      options={{
                        loop: false,
                        cursor: "",
                        delay: 40,
                      }}
                    />
                  </p>
                )}
              </div>
              <div className="effectiveness-buttons">
                <button onClick={() => onAnswerClick("not very effective")}>
                  Not very Effective <br></br>×½
                </button>
                <button onClick={() => onAnswerClick("effective")}>
                  Effective <br></br> ×1
                </button>
                <button onClick={() => onAnswerClick("super effective")}>
                  Super effective <br></br> ×2
                </button>
                <button onClick={() => onAnswerClick("no effect")}>
                  No Effect <br></br> ×0
                </button>
              </div>
            </div>
          </div>
          <div className="attack-section">
            {completedAttackers.includes(attacker.name) ? (
                  <>
                    <p>
                      {" "}
                      <button onClick={() => resetAttacker(attacker.name)}>
                        Reset this attacker
                      </button>{" "}
                      &nbsp; or choose a different attacker.
                    </p>
                  </>
                ) : ( <>
            {!result ? (
              <div>
                <button
                  disabled={result || answer === ""}
                  className="Attack"
                  onClick={() => attackClick()}
                >
                  Attack
                </button>
              </div>
            ) : (
              <div>
                <>
                  <button className="Attack" style={{ marginRight: "12px", backgroundColor: `${isCorrect ? "green" : "red"}`}}>
                    {isCorrect ? (
                      <img src={checkmark} style={{ width: "12px", backgroundColor: "white", padding: "2px", borderRadius: "100%"}}></img>
                    ) : (
                      <img src={xmark} style={{ width: "12px", backgroundColor: "white", padding: "2px", borderRadius: "100%" }}></img>
                    )}
                  </button>
                  <button onClick={() => nextDefender()}>Next Defender </button>
                </>
              </div>
            )} </> )}
          </div>
        </div>
        <div className="right-side">
          <p>
            Defenders Remaining vs {attacker.name}:{" "}
            <strong>{defenderTypes.length}</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
