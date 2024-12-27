import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-4xl space-y-8   lg:px-12  px-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-60">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>

          <div className="relative flex flex-col items-center sm:items-start  justify-center   space-y-4   md:mt-10">
            {/* Hide the arrow on small screens */}
            <div className="absolute -left-28 -top-10 -rotate-12 w-40 h-32 hidden sm:block">
              <BlurFade delay={BLUR_FADE_DELAY}  >
                <img
                  src={DATA.arrow}
                  alt="Arrow pointing to avatar"
                  className="absolute left-0 w-40 transform rotate-45"
                />
              </BlurFade>
            </div>

            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl xl:text-4xl  "
              yOffset={8}
              text={`Hello there! I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="text-sm sm:text-base md:text-lg max-w-[600px]"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
