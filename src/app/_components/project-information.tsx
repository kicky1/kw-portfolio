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
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          : ""
      }`}
    >
      <motion.div
        layout
        className={`${
          isSelected ? "w-full max-w-4xl" : "w-full"
        }`}
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
                  className="rounded-xl h-20 w-28 object-cover bg-foreground"
                />
                <div>
                  <p className="font-semibold leading-none tracking-tight">{name}</p>
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
              className="flex flex-col md:flex-row md:max-h-[500px]"
            >
              <div className="md:w-1/2 relative">
                <div className="relative h-72 md:h-full">
                  <Image
                    src={image || "/placeholder.png"}
                    fill
                    alt={`${name} project`}
                    className="object-cover bg-foreground"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 flex flex-col h-full">
                <div className="flex-grow overflow-y-auto">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">{name}</h2>
                    <p className="text-muted-foreground leading-relaxed">{fullDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {badges.map((badge, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-[#10B981]/10 text-[#10B981] text-sm rounded-full font-medium"
                      >
                        {badge.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t mt-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                      {web && (
                        <a
                          href={web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#10B981] hover:text-[#0D9668] font-medium"
                        >
                          Visit Website
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#10B981] hover:text-[#0D9668] font-medium"
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
                      className="w-full px-4 py-2 bg-[#10B981] text-white rounded-md hover:bg-[#0D9668] transition-colors"
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