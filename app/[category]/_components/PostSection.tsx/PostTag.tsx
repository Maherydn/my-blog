type PostCardProps = {
  label: string;
};

export const PostTag = ({ label }: PostCardProps) => {
  return (
    <div className="w-fit px-4 py-1 rounded-full text-lg text-center shadow-lg border border-slate-400/20">
      {label}
    </div>
  );
};
