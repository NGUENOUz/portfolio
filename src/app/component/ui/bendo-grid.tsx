import { cn } from "../../lib/utils";
import Image from "next/image";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", // Supprimez bg-red si vous ne le voulez pas
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  cover,
  
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  cover: string ; 
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none " ,
        className, 

        

        
      )}
    >
      <div>
      
        <div style={{ position: "relative", width: "100%", height: "200px" }}> {/* Ajustez la hauteur selon vos besoins */}
          <Image
            src={cover}
            alt={`Image ${title}`}
            fill
            style={{ objectFit: "cover",borderTopLeftRadius:"12px",borderTopRightRadius:"12px" }}
          />
        </div>
     
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 "style={{ paddingLeft: '1rem', paddingTop: '1rem' , paddingBottom: '1rem' }}>
          {title}
        </div>

        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300" style={{ paddingLeft: '1rem', paddingTop: '0.4rem' , paddingBottom: '1rem' }}>
          {description}
        </div>
        
      </div>
    </div>
  );
};