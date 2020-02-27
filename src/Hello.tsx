import * as React from "react";

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export const Hello: React.FC<Props> = ({ name, enthusiasmLevel }) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
