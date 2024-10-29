import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroPage() {
  return (
    <Card className="w-full">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Paragon Group</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                consequatur? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nostrum voluptate beatae consequuntur molestiae harum alias
                assumenda quam tempore fugit fuga?
              </p>
            </div>
            
            <Button size="lg" className="group">
              See More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden">
              <Image
                className="object-cover transition-transform hover:scale-105 duration-500"
                src="/hero-image.jpeg"
                height={300}
                width={500}
                alt="Paragon Group Hero Image"
                priority
              />
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}