import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import placeholder from "../../../public/placeholder.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Props = {
    logo: string,
    title: string,
    company: string,
    period: string,
    description: string,
    fullDescription: string,
    isSelected: boolean,
    onClick: () => void
}

export const JobInformation = ({
  logo,
  title,
  company,
  period,
  description,
  fullDescription,
  isSelected,
  onClick
}: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{duration: 0.3, ease: "easeInOut"}}
      onClick={onClick}
      className={`${
        isSelected ? "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" : ""
      }`}
    >
      <motion.div
        layout
        className={`${
          isSelected
            ? "w-full max-w-2xl m-4"
            : "w-full"
        }`}
        transition={{
          layout: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <Card className={`group relative overflow-hidden border-2 bg-muted transition-colors duration-300 ease-in-out ${
          !isSelected && "hover:cursor-pointer hover:border-[#10B981]"
        } `}>
          {!isSelected && (
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10B981]" />
          )}
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
                <p className="text-sm text-muted-foreground">
                  {company} | {period}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="min-h-[50px]">
            <motion.div layout>
              <p>{isSelected ? fullDescription : description}</p>
            </motion.div>
            {isSelected && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                  }}
                  className="mt-4 px-4 py-2 bg-[#10B981] w-24 text-white rounded-md hover:bg-[#0D9668] transition-colors"
                >
                  Close
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
