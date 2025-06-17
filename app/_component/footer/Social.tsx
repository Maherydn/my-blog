import {
  FigmaIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/app/_assets/icon";

const icons = [
  { name: "Figma", component: FigmaIcon },
  { name: "LinkedIn", component: LinkedinIcon },
  { name: "GitHub", component: GithubIcon },
  { name: "Twitter", component: TwitterIcon },
  { name: "Instagram", component: InstagramIcon },
];

const Social = () => (
  <div className="w-96 flex flex-col justify-center items-center gap-8">
    <h3 className="uppercase text-2xl text-white">follow on</h3>
    <div className="flex w-full items-center justify-between">
      {icons.map(({ name, component: Icon }) => (
        <div
          key={name}
          className="h-12 w-24 flex items-center justify-center"
          aria-label={`Follow on ${name}`}
        >
          <Icon />
        </div>
      ))}
    </div>
  </div>
);

export default Social;
