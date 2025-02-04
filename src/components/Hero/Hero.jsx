import React from "react";
import { Heroimg } from "../../assets/images";
import { Button } from "..";

const Hero = () => {
	return (
		<div
			className="relative w-full bg-contain bg-center bg-no-repeat h-[900px] max-sm:h-[485px] flex"
			style={{ backgroundImage: `url(${Heroimg})` }}
		>
			{/* Text container (near the top for easy viewing on mobile) */}
			<div className="absolute top-20 w-full flex flex-col px-12 max-sm:px-6 justify-center max-sm:justify-normal bg-green-0 h-[110vh] max-sm:h-[485px] max-h-[800px]">
				{/* Use semantic HTML for SEO: <h1> is the main heading */}
				<h1 className="leading-snug text-[90px] max-lg:text-[75px] max-md:text-[55px] max-sm:text-[28px] font-extrabold bg-gradient-to-r from-black to-[#ED2024] bg-clip-text text-transparent max-sm:mt-28">
					Effortless,
					<br /> Newspaper Advertising
				</h1>
				<p className="text-[24px] max-sm:text-[16px] text-black mt-[10px]">
					Seamless & Fast, Just for You
				</p>
				<Button
					className="mt-8 max-sm:mt-20 max-sm:w-[100%] max-sm:rounded-lg"
					children="Book Now"
				/>
			</div>
		</div>
	);
};

export default Hero;
