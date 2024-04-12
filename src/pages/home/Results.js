import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@material-tailwind/react";

function Results() {
	const navigate = useNavigate(); // Hook de navegación

	const puntaje = 9; // Aquí asigna el puntaje dinámicamente

	const getColorClass = (puntaje) => {
		if (puntaje <= 3) {
			return "bg-red-500";
		} else if (puntaje <= 7) {
			return "bg-yellow-500";
		} else {
			return "bg-green-500";
		}
	};

	return (
		<div className="font-text flex-column w-full">
			{/* RESUMEN DEL ALIMENTO - PARTE SUPERIOR */}
			<div className="flex justify-center items-center text-center w-full py-6 px-4">
				<div className="flex-column justify-center items-center text-center w-full max-w-2xl py-6 px-4">
					<h1 className="text-2xl font-bold">ANÁLISIS ALIMENTICIO</h1>
					<p className="text-lg pt-6">Puntuación nutricional: 7/10</p>
					<p className="text-lg">¿Debería consumirlo?: No</p>
					<p className="pt-4">
						Esta bebida tiene un contenido moderado en calorías y proteínas, pero es alta en grasas
						saturadas. Aunque el sodio es bajo, la falta de fibra y las limitadas vitaminas hacen
						que no sea la mejor opción para la persona con hipertensión y el objetivo de bajar de
						peso
					</p>
				</div>
			</div>

			{/* DESCRIPCION DE LOS ITEMS DEL ALIMENTO */}
			<div className="flex flex-column w-auto justify-center items-center pb-24">
				<div className="grid gap-4 md:grid-cols-2 flex-column w-auto justify-center items-center px-4">
					{/* CARD */}
					<div className="flex p-4 flex-col justify-center text-center h-full w-full max-w-md rounded-3xl mt-4 bg-zinc-100 border shadow-lg">
						<div className="flex flex-col items-center justify-center p-4">
							<p className="font-bold text-xl pb-4">Carbohidratos</p>
							<p className="text-sm">Puntuación: 8/10</p>

							{/* BARRA INDICADORA */}
							<div className="w-full h-4 bg-gray-200 rounded-full">
								<div
									className={`progress rounded-full h-full ${getColorClass(puntaje)}`}
									style={{ width: `${puntaje * 10}%` }}
								></div>
							</div>

							<p className="pt-6">
								Proporciona 5 g de carbohidratos por porción, siendo 2% del valor diario.
							</p>
							<p>
								La cantidad de carbohidratos es baja, lo cual puede ser positivo para el objetivo de
								bajar de peso.
							</p>
						</div>
					</div>
					{/* //////////////////////////// */}

					<div className="flex p-4 flex-col justify-center text-center h-full w-full max-w-md rounded-3xl mt-4 bg-zinc-100 border shadow-lg">
						<div className="flex flex-col items-center justify-center p-4">
							<p className="font-bold text-xl pb-4">Carbohidratos</p>
							<p className="text-sm">Puntuación: 8/10</p>

							{/* BARRA INDICADORA */}
							<div className="w-full h-4 bg-gray-200 rounded-full">
								<div
									className={`progress rounded-full h-full ${getColorClass(puntaje)}`}
									style={{ width: `${puntaje * 10}%` }}
								></div>
							</div>

							<p className="pt-6">
								Proporciona 5 g de carbohidratos por porción, siendo 2% del valor diario.
							</p>
							<p>
								La cantidad de carbohidratos es baja, lo cual puede ser positivo para el objetivo de
								bajar de peso.
							</p>
						</div>
					</div>

					{/* //////////////////////////// */}

					<div className="flex p-4 flex-col justify-center text-center h-full w-full max-w-md rounded-3xl mt-4 bg-zinc-100 border shadow-lg">
						<div className="flex flex-col items-center justify-center p-4">
							<p className="font-bold text-xl pb-4">Carbohidratos</p>
							<p className="text-sm">Puntuación: 8/10</p>

							{/* BARRA INDICADORA */}
							<div className="w-full h-4 bg-gray-200 rounded-full">
								<div
									className={`progress rounded-full h-full ${getColorClass(puntaje)}`}
									style={{ width: `${puntaje * 10}%` }}
								></div>
							</div>

							<p className="pt-6">
								Proporciona 5 g de carbohidratos por porción, siendo 2% del valor diario.
							</p>
							<p>
								La cantidad de carbohidratos es baja, lo cual puede ser positivo para el objetivo de
								bajar de peso.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Results;
