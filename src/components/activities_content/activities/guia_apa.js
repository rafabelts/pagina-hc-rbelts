function GuiaAPA(){
	const referencias={
		ref1: {
			title: "Referencia de libro o monografía de un autor:",
			content: "Apellidos, A.A (Año de publicación). Título de la obra (en cursiva). Lugar de publicación: Editorial.",
		},
		ref2: {
			title: "Referencia de libro o monografía de 4 o más autores:",
			content: "Apellidos, A. A., Apellidos, B. B., Apellidos, C. C., Apellido, D. D., et al. (Año de publicación). Título de la obra (en cursiva). Lugar de publicación: Editorial."
		},
		ref3: {
			title: "Capítulo de un libro:",
			content: "Apellidos, A.A. (Año de publicación). Título del capítulo. En Editorial (Ed) del libro. Título del libro (en cursiva) (pp. inicio capítulo - fin capítulo). Lugar de publicación. Editorial",
		},
		ref4: {
			title: "Artículo de revista o periódico:",
			content: "Apellidos, A.A. (Año de publicación). Título del artículo. Título de la revista (en cursiva), volumen de la revista (número del fascículo), primera página - útlima página del artículo."
		},
		ref5: {
			title: "Presentación de power point o notas de clases:",
			content: "Apellidos, A.A. (Año de publicación). Título (en cursiva)(Indicar si son diapositivas o notas). Obtenido de: link",
		},
		ref6: {
			title: "Archivo PDF: ",
			content: "Apellidos, A.A. (Año de publicación). Título (en cursiva). [Archivo PDF]. Link", 
		},
		ref7: {
			title: "Referencias de artículos de revistas en internet:",
			content: "Apellidos, A.A. (Año de publicación). Titulo del artículo. Título de la revista (en cursiva), volumen de la revista (número del fascículo), primera página - última página del artículo. Link",
		},
		ref8: {
			title: "Películas:",
			content: "Apellidos del productor, Iniciales del productor & Apellidos del director, Iniciales del director. (Año). Título de la película [Motion Picture/Película]. País de origen: Estudio.",
		},
		ref9: {
			title: "Internet:",
			content: "Autor. (Fecha de publicación). Título [Archivo de video / Archivo de texto]. Obtenido de Link.",
		},
		ref10: {
			title: "Instagram: ",
			content: "Autor [Usuario del autor]. (Fecha de publicación). Descripción de la imagen [imagen adjunta]. Instagram. Link.",
		},
		ref11: {
			title: "Videos:",
			content: "Productor. (Año de publicación). Título del video [Formato del vídeo]. Disponible en link.",
		},
		ref12: {
			title: "Facebook",
			content: "Apellidos, A.A. [Nombre de usuario del autor]. (Fecha de publicación). Título del post. Facebook. Link.",
		},
		ref13: {
			title: "Youtube: ",
			content: "Canal del autor. (Fecha de publicación). Título del video [Archivo de video]. Youtube. Link",
		},
		ref14: {
			title: "Tesis: ",
			content: "Apellido, A.A. (Año de publicación). Título de la tesis. Tesis de (grado académico). Institución del autor",
		},
		ref15: {
			title: "Artículo de periódico: ",
			content: "Apellido, A.A. (Fecha de publicación). Título del artículo. Título del periódico. p.xx."
		},
	};

	return(
		<div>
			<p className="mb-8">
				Las referencias son de suma importancia debido a que le agregan validez y credibilidad a nuestros trabajos.
			</p>
			<p className="mb-8">
				Una lista de referencias como un directorio de nuestras citas realizadas, el formato estilo APA aporta confianza y evita que nuestro trabajo se considere como plagio.
			</p>

			{
				Object.values(referencias).map(
					(refe) =><div>
							<h3 className="text-xl font-bold mb-2">{refe.title}</h3>
							<p className="text-green-200 mb-8">{refe.content}</p>
						</div>
					
				)
			}

		</div>


	);
}
function ReferenciasAPA(){
	return(
		<div className="flex flex-col text-gray-300 gap-4 mt-2">
			<p>"Guía: Normas APA Séptima 7.ª Edición 2020" (2021). <em>Recursos bibliográficos</em>. 11. <a href="https://ciencia.lasalle.edu.co/recursos_bibliograficos/11">https://ciencia.lasalle.edu.co/recursos_bibliograficos/11</a></p>
			<p>Moreno, D. & Carrillo, J. (2019). <em>Normas APA 7.a edición: Guía de citación y referenciación </em> [PDF]. Recuperado de:  <a href="https://www.revista.unam.mx/wp-content/uploads/3_Normas-APA-7-ed-2019-11-6.pdf">https://www.revista.unam.mx/wp-content/uploads/3_Normas-APA-7-ed-2019-11-6.pdf</a></p>
			<p>S.A. (s.f). <em>Guía Normas APA: 7ª edición</em> [PDF]. Recuperado de: <a href="https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf">https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf</a> </p>
		</div>
	);
}

export {GuiaAPA, ReferenciasAPA};
