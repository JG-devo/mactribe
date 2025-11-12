import { ArrowRight } from 'lucide-react';
import React from 'react';

import { BackgroundBeams } from '@/components/aceternity/background-beams';

const Feature272 = () => {
  return (
    <section className="relative bg-background text-foreground dark h-full w-screen overflow-hidden py-32">
      <div className="container relative z-20 flex h-full flex-col items-start justify-center text-left lg:items-center lg:text-center">
        <h2 className="mb-6 text-pretty text-3xl font-bold tracking-tight max-w-3xl lg:text-5xl lg:text-center">
          Looking for IT Support That Just Works{' '}
          <span className="italic">Without</span> The Drama?
        </h2>
        <p className="text-muted-foreground mb-16 max-w-3xl lg:text-xl lg:text-center">
          We’ll help you manage your business tech and IT systems with less
          stress, more clarity, and the kind of support that feels like it’s
          part of your business. Interested in learning more about how we work?
          Let’s have a chat.
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-3">
          <div className="relative space-y-5 border p-10">
            <h3 className="text-xl font-medium font-semibold tracking-tighter">
              Copy the Shadcn CLI
            </h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <div className="bg-background absolute -bottom-5 right-1/2 z-10 flex size-10 translate-x-1/2 rotate-90 items-center justify-center gap-2 rounded-xs border md:-right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:rotate-0">
              <ArrowRight className="size-6" />
            </div>
          </div>
          <div className="relative space-y-5 border p-10">
            <h3 className="text-xl font-medium font-semibold tracking-tighter">
              Paste CLI to your project
            </h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <div className="bg-background absolute -bottom-5 right-1/2 z-10 flex size-10 translate-x-1/2 rotate-90 items-center justify-center gap-2 rounded-xs border md:-right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:rotate-0">
              <ArrowRight className="size-6" />
            </div>
          </div>

          <div className="space-y-5 border p-10">
            <h3 className="text-xl font-medium font-semibold tracking-tighter">
              Edit as you want
            </h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>
          <div className="from-background z-99 from-background absolute left-0 h-full w-10 bg-gradient-to-r to-transparent" />
          <div className="from-background z-99 from-background absolute right-0 h-full w-10 bg-gradient-to-l to-transparent" />
        </div>
      </div>
      <BackgroundBeams className="bg-background text-foreground dark" />
    </section>
  );
};

export { Feature272 };
