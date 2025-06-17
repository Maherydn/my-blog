export default function PostPage() {
  return (
    <div className="flex flex-col w-full justify-start items-center h-screen py12">
      <div className="bg-slate-500 w-2xl flex flex-col justify-between "> 
        <div className="h-8 w-80 py-2 flex items-center justify-between ">
          <div className="flex items-center justify-between w-24">
            <div className="h-8 w-8 bg-slate-200 rounded-full relative">
              {/* <Image
                src={avatarUrl}
                alt=""
                fill
                className="h-full w-full object-cover rounded-lg"
              /> */}
            </div>
            <h3 className="text-lg text-slate-400 capitalize">author </h3>
          </div>
          <div className="w-px h-full bg-slate-200"></div>
          <p className="text-lg text-slate-400 capitalize">date </p>
          <div className="w-px h-full bg-slate-200"></div>
          <p className="text-lg text-slate-400 capitalize">timeToRead</p>
        </div>
      </div>
      hello world
    </div>
    );
}
