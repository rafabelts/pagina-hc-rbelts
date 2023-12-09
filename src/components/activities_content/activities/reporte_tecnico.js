export default function ReporteTecnico(){
	return(
		<div className="flex flex-col">
			<h3 className="text-xl font-bold text-[#FAFAFA]">Introducción</h3>
			<p className="mb-2">
				El presente reporte técnico describe el desarrollo del videojuego Call of Duty Warzone. Battle royale gratuito desarrollado por Infinity Ward y Raven software, y publicado por Activision. El juego se lanzó el 10 de marzo de 2020 para plataformas:
			</p>
			<ul className="mb-8 list-disc pl-10">			
				<li>Playstation 4.</li>
				<li>Xbox One.</li>
				<li>Windows.</li>
			</ul>
			
			<h3 className="text-xl font-bold text-[#FAFAFA]">Objetivos</h3>
			<p className="mb-2">
				Los objetivos del desarrollo de este battle royale eran:
			</p>
			<ul className="mb-8 list-disc pl-10">
				<li>Desarrollar un battle royale divertido, competitivo y realista.</li>
				<li>Crear un juego que tuviera partidas con usuarios emparejados por su habilidad en el juego.</li>
				<li>Integrar el juego con las armas del Call Of Duty Modern Warfare</li>
			</ul>

			<h3 className="text-xl font-bold text-[#FAFAFA]">Alcance</h3>
			<p className="mb-8">
				El enfoque del desarrollo del juego fue para las plataformas Playstation 4, Xbox One y Microsoft Windows, y para usuarios con una conexión wifi disponible. Cada partida contaba con una duración de 30 minutos.
			</p>


			<h3 className="text-xl font-bold text-[#FAFAFA]">Requisitos técnicos</h3>
			<p className="mb-2">
				Para dispositivos con sistema operativo Microsoft Windows, los requisitos mínimos son los siguientes:
			</p>
			<ul className="mb-8 list-disc pl-10">
				<li>Sistema operativo: Windows 10 de 64 bits.</li>
				<li>Procesador: Intel Core i3-4340 o AMD FX-6300.</li>	
				<li>Memoria RAM: 8 GB.</li>
				<li>Tarjeta gráfica: NVIDIA GeForce GTX 660 o AMD Radeon HD 7870.</li>
				<li>Espacio en disco: 100 GB.</li>
			</ul>

			<h3 className="text-xl font-bold text-[#FAFAFA]">Diseño</h3>
			<div className="mb-8">
				<p className="mb-1">El juego tiene un estilo de arte realista. Los escenarios están inspirados en la ciudad real de Donetsk, Ucrania, como se puede observar en las siguientes figuras.</p>

				<div className="flex flex-row">
					<div className="flex flex-col">
						<img alt="Boneyard de Verdansk" src="https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/WZ-Mastery-Boneyard-Land-Loot-002.jpg"/>
						<p className="mt-2 italic text-xs text-[#D9D9D9]">Fig 1. Boneyard de Verdansk</p>
					</div>
					<div className="flex flex-col">
						<img alt="Estadio de Verdansk" src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/mw-wz/WZ-WW005-013.jpg"/>
						<p className="mt-2 italic text-xs text-[#D9D9D9]">Fig 2. Estadio de Verdansk</p>
					</div>
				</div>
			</div>
			<h3 className="text-xl font-bold text-[#FAFAFA]">Mecánicas del juego</h3>
			<p className="mb-2">
				El jugador controla a un soldado que debe sobrevivir a una batalla campal de hasta 150 jugadores, las mecánicas que podemos encontrar son:
			</p>
			<ul className="mb-8 list-disc pl-10">
				<li>Paracaidismo: Los jugadores despliegan de un avión y se lanzan en paracaídas a una ubicación que ellos decidan del mapa. El descenso se puede controlar abriendo y cerrando su paracaídas.</li>
				<li>Saqueo: Los jugadores pueden saquear edificios y cofres en busca de armas, equipo y dinero. El dinero puede ser utilizado para comprar artículos en las estaciones de compra, que se encuentran esparcidas alrededor del mapa.</li>	
				<li>Combate: Los jugadores pueden participar en combates con otros jugadores usando una variedad de armas, incluidos rifles de asalto, rifles de francotirador, escopetas y explosivos.</li>
				<li>Gulag: Cuando un jugador muere, se le envía al Gulag, donde se enfrenta a otro jugador en un duelo uno contra uno. El ganador de dicho duelo vuelve a reaparecer en la partida, mientras que el perdedor es eliminado.</li>
				<li>Contratos: Los jugadores pueden completar contratos para ganar recompensas, como puntos de experiencia y dinero. Vehículos: Los jugadores pueden usar vehículos para recorrer el mapa y participar en combates.</li>
				<li>Estaciones de compra: Permite a los jugadores comprar artículos que les ayuden a ganar la partida, estas pueden ser sus loadouts los cuales son una combinación de armas con ligeras modificaciones hechas por el usuario, UAV el cual es una ventaja que marca a ciertos enemigos en el mapa, reapariciones para los compañeros de equipo que hayan muerto, entre otras.</li>
			</ul>
			
			<h3 className="text-xl font-bold text-[#FAFAFA]">Historia</h3>
			<p className="mb-8">El juego no cuenta con una historia lineal. El jugador puede explorar el mapa y de igual forma puede ir viendo las zonas que no han sido cerradas por la tormenta, la cual hace que el mapa se vaya reduciendo.</p>
			
			<h3 className="text-xl font-bold text-[#FAFAFA]">Desarrollo</h3>
			<p className="mb-2">El equipo construyó el juego y agrego las características y contenido. Una de las características más importantes de Warzone es su mapa, Verdansk. El equipo de desarrollo pasó meses creando un mapa que fuera realista y detallado. Verdansk es un mapa urbano de 150 kilómetros cuadrados que está repleto de edificios, vehículos y puntos de interés.
			</p>
			<p className="mb-8">
				Otra característica importante de Warzone es su sistema de armas y armaduras. El equipo de desarrollo trabajó duro para crear un sistema que fuera equilibrado y divertido. Las armas en Warzone se pueden encontrar en el mapa o comprarse en las tiendas. Las armaduras se pueden encontrar en el mapa o comprarse en los puntos de compra.
			</p>


			<h3 className="text-xl font-bold text-[#FAFAFA]">Pruebas</h3>
			<p className="mb-8">El equipo de desarrollo llevó a cabo una serie de pruebas internas y externas para asegurarse de que el juego estuviera listo para su lanzamiento. Las pruebas externas se llevaron a cabo con jugadores de todo el mundo.</p>
			
			<h3 className="text-xl font-bold text-[#FAFAFA]">Lanzamiento</h3>
			<p className="mb-8">Warzone se lanzó el 10 de marzo de 2020, y rápidamente se convirtió en un éxito. En su primer mes, Warzone fue jugado por más de 60 millones de personas.<br/>El juego fue un éxito por varias razones. Primero, Warzone era un juego gratuito, lo que lo hacía accesible para una amplia gama de jugadores. Segundo, el juego era divertido y competitivo, lo que lo hacía atractivo para los jugadores de todos los niveles de habilidad. Tercero, el juego se actualizó con contenido nuevo de forma regular, lo que lo mantenía fresco y emocionante.</p>

			<h3 className="text-xl font-bold text-[#FAFAFA]">Conclusiones</h3>
			<p className="mb-8">El desarrollo de Call of Duty: Warzone fue un completo éxito, siendo un juego divertido, competitivo y accesible a jugadores de todos los niveles de habilidad. El juego también fue un rotundo éxito comercial, con un total de 60 millones de jugadores y generando alrededor de 4 mil millones de dólares con las microtransacciones del juego. Call of Duty: Warzone se convirtió en uno de los battle royale más populares y rentables del mundo.</p>
		</div>
	);
}
