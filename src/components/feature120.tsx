import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Feature120 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col gap-2.5 py-8">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Why work with us?
            </h1>
            <p className="text-muted-foreground">
              We’ve been in this industry for over 15 years, so we know what
              works, and what doesn’t. We’re not a faceless enterprise. You’ll
              get to know our management team personally, because we stay
              involved and hands-on.
            </p>
            <p className="text-muted-foreground">
              We take our work seriously, and we care about how people are
              treated. If you’re feeling overwhelmed by all the tech decisions
              on your plate, we’re here to take that weight off so you can focus
              on what you do best.
            </p>
            <div className="flex flex-col gap-6 py-10 sm:flex-row sm:gap-16">
              <div className="flex gap-4 leading-5">
                <Avatar className="ring-input size-9 rounded-full ring-1">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="avatar"
                  />
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">Robert McManus</p>
                  <p className="text-muted-foreground italic">
                    "I have worked with MacTribe for over a decade. They have
                    infinite patience with my less techno savvy moments (which
                    are many). They have successfully resolved seemingly
                    impossible challenges quickly, efficiently and at rates
                    which are exceedingly reasonable. Jean has assembled an
                    amazing team who I cannot recommend highly enough."
                  </p>
                </div>
              </div>
            </div>
            <Button className="w-fit">Book in your FREE IT assessment</Button>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="h-full max-h-[800px] w-full rounded-xl object-cover"
          />
        </div>
        <Separator className="my-12" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-2 text-4xl font-semibold md:text-6xl">15+</h2>
            <p className="text-muted-foreground">
              Years of delivering excellence
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-4xl font-semibold md:text-6xl">98%</h2>
            <p className="text-muted-foreground">
              IT problems solved in quick remote sessions
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-4xl font-semibold md:text-6xl">25</h2>
            <p className="text-muted-foreground">
              Prestigious awards for innovation
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-4xl font-semibold md:text-6xl">&gt;30k</h2>
            <p className="text-muted-foreground">
              Thriving businesses using our platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature120 };
