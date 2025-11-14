import AboutCard from "./AboutCard";
import { AboutIntro } from "./AboutIntro"

// const cards = [
//   { id: 1, href: "/category/food", imageUrl: "/image/Food.png" },
//   { id: 2, href: "/category/fitness", imageUrl: "/image/Training.png" },
//   { id: 3, href: "/category/tech", imageUrl: "/image/Tech.png" },
//   { id: 4, href: "/category/money", imageUrl: "/image/Money.png" },
// ];
const cards = [
  { id: 1, href: "/food", imageUrl: "/image/Food.png" },
  { id: 2, href: "/lifestyle", imageUrl: "/image/Training.png" },
  { id: 3, href: "/tech", imageUrl: "/image/Tech.png" },
  { id: 4, href: "/money", imageUrl: "/image/Money.png" },
];

export const AboutSection = () => {
    return (
        <div className="w-full py-24 px-12 flex flex-col justify-center items-center gap-20 ">
            <AboutIntro/>
            {/* <div className="xl:w-6xl w-full h-fit flex md:flex-row flex-col flex-wrap items-center justify-center gap-10 bg-black"> */}
            <div className="md:w-6xl w-full h-fit flex md:flex-row flex-col flex-wrap items-center justify-center gap-10">
               {cards.map((card) => (
                    <AboutCard key={card.id} href={card.href} imageUrl={card.imageUrl} />
                ))}
            </div>
        </div>
    );
}