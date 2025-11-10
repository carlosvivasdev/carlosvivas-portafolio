import { aboutMeData, HeroAboutMe } from "@/feature/aboutme";
// import { SkillsE } from "@/feature/skills/SkillsE";

export default function AboutMe() {

  return (
    <>
      <HeroAboutMe data={aboutMeData} />
      {/* <SkillsE /> */}
    </>
  );
}