import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const {
    selectCategory,
    setSelectCategory,
    setDueDate,
    dueDate,
    alert,
    setAlert,
    handleCreateTask,
  }: any = useGlobalContext();
  //destructure optioned meal and rename the keys
  const handleSelectedCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectCategory(event.target.value);
  };
  const handleDueDate = (event: React.ChangeEvent<HTMLInputElement>) => {
   
    setDueDate(event?.target.value);
  };

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        {/*  //<img src={image} alt={title} className="img modal-img"/> */}
        <div className="modal-content">
          <h4>please option the category of your task</h4>

          <select
            onChange={handleSelectedCategory}
            value={selectCategory}
            className=" p-2 rounded-lg"
          >
            <option value="">--</option>
            <option value="Study">Study</option>
            <option value="Home">Home</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="RoadTrip">Road Trip</option>
            <option value="Exercise">Exercise</option>
            <option value="Others">Others</option>
          </select>
          <h4 className="text">
            please enter the due date of this task in the format given
          </h4>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="rounded-lg "
            value={dueDate}
            onChange={handleDueDate}
          />
          {/*  <a href={source} target='_blank'>Original Source</a> */}
          {alert && <div className="form-alert">{alert.error}</div>}
          <div className="flex justify-evenly mt-4">
          <button
            className="btn btn-hipster close-btn"  onClick={handleCreateTask}
          >
            {" "}
            Add Task
          </button>

          <button
            className="btn btn-hipster close-btn"  onClick={handleCreateTask}
          >
            Cancel
          </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
