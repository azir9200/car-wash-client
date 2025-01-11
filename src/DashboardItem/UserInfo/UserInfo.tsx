// import { useGetMeQuery } from "../redux/api/getMeApi/getMeApi";

import { useGetMeQuery } from "@/redux/Api/getMeApi";

const UserInfo = () => {
  const { data } = useGetMeQuery(undefined);

  const myself = data?.data;

  return (
    <div className="container mx-auto p-16">
      <div className="container mx-auto p-8  bg-slate-600 text-stone-100 font-semibold text-3xl space-y-4 ">
        <img src={myself} alt="" className="rounded-full " />
        <h2>Welcome {myself} </h2>
        <h3>Thank so much {myself} for using our site.</h3>
      </div>
    </div>
  );
};

export default UserInfo;
