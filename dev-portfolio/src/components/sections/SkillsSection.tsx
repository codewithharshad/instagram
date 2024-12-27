import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Marquee from "@/components/ui/marquee";

const BLUR_FADE_DELAY = 0.04;
const companies = [
  "skill1",
  "skill2",
  "skill3",
  "skill4",
  "skill5",
  "skill6",
  "skill7",
];
export function SkillsSection() {
  return (
    <section id="skills">
         <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center justify-center py-3">
            <div className="inline-block rounded-lg bg-resume-border text-white px-3 py-1 text-sm">
              Skills
            </div>
            </div>
          <h3 className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            From Code to Creativity
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://portfolio-2-cnn.pages.dev/${logo}.svg`}
                  className="h-10 w-28"
                  alt={logo}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-resume-start"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-resume-start"></div>
          </div>
        </div>
      </div>
      {/* <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div> */}
    </section>
  );
}