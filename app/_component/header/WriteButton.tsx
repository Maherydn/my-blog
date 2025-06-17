import { PencilIcon } from "@/app/_assets/icon";

export const WriteButton = () => {
  return (
    <div className="flex flex-col w-24 h-full justify-center items-center  border-l border-slate-200 ">
      <h3 className="font-semibold text-lg">Write</h3>
      <div className="w-12 h-3 ml-4">
        <PencilIcon />
      </div>
    </div>
  );
};
