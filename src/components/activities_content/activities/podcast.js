import imagen_podcast from "../../images/portada_foro.jpeg"
import {NavLink} from "react-router-dom";

function Podcast() {
	return(
		<div className="flex flex-col">
			<h3 className="text-xl font-bold mb-2">Podcast 404</h3>
			<NavLink className="mx-auto" to="https://on.soundcloud.com/1nu36">
				<img src={imagen_podcast}/>
			</NavLink>
		</div>

	);
}


function ReferencesPodcast(){
	return(
		<div className="flex flex-col text-gray-300 gap-4 mt-2">
			<p>Egresados. (2010). La ingeniería y la medicina sí se mezclan [Archivo de texto]. Recuperado de: <a href="https://www.eafit.edu.co/egresados/noticias/perfiles/Paginas/perfil-felipe-ortiz.aspx">https://www.eafit.edu.co/egresados/noticias/perfiles/Paginas/perfil-felipe-ortiz.aspx</a></p>
			<p>UNIR. (2021). Ingeniería de software: qué es, objetivos y funciones del ingeniero [Archivo de texto]. Recuperado de: <a href="https://mexico.unir.net/ingenieria/noticias/ingenieria-de-software-que-es-objetivos/">https://mexico.unir.net/ingenieria/noticias/ingenieria-de-software-que-es-objetivos/</a> </p>
			<p>Pacto Mundial: Red Española. (s.f.). 17 Objetivos de Desarrollo Sostenible (ODS) para transformar el mundo [Archivo de texto].<a href="https://www.pactomundial.org/que-puedes-hacer-tu/ods/">https://www.pactomundial.org/que-puedes-hacer-tu/ods/</a></p>
			<p>Programa de las Naciones Unidas para el Desarrollo. (s.f). LOS ODS EN ACCIÓN [Archivo de texto]. Recuperado de: <a href="https://www.undp.org/es/sustainable-development-goals">https://www.undp.org/es/sustainable-development-goals</a></p>
		</div>
	);
}

export {Podcast, ReferencesPodcast};
