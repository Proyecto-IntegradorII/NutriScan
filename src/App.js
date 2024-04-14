import { useState, useEffect, useRef } from "react";
import OpenAI from "openai";
import "./index.css";
import MyAudioVisualaizer from "./pages/visualaizers/audio";
import Modal from "react-modal";
import canvasImage from "../src/images/canvas.png"; // Import your image
import Swal from "sweetalert2";
import Button from "./components/button";

function App() {

	return (
		<div className="relative h-screen overflow-hidden">
			<video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full brightness-60" style={{ filter: "brightness(0.4)" }}>
				<source src="https://videocdn.cdnpk.net/joy/content/video/free/video0460/large_preview/_import_60cc2c109d2283.38913314.mp4?filename=1105859_1080p_4k_2k_3840x2160.mp4" type="video/mp4" />
				Tu navegador no soporta el elemento de video.
			</video>
			<div className="flex flex-col justify-center items-center h-screen ">
				<p className="z-10 w-[60rem] text-center mb-14 text-lg font-bold pt-[-2rem] text-white " >
					¡Bienvenido a NutriScan! Obten toda la información necesaria sobre el alimento que deseas consumir, solo respondes algunas preguntas sobre tu salud, objetivos alimenticios y estilo de vida y luego, simplemente subes una foto de la tabla nutricional del alimento que deseas consumir. Basándonos en tus respuestas y la información proporcionada, te ofrecemos un análisis personalizado sobre la idoneidad del alimento para ti. ¡Comienza a tomar decisiones alimenticias más informadas y saludables con NutriScan!
				</p>
				<Button texto={"Empezar"} onClick={console.log("jeje")} />
			</div>
		</div>
	);
}

export default App;
