
function ElementosCard({title, content, src}){
	return(
		<div className="flex flex-col justify-center bg-[#1B1B1A] p-5 w-[47%] rounded-lg">
			<p className="text-xl text-white font-bold">{title}</p>
			<p className="text-base text-gray-100">{content}</p>
			<img className="mt-6 w-80" src={src}/>
		</div>
	);
}

export default function ElementosLenguaje() {
	const elements = {
		element1: {
			title: "Fonología",
			content: "Estudia el sistema de los sonidos de la lengua en general, y de cada lengua en particular, incluyendo las sílabas, la entonación, la acentuación, etc., a un nivel abstracto o mental.",
			src: "https://elsancarlistau.files.wordpress.com/2018/03/fonologia-e-fonc3a9tica.jpg"
		}, 
		element2: {
			title: "Morfología",
			content: "Parte de la grámatica que se ocupa de la estructura de las palabras, las variantes que estas representan y el papel gramatical que desempeña cada segmento en relación con los demás elementos que la componen.",
			src: "https://academia-lab.com/wp-content/uploads/2022/07/328898040.webp",

		}, 
		element3: {
			title: "Sintaxis",
			content: "Área de la gramática que estudia las formas en las que se combinan y ordenan las palabras para elaborar textos coherentes.",
			src: "https://concepto.de/wp-content/uploads/2019/11/sintaxis-e1575207696777.jpg"
		},
		element4: {
			title: "Semántica",
			content: "Rama dedicada al estudio del significado, además, se ocupa de los accidentes del significado, como la sinonimia, la antonimia, la polisemia y las familias léxico-semánticas.",
			src: "https://definicion.com/wp-content/uploads/2022/04/semantica-1.jpg",
		},
		element5: {
			title: "Pragmática",
			content: "Disciplina que estudia el lenguaje en su relación con los hablantes, así como los enunciados que estos profieren y las diversas circunstancias que concurren en la comunicación.",
			src:"https://pragmatics.indiana.edu/textbook/articulos/1-conceptos-fundamentales.JPG"
		},
		element6: {
			title: "Semiótica",
			content: "Cualquier actividad, conducta o proceso que involucra signos, donde un signo se define como cualquier cosa que comunica algo, generalmente llamado significado, al intérprete del signo.",
			src: "https://www.liceus.com/wp-content/uploads/2017/12/semiótica-e1513326539201.jpg"
		}, 
		element7: {
			title: "Lexema",
			content: "Unidad mínima que dispone de significado léxico pese a no contar con morfemas gramaticales o prescindiendo de ellos mediante un mecanismo de segmentación.",
			src: "https://www.lifeder.com/wp-content/uploads/2020/10/lexema-concepto-lifeder-1024x575.jpg",
		},
		element8: {
			title: "Morfemas",
			content: "Parte variable de una palabra, que está compuesta, desde el punto de vista gramatical, por morfemas y lexemas. Aporta valor gramatical y está siempre asociado al lexema, que tiene valor semántico.",
			src:"https://definicion.com/wp-content/uploads/2022/09/morfema-tipos-1280x853.jpg"
		}
	}

	return (
		<div className="flex flex-row flex-wrap gap-10">
			{Object.values(elements).map((e) => <ElementosCard title={e.title} content={e.content} src={e.src}/>)}
		</div>
	)	
}
