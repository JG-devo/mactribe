import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { ResolvedImage } from '@/lib/resolve-images';

type Feature120Image = ResolvedImage | string | undefined;

interface Feature120Props {
  title: string;
  intro: string;
  body: string;
  ctaLabel: string;
  avatar: {
    image?: Feature120Image;
    alt: string;
    quote: string;
    name: string;
  };
  stats: Array<{ label: string; value: string }>;
  heroImage?: Feature120Image;
}

const renderImage = (
  image: Feature120Image,
  alt: string,
  className: string
) => {
  if (!image || typeof image === 'string') {
    return (
      <img
        src={
          image ??
          'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg'
        }
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    );
  }

  if (image.kind === 'optimized') {
    return (
      <img
        src={image.image.src}
        srcSet={image.image.srcSet}
        sizes={image.image.sizes}
        width={image.image.width}
        height={image.image.height}
        loading={image.image.loading ?? 'lazy'}
        decoding={image.image.decoding ?? 'async'}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <img
      src={image.src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const Feature120 = ({
  title,
  intro,
  body,
  ctaLabel,
  avatar,
  stats,
  heroImage,
}: Feature120Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col py-8">
            <h2 className="mb-6 text-pretty text-3xl font-bold tracking-tight lg:text-5xl">
              {title}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-3xl lg:text-xl">
              {intro}
            </p>
            <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
              {body}
            </p>
            <div className="flex flex-col gap-6 py-10 sm:flex-row sm:gap-16">
              <div className="flex gap-4 leading-5">
                <div className="ring-input h-fit overflow-hidden rounded-full ring-1">
                  {renderImage(
                    avatar.image,
                    avatar.alt,
                    'w-64 rounded-full object-cover'
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium font-normal tracking-tighter">
                    {avatar.name}
                  </h3>
                  <p className="text-base text-muted-foreground italic">
                    {avatar.quote}
                  </p>
                </div>
              </div>
            </div>
            <Button className="w-fit">{ctaLabel}</Button>
          </div>
          {renderImage(
            heroImage,
            title,
            'h-full max-h-[800px] w-full rounded-xs object-cover'
          )}
        </div>
        <Separator className="my-12" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(stat => (
            <div key={stat.label}>
              <h2 className="mb-2 text-4xl font-semibold md:text-6xl">
                {stat.value}
              </h2>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature120 };
