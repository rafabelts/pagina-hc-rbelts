import { FaAngleLeft } from "react-icons/fa6";
import {NavLink} from "react-router-dom";
export default function ActivitiesContentBluePrint({title, date, content}) {
	return(
		<div className="px-[250px] py-[56px]">
			<NavLink to="/">
				<FaAngleLeft className="text-gray-100 w-6 h-6 mb-6"/>				
			</NavLink>
			<h1 className="text-3xl text-gray-200 font-bold">{title}</h1>
			<h2 className="text-sm text-gray-300">Por Rafael Alejandro Beltrán Santos | {date}</h2>
			
			<div className="w-[100%] h-[2px] bg-zinc-600 mt-2 mb-5" />
			
			<div className="text-white">
				{content}
			</div>

			<div className="w-[100%] h-[1px] bg-zinc-600 mt-12 mb-6" />	
			<h2 className="text-xl text-gray-300 font-bold">Referencias:</h2>
		</div>
	);
	
}
