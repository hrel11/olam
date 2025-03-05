import React, { useState } from "react";
import SkillIcon from "~/components/skills/SkillIcon";
import SkillFolder from "~/components/skills/SkillFolder";
import ToggleSwitch from "~/components/ToggleSwitch";

const SkillBoard: React.FC = () => {
  const [showText, setshowText] = useState(false);

  const toggleShowText = () => {
    setshowText(!showText);
  };

  return (
    <div className="flex flex-col gap-4 [&>*]:self-start lg:[&>*]:self-auto">
      <div className="flex flex-col lg:flex-row gap-4 [&>*]:self-start lg:justify-between">
        <p>
          経験値が多いほど枠線が豪華になります
          <br />
          <small>※透明なアイコンは実務経験無し</small>
        </p>

        <div className="flex items-center">
          <p className="min-w-[8em] lg:text-right text-sm">
            テキストを表示する
          </p>
          <ToggleSwitch onToggle={toggleShowText} />
        </div>
      </div>

      <section className="flex flex-wrap gap-6">
        <SkillFolder title="フレームワーク">
          <SkillIcon alt="Remix" rank="gold" showText={showText} />
          <SkillIcon alt="Next.js" rank="gold" showText={showText} />
          <SkillIcon alt="Nuxt.js" rank="gold" showText={showText} />
          <SkillIcon alt="Vue.js" rank="silver" showText={showText} />
          <SkillIcon alt="Astro" rank="gold" showText={showText} />
          <SkillIcon alt="Laravel" rank="gold" showText={showText} />
        </SkillFolder>

        <SkillFolder title="ライブラリ">
          <SkillIcon alt="React" rank="gold" showText={showText} />
          <SkillIcon alt="Redux" rank="silver" showText={showText} />
          <SkillIcon alt="Jotai" rank="silver" showText={showText} />
          <SkillIcon alt="Recoil" rank="silver" showText={showText} />
          <SkillIcon alt="GSAP" rank="silver" showText={showText} />
          <SkillIcon alt="Motion" rank="bronze" showText={showText} />
          <SkillIcon alt="MaterialUI" rank="bronze" showText={showText} />
          <SkillIcon alt="Vuetify" rank="bronze" showText={showText} />
          <SkillIcon alt="jQuery" rank="gold" showText={showText} />
        </SkillFolder>

        <SkillFolder title="言語">
          <SkillIcon alt="HTML5" rank="rainbow" showText={showText} />
          <SkillIcon alt="CSS3" rank="rainbow" showText={showText} />
          <SkillIcon alt="JavaScript" rank="rainbow" showText={showText} />
          <SkillIcon alt="TypeScript" rank="gold" showText={showText} />
          <SkillIcon alt="Python" showText={showText} />
          <SkillIcon alt="PHP" rank="gold" showText={showText} />
          <SkillIcon alt="Java" rank="silver" showText={showText} />
          <SkillIcon alt="Lua" showText={showText} />
          <SkillIcon alt="C" showText={showText} />
          <SkillIcon alt="C++" showText={showText} />
          <SkillIcon alt="C#" showText={showText} />
        </SkillFolder>

        <SkillFolder title="CSS">
          <SkillIcon alt="TailwindCSS" rank="gold" showText={showText} />
          <SkillIcon alt="Emotion" rank="gold" showText={showText} />
          <SkillIcon alt="styled-components" showText={showText} />
          <SkillIcon alt="CSSModules" showText={showText} />
          <SkillIcon alt="Saas" rank="gold" showText={showText} />
          <SkillIcon alt="Bootstrap" rank="silver" showText={showText} />
        </SkillFolder>

        <SkillFolder title="テスト">
          <SkillIcon alt="Storybook" rank="silver" showText={showText} />
          <SkillIcon alt="Jest" rank="silver" showText={showText} />
          <SkillIcon alt="Vitest" rank="silver" showText={showText} />
          <SkillIcon alt="Postman" rank="silver" showText={showText} />
        </SkillFolder>

        <SkillFolder title="ビルドツール">
          <SkillIcon alt="Vite" rank="gold" showText={showText} />
          <SkillIcon alt="webpack" rank="bronze" showText={showText} />
        </SkillFolder>

        <SkillFolder title="DB">
          <SkillIcon alt="MySQL" rank="gold" showText={showText} />
          <SkillIcon alt="PostgreSQL" rank="silver" showText={showText} />
        </SkillFolder>

        <SkillFolder title="インフラ">
          <SkillIcon alt="AWS" rank="bronze" showText={showText} />
          <SkillIcon alt="Cloudflare" showText={showText} />
          <SkillIcon alt="GCP" rank="bronze" showText={showText} />
          <SkillIcon alt="Docker" rank="gold" showText={showText} />
          <SkillIcon alt="Kubernetes" rank="silver" showText={showText} />
          <SkillIcon alt="microCMS" showText={showText} />
        </SkillFolder>

        <SkillFolder title="プロジェクト管理">
          <SkillIcon alt="Git" rank="gold" showText={showText} />
          <SkillIcon alt="GitHub" rank="gold" showText={showText} />
          <SkillIcon alt="BitBucket" rank="silver" showText={showText} />
          <SkillIcon alt="Redmine" rank="gold" showText={showText} />
          <SkillIcon alt="Confluence" rank="silver" showText={showText} />
        </SkillFolder>
      </section>
    </div>
  );
};

export default SkillBoard;
