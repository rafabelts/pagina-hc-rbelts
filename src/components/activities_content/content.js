import mapa_conceptual from "../images/mapa_conceptual.png";
import ReferenciasMapa from "./activities/mapa_conceptual.js"
import {ElementosLenguaje, ReferenciasElementos} from "./activities/elementos_lenguaje.js"
import Analogia from "./activities/analogía.js"
import GuiaParaDebate from "./activities/guia_debate.js"
import {ReporteTecnico, ReferenciasReporte} from "./activities/reporte_tecnico.js"
import {Ensayo, ReferenciasEnsayo} from "./activities/ensayo.js"
import {PropuestaTecnica, ReferenciasPropuesta} from "./activities/propuesta_tecnica.js"
import {GuiaAPA, ReferenciasAPA} from "./activities/guia_apa.js"
import {Podcast, ReferencesPodcast} from "./activities/podcast.js"

const activities_content = {
	act1: {
		title: "Mapa Conceputal: La importancia de la comunicación oral y escrita en el siglo XXI",
		date: "29 de Agosto de 2023",
		content: <img src={mapa_conceptual} />,
		needReference: true,
		references: <ReferenciasMapa/>
	},
	act2: {
		title: "Elementos del lenguaje",
		date: "8 de Septiembre de 2023",
		content: <ElementosLenguaje />,  
		needReference: true,
		references: <ReferenciasElementos/>
	},
	act3: {
		title: "Analogía de la comunicación",
		date: "18 de Octubre de 2023",
		content: <Analogia />	
	},
	act4: {
		title: "Guia para debate",
		date: "18 de Octubre de 2023",
		content: <GuiaParaDebate />,	
	},
	act5: {
		title: "Reporte Técnico",
		date: "8 de Noviembre de 2023",
		content: <ReporteTecnico />,
		needReference: true,
		references: <ReferenciasReporte/>
	},
	act6: {
		title: "Ensayo: Afectaciones la IA en la sociedad",
		date: "8 de Noviembre de 2023",
		content: <Ensayo />,
		needReference: true,
		references: <ReferenciasEnsayo />
	},
	act7: {
		title: "Propuesta técnica para una computadora gamer",
		date: "8 de Noviembre de 2023",
		content: <PropuestaTecnica />,
		needReference: true,
		references: <ReferenciasPropuesta/>
	},
	act8: {
		title: "Guía para referenciar en formato APA",
		date: "8 de Noviembre de 2023",
		content: <GuiaAPA />,
		needReference: true,
		references: <ReferenciasAPA/>
	},
	act9: {
		title: "Podcast sobre la aportación de la ingeniería de software en ods",
		date: "28 de Noviembre de 2023",
		content: <Podcast />,
		needReference: true,
		references: <ReferencesPodcast/>
	}
}

export default activities_content;
