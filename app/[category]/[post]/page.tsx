import Image from "next/image";
import { LikeIcon } from "./_assets/icon";
import TextMarkdown from "./_components/TextMarkdown";

const markdown = `# What is a Chocolate Chip Cookie?

A chocolate chip cookie is a sweet baked treat that is recognized by its butter flavor and the inclusion of chocolate chips. Some variations can include nuts, oatmeal or raisins as well. Commercially available formats of chocolate chips cookies include:

- Fresh  
- Packaged  
- Frozen dough

## Common variations of chocolate chip cookies include:

- Chewy  
- Crispy  
- Chunky

## Commercial production

Chocolate chip cookies are commercially produced through the following process:

- Scaling and weighing ingredients separately  
- First stage mixing: fat, sugars, water, salt, eggs, vanilla and leavening agent are mixed in a horizontal or vertical mixer  
- Second stage mixing: flour is added and mixing continues till homogeneous  
- Chocolate chip addition  
- Forming: dough is fed to the hopper of a wire cut machine, and the cut dough pieces are placed on a greased baking tray  
- Baking: cookie dough is baked at 180 – 220 °C (356 – 428 °F) for 7 min  
- Cooling: cookies are cooled down for 5 min  
- Packaging and storage  
`;

export default function PostPage() {
  return (
    <div className="flex flex-col w-full justify-start items-center py-12">
      <div className="md:w-2xl w-full px-2 flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="capitalize md:text-5xl text-4xl font-bold">
              taste my delightful cookie.
            </h2>
            <p className="text-lg text-slate-400">
              Explore the recipe of best chocolate chip cookies
            </p>
            <div className="flex items-center justify-start gap-4">
              <div className="h-12 w-12 bg-slate-400 rounded-full relative"></div>
              <h3 className="text-2xl text-slate-400 capitalize">Nami</h3>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="w-full h-px bg-slate-400/40"></div>
              <div className="flex gap-4 px-4 w-full items-center justify-start">
                <div className="flex gap-2 w-12 h-4">
                  <LikeIcon />
                  <p>25</p>
                </div>
                <div className="flex gap-2 w-12 h-4">
                  <LikeIcon />
                  <p>25</p>
                </div>
                <div className="flex gap-2 w-12 h-4">
                  <LikeIcon />
                  <p>25</p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-400/40"></div>
            </div>
          </div>

          <div className="w-full md:h-96 h-48 relative">
            <Image
              src="/image/coockies.png"
              fill
              alt="cookies"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ✅ Affichage du texte en paragraphes */}
          <div className="w-full text-start space-y-4">
            <TextMarkdown content={markdown} />
          </div>
        </div>
      </div>
    </div>
  );
}
