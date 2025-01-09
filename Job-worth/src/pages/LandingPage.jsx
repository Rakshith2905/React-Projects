import { Button } from '@/components/ui/button.jsx';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel.jsx';
import Autoplay from 'embla-carousel-autoplay';
import companies from '../data/companies.json';
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
            <section className="text-center">
                <h1 className="flex flex-col justify-center items-center gradient-title font-extrabold text-2xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
                    Your worth, your future
                    <span className="flex items-center gap-2 sm:gap-6">
                        <img
                            src="/Jobworth_logo.svg"
                            alt="Main logo"
                            className="h-8 sm:h-20 lg:h-32"
                        />
                        makes it happen.
                    </span>
                </h1>
                <p className="text-gray-300 sm:mt-4 text-xs sm:text-lg sm:tracking-wider">
                    Empowering job seekers and recruiters alike
                </p>
            </section>

            <div className="flex justify-center gap-6">
                <Link to="/jobs">
                    <Button variant="blue" size="xl">
                        Find Jobs
                    </Button>
                </Link>
                <Link to="/post-job">
                    <Button variant="green" size="xl">
                        Post a Job
                    </Button>
                </Link>
            </div>

            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full py-10"
            >
                <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                    {companies.map(({ name, id, path }) => (
                        <CarouselItem
                            key={id}
                            className="basis-1/3 lg:basis-1/6 "
                        >
                            <img
                                src={path}
                                alt={name}
                                className="h-9 sm:h-14 object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <img src="/banner.png" alt="Banner image" className="w-full" />
        </main>
    );
}

export default LandingPage;
