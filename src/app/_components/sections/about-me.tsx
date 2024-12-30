import { Card, CardContent } from "@/components/ui/card";
import { linearAnimation } from "@/lib/animations";
import { ABOUT_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  isMobile?: boolean
}
export const AboutMe = ({ isMobile }: Props) => {
  return (
    <Card className={cn("bg-muted", isMobile && "bg-background")}>
      <CardContent className="pt-6">
        <motion.div custom={isMobile ? 0 : 4} variants={linearAnimation}>
          <div className="mb-4 flex items-center space-x-4">
            <Image
              src="/portfoliov2.jpg?height=200&width=200"
              width={200}
              height={200}
              alt="Avatar"
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold">{ABOUT_DATA.name}</h1>
              <p className="text-muted-foreground">{ABOUT_DATA.title}</p>
            </div>
          </div>
          <p>
            {ABOUT_DATA.description}
          </p>
        </motion.div>
      </CardContent>
    </Card>
  );
}
