import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props) => {
  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }

  const [showText, setShowText] = useState(false);

  const text = showText ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
