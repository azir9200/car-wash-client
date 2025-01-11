import { useCreateServiceMutation } from "@/redux/Api/serviceApi";
import { useForm } from "react-hook-form";

const CreateService = () => {
  const { register, handleSubmit } = useForm();
  const [setPost, { data: postData }] = useCreateServiceMutation();

  console.log("object postData", postData);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    setPost(data);
  };

  return (
    <div>
      <div className="my-8">
        <form className="flex gap-3 m-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full text-zinc-400 p-3 rounded-md"
            type="text"
            {...register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-800 text-zinc-300 p-3 border border-zinc-300 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
