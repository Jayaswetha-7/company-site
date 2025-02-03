import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Hero from "./Hero";
import WhyNeedUs from "./WhyNeedUs";
import Autoplay from "embla-carousel-autoplay";

function LandingCard() {
  // Initialize autoplay plugin with options
  const autoplayPlugin = Autoplay({
    delay: 4000, // 3 seconds between slides
    stopOnInteraction: false, // Continue autoplay after user interaction
  });

  return (
    <Carousel
      plugins={[autoplayPlugin]}
      opts={{ loop: true }} // Enable infinite loop
      className="min-h-screen max-h-screen min-w-screen   content-center flex items-center justify-center overflow-hidden
       rounded-lg"
    >
      <CarouselContent className="h-[90vh] mx-auto sm:mt-14  rounded-lg">
        <CarouselItem>
          <Hero />
        </CarouselItem>
        <CarouselItem>
          <WhyNeedUs />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default LandingCard;
