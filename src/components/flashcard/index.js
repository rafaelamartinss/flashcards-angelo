import { useState } from "react";
import "./index.css";

function Flashcard() {
  const [isFront, setIsFront] = useState(true);

  const handleCardClick = () => {
    setIsFront(!isFront);
  };

  return (
    <section>
      <div className="flashcard">
        <div className="card">{isFront ? <p>Answer</p> : <p>Question</p>}</div>
      </div>

      <button onClick={handleCardClick}>Flip Card</button>
    </section>
  );
}

export default Flashcard;
