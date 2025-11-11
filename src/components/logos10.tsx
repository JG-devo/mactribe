'use client';

import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Logos10 = () => {
  const logos = [
    {
      id: 'logo-1',
      description: 'Logo 1',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
      className: 'h-7 w-auto dark:invert',
    },
    {
      id: 'logo-2',
      description: 'Logo 2',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg',
      className: 'h-7 w-auto dark:invert',
    },
    {
      id: 'logo-3',
      description: 'Logo 3',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg',
      className: 'h-7 w-auto dark:invert',
    },
    {
      id: 'logo-4',
      description: 'Logo 4',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg',
      className: 'h-7 w-auto dark:invert',
    },
    {
      id: 'logo-5',
      description: 'Logo 5',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg',
      className: 'h-7 w-auto dark:invert',
    },
    {
      id: 'logo-6',
      description: 'Logo 6',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg',
      className: 'h-5 w-auto dark:invert',
    },
    {
      id: 'logo-7',
      description: 'Logo 7',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg',
      className: 'h-7 w-auto dark:invert',
    },
    {
      id: 'logo-8',
      description: 'Logo 8',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg',
      className: 'h-7 w-auto dark:invert',
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-pretty mb-6 max-w-4xl text-3xl font-bold tracking-tight lg:text-5xl">
          We work with charities, law firms,{' '}
          <span className="text-muted-foreground/40">creative studios, </span>
          record labels, architects, and plenty more.
        </h2>

        {/* <div className="bg-muted flex w-fit items-center justify-center gap-4 rounded-full px-4 py-2 tracking-tight transition-all ease-in-out hover:gap-6">
          <span className="bg-foreground inline-block size-3 rounded-full" />
          <p className="text-foreground">Checkout Our Users</p>
        </div> */}

        <p className="text-muted-foreground mb-16 max-w-3xl lg:text-xl">
          We support a mix of in-house and remote teams. Some of our clients are
          small and nimble. Others have large offices and manage staff all over
          the world. Ultimately, all of our clients all want the same thing: IT
          support that <span className="italic">just works.</span>
        </p>

        <div className="relative mx-auto flex items-center justify-center pt-8">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={logo.id}
                  className="h-35 border-border relative flex basis-1/2 justify-center border border-r-0 pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center justify-center lg:mx-10">
                    <p className="absolute left-2 top-2 text-xs tracking-tighter">
                      {(index + 1).toString().padStart(2, '0')}
                    </p>
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-32 to-transparent"></div>
          <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-32 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos10 };
