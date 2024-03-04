import Image from "next/image";
import clsx from 'clsx';
import Link from "next/link";
import { pricingCards } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Home() {
  return (
    <>
    <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col ">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
     <p className="text-center mt-80">Make your presence online and smash your competition</p>
    <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
      <h1 className="text-9xl font-bold text-center md:text-[180px]">QUANTUM</h1>
    </div>
    <div className="flex justify-center items-center relative md:mt-[-40px]">
      <Image src={'/assets/preview.png'} alt="banner image" height={800} width={800} className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"/>
    </div>
    <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10">
      
    </div>

    <div className="bg-gradient-to-r from-primary pt-5  to-secondary-foreground text-transparent bg-clip-text relative">
      <h1 className="text-9xl font-bold text-center md:text-[90px]">What we provide</h1>
    </div>


    

    

    
    
    </section>

    
    <section className="flex justify-center items-center flex-col gap-4 md: !mt-200 mt-[320px]">
    
    
    <div className="flex justify-center gap-4 flex-wrap mt-6">
      {pricingCards.map((card)=>(
        <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between',{})}> 
        <CardHeader>
          <CardTitle >
          {card.title}</CardTitle>
        </CardHeader>
        <CardDescription className="p-5">
          {card.description}
        </CardDescription>
         </Card>
      ))}
    </div>

    <div className="bg-gradient-to-r from-primary pt-5 pb-4 to-secondary-foreground text-transparent bg-clip-text relative">
      <h2 className="text-9xl font-bold text-center md:text-[60px]">Want to grow your business?</h2>
    </div>

    <div className="mb-10"><Link href={'https://www.youtube.com/'} className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80">Contact Us</Link></div>

    

    </section>
    </>
  );
}
