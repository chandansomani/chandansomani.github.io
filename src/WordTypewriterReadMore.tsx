import React, { useEffect, useState } from "react";

type Props = {
  text: string;
  previewLength?: number;
  speed?: number; // delay per word (ms)
};

const WordTypewriterReadMore: React.FC<Props> = ({
  text,
  previewLength = 80,
  speed = 120,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  const words = text.split(" ");
  const previewText = text.slice(0, previewLength) + "...";

  useEffect(() => {
    if (!expanded) return;

    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          prev ? prev + " " + words[wordIndex] : words[wordIndex]
        );
        setWordIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [wordIndex, expanded, words, speed]);

  const handleExpand = () => {
    if (!expanded) {
      setExpanded(true);
      setDisplayedText("");
      setWordIndex(0);
    }
  };

  const handleSkip = () => {
    setDisplayedText(text);
    setWordIndex(words.length);
  };

  return (
    <div>
      {!expanded ? (
        <p
          onClick={handleExpand}
          className="cursor-pointer text-gray-600 hover:text-black"
        >
          {previewText}{" "}
          <span className="text-blue-500 font-medium">Read more</span>
        </p>
      ) : (
        <div>
          {displayedText}
          {/* <p className="text-gray-800 leading-relaxed"> {displayedText} </p> */}

          {wordIndex < words.length - 20 && (
            <button
              onClick={handleSkip}
              className="mt-2 text-sm text-blue-500 hover:underline"
            >
              Skip
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WordTypewriterReadMore;