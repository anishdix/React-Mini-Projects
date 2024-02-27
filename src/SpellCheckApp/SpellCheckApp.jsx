import React, { useState } from 'react'

const SpellCheckApp = () => {
    const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example",
      };
    const [suggestedText,setSuggestedText]=useState("")
    const [inputText,setInputText]=useState("")


      const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text)
    
        // Implement a basic spelling check and correction
        const words = text.split(" ");
        const correctedWords = words.map((word) => {
          const correctedWord = customDictionary[word.toLowerCase()];
          return correctedWord || word;
        });
    
    
        // Set the suggested text (first corrected word)
        const firstCorrection = correctedWords.find(
          (word, index) => word !== words[index]
        );
        setSuggestedText( firstCorrection || "" );
      };
      return (
        <div>
          <h1>Spell Check and Auto-Correction</h1>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text..."
            rows={5}
            cols={40}
          />
          {suggestedText && (
            <p>
              Did you mean: <strong>{suggestedText}</strong>?
            </p>
          )}
        </div>
      );
}

export default SpellCheckApp