function ElementosCard({title, content}){
	return(
		<div className="flex flex-col justify-center bg-[#1B1B1A] p-5 w-[47%] rounded-lg">
			<p className="text-xl text-white font-bold">{title}</p>
			<p className="text-base text-gray-100">{content}</p>
		</div>
	);
}


export default function GuiaParaDebate() {
	const pasos = {
		paso1: {
			title: "Investigación",
			content: "La investigación es la base de cualquier debate exitoso. Para investigar un tema, puedes utilizar una variedad de fuentes, como libros, artículos, informes, sitios web, entrevistas y expertos. Es importante que encuentres fuentes fiables y que utilices una variedad de perspectivas.",
		},
		paso2: {
			title: "Argumentación",
			content: "Una vez que hayas investigado el tema, puedes empezar a desarrollar tus argumentos. Los argumentos deben ser claros, concisos y apoyados por pruebas. Es importante que consideres todos los puntos de vista posibles y que puedas argumentar de forma sólida.",
		},
		paso3: {
			title: "Oratoria",
			content: "La oratoria es una parte fundamental del debate. Para comunicarte de manera efectiva, debes hablar con claridad, concisión y convicción. Practica tu discurso en voz alta para asegurarte de que suena natural y persuasivo.",
		}, 
		paso4: {
			title: "Objeciones",
			content: "Es importante que estés preparado para responder a posibles objeciones que puedan plantear tus oponentes. Para ello, puedes investigar las objeciones más comunes y desarrollar respuestas sólidas.",
		},
		paso5: {
			title: "Feedback",
			content: "Pide a tus amigos, familiares o profesores que te den feedback sobre tu preparación. Esto te ayudará a identificar áreas en las que puedes mejorar.",
		}
	}
	
	const consejos = {
		cons1: "Manténer la calma y la compostura.",
		cons2: "Escuchar atentamente a tus oponentes para poder refutar de forma efectiva.",
		cons3: "No te apegues a tu discurso. Es importante estar preparado para adaptar el discurso a la situación.",	
	}
	return(
		<div className="flex flex-col">
			<div className="flex flex-row flex-wrap gap-10">
				{
					Object.values(pasos).map((paso) => <ElementosCard title={paso.title} content={paso.content}/>)
				}
			</div>
			<div className="w-[100%] h-[2px] bg-zinc-600 mt-2 mb-5" />
			<p className="text-2xl mt-2 mb-2 text-zinc-200 font-bold">Consejos adicionales:</p>
			{
				Object.values(consejos).map((content) =>  <li className="mb-2">{content}</li>)
			}
		</div>
	)
}
