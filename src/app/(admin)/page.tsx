import type { Metadata } from "next";
import React from "react";
import {
  FiBox, FiBarChart2, FiSearch, FiUsers, FiFeather,
  FiAirplay, FiFileText, FiLock, FiStar, FiFlag, FiMonitor,
  FiHeart, FiFolder
} from "react-icons/fi";
import { FaGraduationCap, FaCalculator } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

export const metadata: Metadata = {
  title: "SION - Sistema de Información Organizacional",
  description: "SION - Sistema de Información Organizacional",
};

// 🎨 Paletas para asignar estilos aleatorios
const colors = [
  { color: "text-blue-600 dark:text-blue-400", circle: "bg-blue-100 dark:bg-blue-900/40", shadow: "rgba(37,99,235,0.15)" },
  { color: "text-indigo-600 dark:text-indigo-400", circle: "bg-indigo-100 dark:bg-indigo-900/40", shadow: "rgba(79,70,229,0.15)" },
  { color: "text-yellow-600 dark:text-yellow-400", circle: "bg-yellow-100 dark:bg-yellow-900/40", shadow: "rgba(202,138,4,0.15)" },
  { color: "text-rose-600 dark:text-rose-400", circle: "bg-rose-100 dark:bg-rose-900/40", shadow: "rgba(225,29,72,0.15)" },
  { color: "text-green-600 dark:text-green-400", circle: "bg-green-100 dark:bg-green-900/40", shadow: "rgba(22,163,74,0.15)" },
  { color: "text-sky-600 dark:text-sky-400", circle: "bg-sky-100 dark:bg-sky-900/40", shadow: "rgba(2,132,199,0.15)" },
  { color: "text-purple-600 dark:text-purple-400", circle: "bg-purple-100 dark:bg-purple-900/40", shadow: "rgba(147,51,234,0.15)" },
  { color: "text-pink-600 dark:text-pink-400", circle: "bg-pink-100 dark:bg-pink-900/40", shadow: "rgba(219,39,119,0.15)" },
  { color: "text-orange-600 dark:text-orange-400", circle: "bg-orange-100 dark:bg-orange-900/40", shadow: "rgba(234,88,12,0.15)" },
  { color: "text-gray-600 dark:text-gray-400", circle: "bg-gray-100 dark:bg-gray-800/60", shadow: "rgba(75,85,99,0.15)" },
  { color: "text-cyan-600 dark:text-cyan-400", circle: "bg-cyan-100 dark:bg-cyan-900/40", shadow: "rgba(8,145,178,0.15)" },
  { color: "text-teal-600 dark:text-teal-400", circle: "bg-teal-100 dark:bg-teal-900/40", shadow: "rgba(13,148,136,0.15)" },
  { color: "text-violet-600 dark:text-violet-400", circle: "bg-violet-100 dark:bg-violet-900/40", shadow: "rgba(139,92,246,0.15)" },
  { color: "text-stone-700 dark:text-stone-300", circle: "bg-stone-100 dark:bg-stone-800/60", shadow: "rgba(41,37,36,0.15)" },
  { color: "text-lime-600 dark:text-lime-400", circle: "bg-lime-100 dark:bg-lime-900/40", shadow: "rgba(101,163,13,0.15)" },
  { color: "text-emerald-600 dark:text-emerald-400", circle: "bg-emerald-100 dark:bg-emerald-900/40", shadow: "rgba(5,150,105,0.15)" },
  { color: "text-fuchsia-600 dark:text-fuchsia-400", circle: "bg-fuchsia-100 dark:bg-fuchsia-900/40", shadow: "rgba(192,38,211,0.15)" },
  { color: "text-red-600 dark:text-red-400", circle: "bg-red-100 dark:bg-red-900/40", shadow: "rgba(220,38,38,0.15)" },
  { color: "text-amber-600 dark:text-amber-400", circle: "bg-amber-100 dark:bg-amber-900/40", shadow: "rgba(217,119,6,0.15)" },
  { color: "text-lightBlue-600 dark:text-sky-300", circle: "bg-lightBlue-100 dark:bg-sky-900/40", shadow: "rgba(3,105,161,0.15)" },
];

// 🔀 función para obtener estilos aleatorios
function getRandomStyle() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Ecommerce() {
  const sistemas = [
    {
      titulo: "Sistemas Estratégicos",
      items: [
        { nombre: "Calidad", icon: <FiBox /> },
        { nombre: "Informes y Gráficos", icon: <FiBarChart2 /> },
        { nombre: "Investigación - UNAC", icon: <FiSearch /> },
      ],
    },
    {
      titulo: "Sistemas Misionales",
      items: [
        { nombre: "Egresado", icon: <FiUsers /> },
        { nombre: "Psicología", icon: <FiFeather /> },
        { nombre: "SLIES", icon: <FiAirplay /> },
      ],
    },
    {
      titulo: "Sistemas de Apoyo",
      items: [
        { nombre: "Activos", icon: <FiBox /> },
        { nombre: "Administrativo", icon: <MdAdminPanelSettings /> },
        { nombre: "Admisiones y Registro", icon: <FaGraduationCap /> },
        { nombre: "Contabilidad", icon: <FaCalculator /> },
        { nombre: "Gestión Documental", icon: <FiFileText /> },
        { nombre: "Salud Ocupacional", icon: <FiHeart /> },
        { nombre: "Labor Educativa", icon: <FiBox /> },
        { nombre: "Mercadeo", icon: <FiBarChart2 /> },
        { nombre: "Mis procesos en la UNAC", icon: <FiSearch /> },
        { nombre: "Personal", icon: <FiBox /> },
        { nombre: "Procesos Académicos", icon: <FiStar /> },
        { nombre: "Recursos Académicos - ReAcad", icon: <FiBox /> },
        { nombre: "Secretaría General", icon: <FiFolder /> },
        { nombre: "Seguridad", icon: <FiLock /> },
        { nombre: "SUSI", icon: <FiMonitor /> },
        { nombre: "Talento humano", icon: <FiFileText /> },
        { nombre: "Votaciones", icon: <FiFlag /> },
      ],
    },
  ];

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen transition-colors duration-300">
      {sistemas.map((grupo, idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {grupo.titulo}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {grupo.items.map((item, i) => {
              const style = getRandomStyle(); // 🎲 se asigna un estilo random
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center transition transform hover:scale-105 cursor-pointer"
                  style={{ boxShadow: `0 4px 12px ${style.shadow}` }}
                >
                  {/* Badge circular */}
                  <div className={`w-14 h-14 flex items-center justify-center rounded-full ${style.circle}`}>
                    <div className={`text-2xl ${style.color}`}>{item.icon}</div>
                  </div>
                  <span className="mt-3 font-medium text-gray-700 dark:text-gray-300">
                    {item.nombre}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
