function TodoItem2() {
  let todoName = "Buy Milk";
  let todoDate = "27-11-2023";
  return (
    <div class="container">
      <div class="row d-row">
        <div class="col-6"> {todoName} </div>
        <div class="col-4"> {todoDate} </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger d-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
