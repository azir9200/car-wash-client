import { removeTask, updateStatus } from "@/redux/features/tasksSlice";
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { Popconfirm, message } from "antd";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  let updatedStatus;

  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }
  const handleRemove = (id) => {
    dispatch(removeTask(id));
    message.success("Task removed successfully!");
  };

  const handleUpdateStatus = () => {
    dispatch(updateStatus({ id: task.id, status: updatedStatus }));
    message.success(`Task status updated to "${updatedStatus}"!`);
  };
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === "high" ? "text-red-500" : ""
        } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
          task.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>

        <div className="flex gap-3">
          {/* Confirmation dialog for removing a task */}
          <Popconfirm
            title="Are you sure you want to remove this task?"
            onConfirm={() => handleRemove(task.id)}
            okText="Yes"
            cancelText="No"
          >
            <button title="Delete">
              <TrashIcon className="h-5 w-5 text-red-500" />
            </button>
          </Popconfirm>

          {/* Update status button */}
          <button onClick={handleUpdateStatus} title="Update Status">
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus }))
            }
            title="Update Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TaskCard;
