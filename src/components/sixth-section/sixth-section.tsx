import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { cardListSixthSection } from "@/data/card-list-sixth-section"

export function SixthSection() {
  return (
    <section className="flex items-center justify-center w-full h-[614px]">
      <div className="container flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-[40px]">
          <h2 className="text-2xl font-bold">What everyone says</h2>
        </div>

        <Carousel
          className="w-full"
          opts={{ slidesToScroll: 1, align: "start" }}
        >
          <CarouselContent className="gap-4 m-2">
            {cardListSixthSection.map((item, index) => (
              <CarouselItem
                key={index}
                className="
                    basis-1/3 
                    p-[32px]
                    flex 
                    flex-col 
                    justify-between 
                    bg-white 
                    shadow-[0px_-2px_4px_rgba(0,0,0,0.05),_0px_2px_4px_rgba(0,0,0,0.1),_2px_0px_6px_rgba(0,0,0,0.08),_-2px_0px_6px_rgba(0,0,0,0.08)]
                    rounded-lg 
                    min-h-[300px]"
              >
                <p className="mb-4 text-[18px] font-[400]">{item.text}</p>
                <div className="flex items-center gap-4">
                  <Image src={item.img} alt={item.name} width={48} height={48} className="rounded-full" />
                  <div>
                    <h4 className="text-[18px] font-[400]">{item.name}</h4>
                    <span className="text-[16px] font-[400]">{item.detail}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-[#EA580C] text-[#EA580C] p-[20px]" />
          <CarouselNext className="border-[#EA580C] text-[#EA580C] p-[20px]"/>
        </Carousel>
      </div>
    </section>
  )
}
