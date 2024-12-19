type CardProps = { // Explicitly define the type
    iconSrc:string;
    percentage:string;
    description: string;  // Explicitly define the type
  };
  
const Card: React.FC<CardProps>  = ({ percentage, iconSrc, description }) => {
    return (

        <div className="flex z-0 flex-col mt-6 w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-2 justify-center items-start w-full">
            <div className="flex-1 shrink text-6xl font-medium tracking-tight leading-tight text-white basis-0 max-md:text-4xl">
              {percentage}
            </div>
            <div className="flex items-start w-[35px]">
              <img
                loading="lazy"
                src={iconSrc}
                alt=""
                className="object-contain aspect-square w-[35px]"
              />
            </div>
          </div>
          <div className="mt-3 text-sm tracking-normal leading-6 text-white">
            {description}
          </div>
        </div>
      </div>
    );
  };

export default Card;