import { useGetMeQuery } from "@/redux/Api/getMeApi";
import { userTasks } from "@/redux/features/tasksSlice";
import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyTasks = () => {
  const { email } = useSelector((state) => state.tasksSlice);
  const { data } = useGetMeQuery(undefined);
  console.log("data", data);
  const myself = data?.data;
  console.log("myself", myself);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const dispatch = useDispatch();
  const handleModal = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(userTasks(email));
  }, [email, dispatch]);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
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
