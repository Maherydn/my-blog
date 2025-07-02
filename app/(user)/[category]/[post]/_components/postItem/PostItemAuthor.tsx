type PostItemAuthorProps = {
  title: string;
  subtitle: string;
  authorName: string;
  avatarUrl?: string; 
};

export const PostItemAuthor = ({
  title,
  subtitle,
  authorName,
  avatarUrl,
}: PostItemAuthorProps) => {
  return (
    <>
      <h2 className="capitalize md:text-5xl text-4xl font-bold">
        {title}
      </h2>
      <p className="text-lg text-slate-400">
        {subtitle}
      </p>
      <div className="flex items-center justify-start gap-4">
        {avatarUrl ? (
        //   <img
        //     src={avatarUrl}
        //     alt={authorName}
        //     className="h-12 w-12 rounded-full object-cover"
        //   />
        <div></div>
        ) : (
          <div className="h-12 w-12 bg-slate-400 rounded-full relative" />
        )}
        <h3 className="text-2xl text-slate-400 capitalize">{authorName}</h3>
      </div>
    </>
  );
};
