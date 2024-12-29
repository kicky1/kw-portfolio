import { Card, CardContent } from "@/components/ui/card";
import { linearAnimation } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMe() {
  return (
    <Card className="bg-muted">
      <CardContent className="pt-6">
        <motion.div custom={4} variants={linearAnimation}>
          <div className="mb-4 flex items-center space-x-4">
            <Image
              src="/portfoliov2.jpg?height=100&width=100"
              width={100}
              height={100}
              alt="Avatar"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold">Krzysztof Wicki</h1>
              <p className="text-muted-foreground">Software Developer</p>
            </div>
          </div>
          <p>
            Passionate about creating innovative web solutions with 7+ years of
            experience in web development.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  );
}
