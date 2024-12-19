import Card from "../Card";

// const Forecasts = () => {
//   return (
//     <div className="flex flex-col ">
//       <Card bgClass="bg-custom-green-gradient" textClass="text-green-700" title="+15%" description="Forecasted increase in your sales closed by the end of the current month." />
//       <Card bgClass="bg-custom-green-gradient" textClass="text-green-800" title="+20%" description="Forecasted increase in consultations by the end of the current month." />
//     </div>
//   );
// };

// export default Forecasts;
const Forecasts = () => {
    const forecastData = [
        {
            percentage: "+15%",
            description: "forecasted increase in your sales closed by the end of the current month",
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e53c0cae89ef103534f304635166ed0c7ed2bb9116fb5a59d96cbddb27029f4?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
        },
        {
            percentage: "+20%",
            description: "forecasted increase in consultations by the end of the current month",
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e53c0cae89ef103534f304635166ed0c7ed2bb9116fb5a59d96cbddb27029f4?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
        }
    ];
    return (
        <div className="flex flex-col items-end px-20 max-w-[620px] max-md:pl-5">
            <section
                className="flex overflow-hidden relative flex-col px-6 pt-6 pb-16 max-w-full rounded-3xl shadow bg-[linear-gradient(180deg,#15B79F_0%,#0E9382_100%)] w-[260px] max-md:px-5"
                role="region"
                aria-label="Forecasts">
                <div className="flex z-0 flex-col justify-center w-full text-xs font-semibold tracking-wide leading-8 text-teal-100 uppercase whitespace-nowrap">
                    <div className="flex gap-2 items-center w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e1c13c9ae00da6822c92452a524df13c037e4892e1cdee33864bda51bf49db4?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                            FORECASTS
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/079e38cd3429a6efe3ef84904274bf1cb1eab6e6a4eee66919d8797826eaba58?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
                    alt=""
                    className="object-cover absolute top-0 z-0 aspect-[1.82] left-[-360px] w-[794px]"
                />

                {forecastData.map((forecast, index) => (
                    <Card
                        key={index}
                        percentage={forecast.percentage}
                        description={forecast.description}
                        iconSrc={forecast.iconSrc}
                    />
                ))}
            </section>
        </div>
    );
};

export default Forecasts;
