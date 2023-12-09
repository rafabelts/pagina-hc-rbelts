import imagen_podcast from "../../images/portada_foro.jpeg"
import {NavLink} from "react-router-dom";

export default function Podcast() {
	return(
		<div className="flex flex-col">
			<h3 className="text-xl font-bold mb-2">Podcast 404</h3>
			<NavLink className="mx-auto" to="https://on.soundcloud.com/1nu36">
				<img src={imagen_podcast}/>
			</NavLink>
		</div>

	);
}
