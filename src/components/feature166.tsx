import type { ResolvedImage } from '@/lib/resolve-images';

type FeatureImage = string | ResolvedImage;

interface Feature {
  title: string;
  description: string;
  image: FeatureImage;
}

interface Feature166Props {
  title: string;
  description: string;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
  feature4: Feature;
}

const renderFeatureImage = (image: FeatureImage, alt: string, className: string) => {
  if (typeof image === 'string') {
    return (
      <img
        src={image}
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

const Feature166 = ({
  title = 'The Perks of Working With Us',
  description = 'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  feature1 = {
    title: 'Advanced Cybersecurity',
    description:
      'Creating intuitive user experiences with modern interface design principles and user-centered methodologies.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  },
  feature2 = {
    title: 'Dedicated Account Management',
    description:
      'Building websites that look and function perfectly across all devices and screen sizes.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
  },
  feature3 = {
    title: 'Full Scope Maintenance',
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg',
  },
  feature4 = {
    title: 'Everything Under One Roof',
    description:
      'Ensuring fast loading times and smooth performance through optimized code and assets.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg',
  },
}: Feature166Props) => {
  return (
    <section className="dark bg-background text-foreground py-32">
      <div className="container">
        <div className="flex flex-col items-start text-left lg:items-center lg:text-center">
          <h2 className="text-pretty mb-6 max-w-4xl text-3xl font-bold tracking-tight lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mb-16 max-w-3xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-b-0 lg:border-r">
                <h3 className="text-xl font-medium font-semibold tracking-tighter">
                  {feature1.title}
                </h3>
                <p className="text-muted-foreground">{feature1.description}</p>
                {renderFeatureImage(
                  feature1.image,
                  feature1.title,
                  'mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]'
                )}
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h3 className="text-xl font-medium font-semibold tracking-tighter">
                  {feature2.title}
                </h3>
                <p className="text-muted-foreground">{feature2.description}</p>
                {renderFeatureImage(
                  feature2.image,
                  feature2.title,
                  'mt-8 aspect-[1.45] h-full w-full object-cover'
                )}
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
                <h3 className="text-xl font-medium font-semibold tracking-tighter">
                  {feature3.title}
                </h3>
                <p className="text-muted-foreground">{feature3.description}</p>
                {renderFeatureImage(
                  feature3.image,
                  feature3.title,
                  'mt-8 aspect-[1.45] h-full w-full object-cover'
                )}
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h3 className="text-xl font-medium font-semibold tracking-tighter">
                  {feature4.title}
                </h3>
                <p className="text-muted-foreground">{feature4.description}</p>
                {renderFeatureImage(
                  feature4.image,
                  feature4.title,
                  'mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature166 };
