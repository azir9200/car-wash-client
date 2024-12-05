import { useGetMeQuery } from "@/redux/Api/getMeApi";
import { setUserTasks } from "@/redux/features/tasksSlice";
import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyTasks = () => {
  const dispatch = useDispatch();
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
  console.log("specfic", userSpecificTasks);
  const { data } = useGetMeQuery(undefined);
  const name = data?.data?.name;
  console.log("login name", name);

  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const handleModal = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(setUserTasks(name));
  }, [name, dispatch, tasks]);

  return (
    <div>
      <h1 className=" my-3 rounded bg-slate-800 text-white font-semibold text-xl">
        {" "}
        Hi My Name is {name}.
      </h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1> {item.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
