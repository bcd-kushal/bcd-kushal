import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Image from "next/image"

export type CaraouselImagesType = {src:string,alt:string}[]
interface CarouselProps { images:CaraouselImagesType, width:string, slideAfter:number, aspect?:string, hideLeft?:boolean, hideRight?:boolean }
export function CarouselComponent({images,width,aspect,slideAfter,hideLeft,hideRight}:CarouselProps) {
    const plugin = useRef( Autoplay({ delay: 4500, stopOnInteraction: true }) )

    return (
        <Carousel plugins={[plugin.current]} className="w-full max-w-xs" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset} >
            <CarouselContent>
                {images.map((image,index) => (
                    <CarouselItem key={index}>
                        <Card className={`border-[0.6667px] border-[#32449058] max-w-[${width}] overflow-hidden`}>
                            <CardContent className={`flex aspect-[${aspect||"16/9"}] items-center justify-center p-6 overflow-hidden rounded-[6px]`}>
                                <Image className="scale-[1.22]" src={image.src} alt={image.alt} width={282} height={180} />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}