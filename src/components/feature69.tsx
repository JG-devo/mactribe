'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { ResolvedImage } from '@/lib/resolve-images';
// ResolvedImage lets this React island stay agnostic about how Astro prepared each asset.

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: ResolvedImage;
};

type Feature69Props = {
  // When no data is passed from Astro we fall back to placeholder slides.
  features?: FeatureItem[];
};

const fallbackFeatures: FeatureItem[] = [
  {
    id: 'feature-1',
    title: 'IT Support',
    description:
      'Whether you operate a purely Apple-based business or use a mix of technologies including Microsoft, we’ll help you get the best from all your platforms.',
    href: '#',
    image: {
      kind: 'external',
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    },
  },
  {
    id: 'feature-2',
    title: 'IT Consultancy',
    description:
      'If you have a goal in mind or need help bringing your IT environment to life, we’ll work with you to shape your setup to match your objectives.',
    href: '#',
    image: {
      kind: 'external',
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
    },
  },
  {
    id: 'feature-3',
    title: 'IT Solutions',
    description:
      'We provide Mac IT solutions covering networking, internet, VoIP, advanced cyber security, cloud services, and everything else you need to run your business efficiently.',
    href: '#',
    image: {
      kind: 'external',
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg',
    },
  },
];

const Feature69 = ({ features = fallbackFeatures }: Feature69Props) => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  // Keep the carousel in sync with the selected list item.
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);
  // Listen for drag/keyboard changes emitted by Embla.
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <div className="aspect-5/6 bg-accent overflow-clip rounded-xs">
            <Carousel
              setApi={setCarouselApi}
              className="h-full w-full [&>div]:h-full"
            >
              <CarouselContent className="mx-0 h-full w-full">
                {features.map(feature => (
                  <CarouselItem key={feature.id} className="px-0">
                    {feature.image.kind === 'optimized' ? (
                      // Astro pre-processed image: use generated src/srcSet/sizes for best performance.
                      <img
                        src={feature.image.image.src}
                        srcSet={feature.image.image.srcSet}
                        sizes={feature.image.image.sizes}
                        width={feature.image.image.width}
                        height={feature.image.image.height}
                        loading={feature.image.image.loading ?? 'lazy'}
                        decoding={feature.image.image.decoding ?? 'async'}
                        alt={feature.title}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      // Remote URL fallback where Astro couldn't transform the asset.
                      <img
                        src={feature.image.src}
                        alt={feature.title}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex shrink-0 flex-col md:w-1/2 md:pr-8 lg:pr-24 lg:text-left 2xl:pr-32">
            <h2 className="mb-6 text-pretty text-3xl tracking-tight font-bold lg:text-5xl">
              We Provide Fully Managed IT Services
            </h2>
            <p className="text-muted-foreground mb-16 lg:text-xl">
              We'll help you to manage your devices, users, and systems across
              Apple and Windows platforms. Your team gets a friendly helpdesk,
              expert engineers, layered cyber security, and ongoing guidance.
              Think of us like your in-house IT team.
            </p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className="data-open:bg-accent group relative w-full cursor-pointer px-6 py-3 transition"
                  data-open={selection === i ? 'true' : undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <h3 className="text-accent-foreground text-xl font-semibold tracking-tighter">
                      {feature.title}
                    </h3>
                    <div className="bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground group-data-open:bg-primary group-data-open:text-primary-foreground flex size-8 items-center justify-center rounded-xs">
                      <ChevronDown className="group-data-open:rotate-180 size-4 shrink-0 transition-transform duration-200" />
                    </div>
                  </div>
                  <div className="group-data-open:block hidden">
                    <p className="text-muted-foreground my-4 text-base lg:my-6">
                      {feature.description}
                    </p>
                    <a
                      href="#"
                      className="group/link text-accent-foreground flex items-center pb-3 text-sm"
                    >
                      Learn more{' '}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature69 };
