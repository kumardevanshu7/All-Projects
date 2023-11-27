function AddToDo() {
  return (
    <div class="container main-container">
      <div class="row d-row">
        <div class="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              Task
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your task..."
              aria-label="Username"
              aria-describedby="addon-wrapping"
            ></input>
          </div>
        </div>
        <div class="col-4">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              Date
            </span>
            <input
              type="date"
              class="form-control"
              placeholder="Enter your task..."
              aria-label="Username"
              aria-describedby="addon-wrapping"
            ></input>
          </div>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success d-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
