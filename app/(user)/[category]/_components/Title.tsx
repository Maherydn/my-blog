type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="capitalize font-bold text-4xl text-slate-400">
      {title}
    </h2>
  );
};
