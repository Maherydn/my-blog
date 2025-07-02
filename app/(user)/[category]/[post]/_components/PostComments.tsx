export const PostComments = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <h3 className="capitalize text-xl text-slate-900 px-6 py-1 rounded-lg border border-slate-200/20 shadow-lg w-fit">
        comments
      </h3>
      <div className="flex md:flex-row flex-col  h-fit gap-6 ">
        <textarea
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition duration-150 text-lg placeholder-gray-400 resize-none min-h-36"
          placeholder="Add a comment..."
          aria-label="Comment"
        />

        <button className="text-white uppercase text-xl bg-black px-6 py-2 rounded-lg shadow-lg h-fit">
          send
        </button>
      </div>

      <div className="flex flex-col gap-12 border-l-2 border-l-slate-400/40 shadow-lg w-full py-6 pl-6 md:pl-24 pr-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-start gap-8">
            <div className="flex gap-2 h-full items-center">
              <div className="h-8 w-8 rounded-full bg-slate-400"></div>
              <h3 className="text-slate-800 font-semibold text-xl">Luffy</h3>
            </div>
            <p className="text-slate-400 text-lg">1 month ago</p>
          </div>
          <p className="text-slate-400 text-xl">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-start gap-8">
            <div className="flex gap-2 h-full items-center">
              <div className="h-8 w-8 rounded-full bg-slate-400"></div>
              <h3 className="text-slate-800 font-semibold text-xl">Luffy</h3>
            </div>
            <p className="text-slate-400 text-lg">1 month ago</p>
          </div>
          <p className="text-slate-400 text-xl">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-start gap-8">
            <div className="flex gap-2 h-full items-center">
              <div className="h-8 w-8 rounded-full bg-slate-400"></div>
              <h3 className="text-slate-800 font-semibold text-xl">Luffy</h3>
            </div>
            <p className="text-slate-400 text-lg">1 month ago</p>
          </div>
          <p className="text-slate-400 text-xl">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </div>
  );
};
