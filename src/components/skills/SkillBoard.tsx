import React from 'react';
import SkillIcon from './SkillIcon';
import SkillFolder from './SkillFolder';
import ToggleSwitchForSkillIcon from './ToggleSwitchForSkillIcon';

const SkillBoard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 *:self-start lg:*:self-auto">
      <div className="flex flex-col gap-4 *:self-start lg:flex-row lg:justify-between">
        <p>
          経験値が多いほど枠線が豪華になります
          <br />
          <small>※透明なアイコンは実務経験無し</small>
        </p>

        <div className="flex items-center">
          <p className="min-w-[8em] text-sm lg:text-right">テキストを表示する</p>
          <ToggleSwitchForSkillIcon />
        </div>
      </div>

      <section className="flex flex-wrap gap-3">
        <SkillFolder title="フレームワーク">
          <SkillIcon alt="Remix" rank="gold" />
          <SkillIcon alt="Next.js" rank="gold" />
          <SkillIcon alt="Nuxt.js" rank="gold" />
          <SkillIcon alt="Vue.js" rank="silver" />
          <SkillIcon alt="Astro" rank="gold" />
          <SkillIcon alt="Laravel" rank="gold" />
        </SkillFolder>

        <SkillFolder title="ライブラリ">
          <SkillIcon alt="React" rank="gold" />
          <SkillIcon alt="React Hook Form" rank="silver" />
          <SkillIcon alt="Redux" rank="silver" />
          <SkillIcon alt="Jotai" rank="silver" />
          <SkillIcon alt="Recoil" rank="silver" />
          <SkillIcon alt="GSAP" rank="silver" />
          <SkillIcon alt="Motion" rank="bronze" />
          <SkillIcon alt="MaterialUI" rank="bronze" />
          <SkillIcon alt="Vuetify" rank="bronze" />
          <SkillIcon alt="jQuery" rank="gold" />
        </SkillFolder>

        <SkillFolder title="言語">
          <SkillIcon alt="HTML5" rank="rainbow" />
          <SkillIcon alt="CSS3" rank="rainbow" />
          <SkillIcon alt="JavaScript" rank="rainbow" />
          <SkillIcon alt="TypeScript" rank="gold" />
          <SkillIcon alt="Python" />
          <SkillIcon alt="PHP" rank="gold" />
          <SkillIcon alt="Java" rank="silver" />
          <SkillIcon alt="Lua" />
          <SkillIcon alt="C" />
          <SkillIcon alt="C++" />
          <SkillIcon alt="C#" />
        </SkillFolder>

        <SkillFolder title="CSS">
          <SkillIcon alt="UnoCSS" />
          <SkillIcon alt="TailwindCSS" rank="gold" />
          <SkillIcon alt="Emotion" rank="gold" />
          <SkillIcon alt="styled-components" />
          <SkillIcon alt="CSSModules" />
          <SkillIcon alt="Saas" rank="gold" />
          <SkillIcon alt="Bootstrap" rank="silver" />
        </SkillFolder>

        <SkillFolder title="テスト">
          <SkillIcon alt="Storybook" rank="silver" />
          <SkillIcon alt="Jest" rank="silver" />
          <SkillIcon alt="Vitest" rank="silver" />
          <SkillIcon alt="PHPUnit" rank="silver" />
          <SkillIcon alt="Postman" rank="silver" />
        </SkillFolder>

        <SkillFolder title="ビルドツール">
          <SkillIcon alt="Vite" rank="gold" />
          <SkillIcon alt="webpack" rank="bronze" />
        </SkillFolder>

        <SkillFolder title="DB">
          <SkillIcon alt="MySQL" rank="gold" />
          <SkillIcon alt="PostgreSQL" rank="silver" />
        </SkillFolder>

        <SkillFolder title="インフラ">
          <SkillIcon alt="AWS" rank="bronze" />
          <SkillIcon alt="Cloudflare" />
          <SkillIcon alt="GCP" rank="bronze" />
          <SkillIcon alt="Docker" rank="gold" />
          <SkillIcon alt="Kubernetes" rank="silver" />
          <SkillIcon alt="microCMS" />
        </SkillFolder>

        <SkillFolder title="プロジェクト管理">
          <SkillIcon alt="Git" rank="gold" />
          <SkillIcon alt="GitHub" rank="gold" />
          <SkillIcon alt="Notion" />
          <SkillIcon alt="BitBucket" rank="silver" />
          <SkillIcon alt="Redmine" rank="gold" />
          <SkillIcon alt="Confluence" rank="silver" />
        </SkillFolder>
      </section>
    </div>
  );
};

export default SkillBoard;
