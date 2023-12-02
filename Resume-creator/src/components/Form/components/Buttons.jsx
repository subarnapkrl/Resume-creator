

function Add({ onClick }) {
  return (
    <button type="button" name="add" onClick={onClick}>
      Add
    </button>
  );
}

function Clear({ onClick }) {
  return (
    <button type="button" name="clear" onClick={onClick}>
      Clear
    </button>
  );
}

function Delete({ onClick }) {
  return (
    <button type="button" name="delete" onClick={onClick}>
      Delete
    </button>
  );
}

export { Add, Clear, Delete };