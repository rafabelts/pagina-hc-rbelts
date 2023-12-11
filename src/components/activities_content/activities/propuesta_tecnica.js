function EspecificacionesTable(){
	return(
		<div className="flex flex-col" >
			<p className="mt-4 mb-2 text-sm text-gray-400">Tabla 1. Componentes necesarios para el equipo</p>
			<table className="mb-8 rounded-md p-12 w-full">
				<tr className="text-left">
					<th>Componente</th>
					<th>Especificación</th>
				</tr>
				<tr>
					<td>Procesador</td>
					<td>Intel Core i9-12900K</td>
				</tr>
				<tr>
					<td>Memoria RAM</td>
					<td>32 GB DDRS</td>
				</tr>
				<tr>
					<td>Tarjeta gráfica</td>
					<td>NVIDIA GeForce RTX 4080</td>
				</tr>
				<tr>
					<td>Almacenamiento</td>
					<td>SSD Samsung 980 Pro de 1 TB</td>
				</tr>
			</table>
		</div>
	
	);
}
function OthersTable(){
	return(
		<div className="flex flex-col mb-8" >
			<p className="mt-4 mb-2 text-sm text-gray-400">Tabla 2. Otros componentes para el equipo</p>
			<table className="rounded-md p-12">
				<tr className="text-left">
					<th>Componente</th>
					<th>Especificación</th>
				</tr>
				<tr>
					<td>Placa base</td>
					<td>Asus Intel B760 ROG Strix B760-A Gaming</td>
				</tr>
				<tr>
					<td>Fuente de alimentación</td>
					<td>Corsair RM850x</td>
				</tr>
				<tr>
					<td>Cooler</td>
					<td>Noctua NH-D15</td>
				</tr>
				<tr>
					<td>Gabinete</td>
					<td>NZXT H5 Flow</td>
				</tr>
			</table>
		</div>
	
	);
}
function PropuestaTecnica() {
	return(
		<div>
			<h3 className="text-xl font-bold text-[#FAFAFA]">Introducción</h3>
			<p className="mb-2">
				Los videojuegos actuales se han vuelto cada vez más exigentes, y requieren de una computadora con un buen rendimiento para jugarlos con buena calidad de imagen y una alta tasa de cuadros por segundo.
			</p>
			<p className="mb-2">Esta propuesta técnica presenta una computadora gamer capaz de cumplir con estos requisitos. Esta poderosa computadora ofrece un rendimiento óptimo para jugar videojuegos actuales en una buena resolución y con una alta tasa de cuadros por segundo, y la posibilidad de actualizar los componentes a futuro.</p>
			<p className="mb-8">La computadora se puede implementar en un plazo de 7 semanas.</p>
	
			
			<h3 className="text-xl font-bold text-[#FAFAFA]">Objetivos</h3>
			<p className="mb-2">
				El objetivo de la presente propuesta es definir especificaciones técnicas de una computadora gamer capaz de cumplir los siguientes requisitos:	
			</p>		
			<ol className="mb-8 list-disc pl-10">
				<li>Rendimiento óptimo para jugar los videojuegos actuales en una buena resolución y con una alta tasa de cuadros por segundos.</li>
				<li>La posibilidad de actualizar los componentes a futuro.</li>
				<li>Que tenga una buena estética.</li>
			</ol>	

			<h3 className="text-xl font-bold text-[#FAFAFA]">Especificaciones técnicas</h3>
			<EspecificacionesTable/>

			<h3 className="text-xl font-bold text-[#FAFAFA]">Otros componentes</h3>
			<OthersTable />
		
			<h3 className="text-xl font-bold text-[#FAFAFA]">Importancia de los componentes</h3>
			<p className="mb-2">
				El procesador es el componente más importante de cualquier computadora, ya que es el encargado de interpretar las instrucciones dadas por los programas y procesar los datos. Un procesador potente es esencial para tener un buen rendimiento en juegos.
			</p>
			<p className="mb-2">
				La memoria RAM es otro componente importante para las computadoras, ya que se encarga del almacenamiento de los datos utilizados por el procesador. Un mínimo de 16 GB de RAM es suficiente para la mayoría de los juegos, pero para sacar el mayor provecho de nuestro procesador utilizaremos 32 GB de RAM.
			</p>	
			<p className="mb-2">
				La tarjeta gráfica es el componente que se encarga de generar los gráficos de los videojuegos. Una tarjeta gráfica potente es esencial para tener una buena calidad de imagen y buen rendimiento en juegos.
			</p>
			<p className="mb-2">
				El almacenamiento es necesario para guardar los datos del sistema operativo, juegos y otros datos. La mejor opción es un disco de estado sólido (SSD) NVme PCle Gen 4.0, ya que nos ofrece una velocidad de lectura y escritura rápida, lo que puede traducirse en tiempos de carga de juegos más rápidos, menor latencia y una mejor experiencia general en los juegos.
			</p>
			<p className="mb-2">
				La placa madre es el componente que conecta todos los demás componentes de la computadora. Es importante elegir una placa madre compatible con los demás componentes que se utilizarán.
			</p>
			<p className="mb-2">
				La fuente de alimentación es el componente que suministra energía a todos los demás componentes de la computadora. Es importante elegir una fuente de alimentación con suficiente potencia para alimentar todos los componentes de la computadora.
			</p>
			<p className="mb-2">
				El cooler es el componente que se encarga de mantener la temperatura de los componentes de la computadora a un nivel seguro. Es importante elegir un cooler que sea compatible con el procesador y que proporcione un buen rendimiento de refrigeración.
			</p>
			<p className="mb-8">
				El gabinete es la carcasa que alberga los componentes de la computadora. Es importante elegir un gabinete que tenga un buen flujo de aire y que sea compatible con los demás componentes de la computadora.
			</p>

			<h3 className="text-xl font-bold text-[#FAFAFA]">Cronograma de implementación</h3>
			<p className="mb-2">
				La implementación de la computadora gamer se puede realizar en las siguientes etapas:
			</p>
		
			<ol className="mb-8 list-disc pl-10">
				<li>Etapa 1: Recopilación de requisitos (1 semana).</li>
				<li>Etapa 2: Diseño de la solución (2 semanas).</li>
				<li>Etapa 3: Implementación de la solución (4 semanas).</li>
			</ol>


			<h3 className="text-xl font-bold text-[#FAFAFA]">Conclusiones</h3>
			<p className="mb-2">
				La propuesta técnica presentada cumple con los requisitos establecidos. Los componentes seleccionados ofrecen un rendimiento óptimo para jugar a los videojuegos actuales en alta resolución y con una alta tasa de cuadros por segundos. Además, los componentes son compatibles entre sí y ofrecen la posibilidad de actualizarlos en el futuro. La estética de la computadora también es atractiva, con un diseño moderno y elegante.			
			</p>

		</div>
	);
}

function ReferenciasPropuesta(){
	return(
		<div className="flex flex-col text-gray-300 gap-4 mt-2">
			<p>Burek J. (4 de Agosto 2023).How to Build a PC: The Ultimate Beginner's Guide [Archivo de texto]. Recuperado de: <a href="https://www.pcmag.com/how-to/how-to-build-a-pc-the-ultimate-beginners-guide">https://www.pcmag.com/how-to/how-to-build-a-pc-the-ultimate-beginners-guide</a></p>
			
			<p>Intel. (s. f.).How to Build a Gaming PC - Intel [Archivo de texto]. Recuperado de: <a href="https://www.intel.com/content/www/us/en/gaming/resources/how-to-build-a-gaming-pc.html">https://www.intel.com/content/www/us/en/gaming/resources/how-to-build-a-gaming-pc.html</a></p>

			<p>Smith S. L & Andronico M. (2017).Gaming Desktop Buying Guide: 7 Things You Need to Know [Archivo de texto]. Recuperado de: <a href="https://www.tomsguide.com/us/how-to-buy-gaming-pc,review-3981.html">https://www.tomsguide.com/us/how-to-buy-gaming-pc,review-3981.html</a></p>

		</div>
	);
}

export {PropuestaTecnica, ReferenciasPropuesta} 
