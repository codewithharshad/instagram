import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-4xl space-y-8  ">
        
        <div className="gap-3 flex justify-between ">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-60">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
          
          <div className="relative flex flex-col items-start justify-center space-y-2">
             
            <div  className="-left-28 -rotate-12 -top-4 absolute w-40 h-32">
              <BlurFade delay={BLUR_FADE_DELAY}>
              <img
                src={DATA.arrow}
                alt="Arrow pointing to avatar"
                className=" absolute left-0 w-40 transform rotate-45"
              />
              </BlurFade>
          </div>
         
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text/6xl"
              yOffset={8}
              text={`Hello there! I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}