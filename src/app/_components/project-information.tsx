import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  web?: string;
  github?: string;
  badges?: { name: string }[];
  isSelected: boolean;
  onClick: () => void;
};

export const ProjectInformation = ({
  name,
  image,
  description,
  fullDescription,
  web,
  github,
  badges = [],
  isSelected,
  onClick,
}: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={onClick}
      className={`${
        isSelected
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          : ""
      }`}
    >
      <motion.div
        layout
        className={`${isSelected ? "w-full max-w-4xl" : "w-full"}`}
        transition={{
          layout: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <div
          className={`group relative overflow-hidden border-2 bg-muted transition-colors duration-300 ease-in-out ${
            !isSelected && "hover:cursor-pointer hover:border-[#10B981]"
          } rounded-xl`}
        >
          {!isSelected && (
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={image || "/placeholder.png"}
                  width={100}
                  height={100}
                  alt={`${name} project`}
                  className="h-20 w-28 rounded-xl bg-foreground object-cover"
                />
                <div>
                  <p className="font-semibold leading-none tracking-tight">
                    {name}
                  </p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            </div>
          )}
          {isSelected && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col 2xl:max-h-[500px] 2xl:flex-row"
            >
              <div className="relative hidden md:w-1/2">
                <div className="relative 2xl:h-full">
                  <Image
                    src={image || "/placeholder.png"}
                    fill
                    alt={`${name} project`}
                    className="bg-foreground object-cover"
                  />
                </div>
              </div>
              <div className="flex h-full flex-col p-6 md:w-1/2">
                <div className="flex-grow overflow-y-auto">
                  <div className="mb-6">
                    <h2 className="mb-4 text-2xl font-bold">{name}</h2>
                    <p className="leading-relaxed text-muted-foreground">
                      {fullDescription}
                    </p>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#10B981]/10 px-3 py-1.5 text-sm font-medium text-[#10B981]"
                      >
                        {badge.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                      {web && (
                        <a
                          href={web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-medium text-[#10B981] hover:text-[#0D9668]"
                        >
                          Visit Website
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-medium text-[#10B981] hover:text-[#0D9668]"
                        >
                          GitHub Repository
                        </a>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                      }}
                      className="w-full rounded-md bg-[#10B981] px-4 py-2 text-white transition-colors hover:bg-[#0D9668]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectInformation;
