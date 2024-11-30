import Tag from "./Tag";
import IntegrationsColumn from "./IntegrationsColumn";

import figmaIcon from "../../public/images/figma-logo.svg";
import notionIcon from "../../public/images/notion-logo.svg";
import slackIcon from "../../public/images/slack-logo.svg";
import relumeIcon from "../../public/images/relume-logo.svg";
import framerIcon from "../../public/images/framer-logo.svg";
import githubIcon from "../../public/images/github-logo.svg";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export default function Integrations() {
  return (
    <section className="px-4 py-24 overflow-hidden">
      <div className="container custom-container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl mb-8 font-medium mt-6">
              Plays well with{" "}
              <span className="text-primary-400 font-bold">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg lg:text-xl ">
              Layers seamlessly connects with your favourite tools. making the
              ease to plug in any workflow and collaborate across platforms.
            </p>
          </div>
          <div>
            <div className="h-[510px] lg:mt-0 lg:h-[800px] overflow-hidden mt-8 integrations-mask grid md:grid-cols-2 gap-6 ">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                reverse={true}
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
