import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";
import Image from "next/image";
import placeholder from "../../../public/placeholder.png";

type Props = {
    logo: string,
    title: string,
    company: string,
    period: string,
    description: string
}

export function JobInformation({logo, title, company, period, description}: Props) {
    
    return (
        <Card className="relative overflow-hidden border-2">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10B981]"></div>
            <div className="absolute right-0 top-0 size-8">
              <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-muted hover:text-[#10B981]">
                <Eye className="w-4 h-4"  />
              </Button>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-4">
              <Image
                src={logo ? logo : placeholder.src}
                width={100}
                height={100}
                alt="Avatar"
                className="rounded-xl size-16 object-cover"
              />
                <div>
                <CardTitle>{title}</CardTitle>
                <p className="text-sm text-muted-foreground">{company} | {period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="">
              <p>{description}</p>
            </CardContent> 
          </Card>
    )
}