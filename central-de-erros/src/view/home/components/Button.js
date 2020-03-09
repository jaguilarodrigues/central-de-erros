import React from "react";

function Button({ value }) {
  return (
    <form>
      <input className="button-itens" type="submit" value={value} />
    </form>
  );
}

export default Button;
