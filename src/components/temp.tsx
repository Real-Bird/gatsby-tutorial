import React from "react";

export default function Temp() {
  const [change, setChange] = React.useState(false);
  const onChangeClick = () => setChange((prev) => !prev);
  return (
    <div>
      <h3>{change ? "That" : "This"} Temp Page</h3>
      <button onClick={onChangeClick}>
        Change {change ? "That ➡ This" : "This ➡ That"}
      </button>
    </div>
  );
}
