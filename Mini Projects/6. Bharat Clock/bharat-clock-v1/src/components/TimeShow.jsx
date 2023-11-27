function TimeShow() {
  let date = new Date();
  return (
    <div>
      <p className="time-show">
        This is the current time:{" "}
        <span>
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </span>{" "}
        -{" "}
        <span className="sec-span">
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </span>
      </p>
    </div>
  );
}

export default TimeShow;
