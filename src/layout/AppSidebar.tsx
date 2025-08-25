"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "../icons/index";
import SidebarWidget from "./SidebarWidget";

type ItemNavegacion = {
  nombre: string;
  icono: React.ReactNode;
  ruta?: string;
  subItems?: { nombre: string; ruta: string; pro?: boolean; nuevo?: boolean }[];
};

const itemsMenuPrincipal: ItemNavegacion[] = [
  {
    icono: <GridIcon />,
    nombre: "Inicio",
    ruta: "/",
  },
  {
    icono: <CalenderIcon />,
    nombre: "Calendario",
    ruta: "/calendar",
  },
  {
    icono: <UserCircleIcon />,
    nombre: "Perfil de Usuario",
    ruta: "/profile",
  },
  {
    nombre: "Formularios",
    icono: <ListIcon />,
    subItems: [
      { nombre: "Elementos de Formulario", ruta: "/form-elements", pro: false },
    ],
  },
  {
    nombre: "Tablas",
    icono: <TableIcon />,
    subItems: [{ nombre: "Tablas Básicas", ruta: "/basic-tables", pro: false }],
  },
  {
    nombre: "Páginas",
    icono: <PageIcon />,
    subItems: [
      { nombre: "Página en Blanco", ruta: "/blank", pro: false },
      { nombre: "Error 404", ruta: "/error-404", pro: false },
    ],
  },
];

const itemsOtros: ItemNavegacion[] = [
  {
    icono: <PieChartIcon />,
    nombre: "Gráficas",
    subItems: [
      { nombre: "Gráfica de Líneas", ruta: "/line-chart", pro: false },
      { nombre: "Gráfica de Barras", ruta: "/bar-chart", pro: false },
    ],
  },
  {
    icono: <BoxCubeIcon />,
    nombre: "Elementos UI",
    subItems: [
      { nombre: "Alertas", ruta: "/alerts", pro: false },
      { nombre: "Avatar", ruta: "/avatars", pro: false },
      { nombre: "Insignias", ruta: "/badge", pro: false },
      { nombre: "Botones", ruta: "/buttons", pro: false },
      { nombre: "Imágenes", ruta: "/images", pro: false },
      { nombre: "Videos", ruta: "/videos", pro: false },
    ],
  },
  {
    icono: <PlugInIcon />,
    nombre: "Autenticación",
    subItems: [
      { nombre: "Iniciar Sesión", ruta: "/signin", pro: false },
      { nombre: "Registrarse", ruta: "/signup", pro: false },
    ],
  },
];

const BarraLateral: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const rutaActual = usePathname();

  const [submenuAbierto, setSubmenuAbierto] = useState<{
    tipo: "principal" | "otros";
    indice: number;
  } | null>(null);

  const [alturaSubmenu, setAlturaSubmenu] = useState<Record<string, number>>({});
  const refsSubmenu = useRef<Record<string, HTMLDivElement | null>>({});

  const esActivo = useCallback((ruta: string) => ruta === rutaActual, [rutaActual]);

  const alternarSubmenu = (indice: number, tipo: "principal" | "otros") => {
    setSubmenuAbierto((prev) => {
      if (prev && prev.tipo === tipo && prev.indice === indice) {
        return null;
      }
      return { tipo, indice };
    });
  };

  const renderizarItems = (items: ItemNavegacion[], tipo: "principal" | "otros") => (
    <ul className="flex flex-col gap-4">
      {items.map((item, indice) => {
        const estaActivo =
          (item.ruta && esActivo(item.ruta)) ||
          (submenuAbierto?.tipo === tipo && submenuAbierto?.indice === indice);

        return (
          <li key={item.nombre}>
            {item.subItems ? (
              <button
                onClick={() => alternarSubmenu(indice, tipo)}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors
                ${estaActivo
                    ? "bg-[#295884] text-white dark:bg-[#F5A800] dark:text-white"
                    : "text-[#295884] hover:bg-[#5899d554] dark:text-gray-400 dark:hover:bg-white/5"
                  }
                ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
              >
                <span>{item.icono}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span>{item.nombre}</span>
                )}
                {(isExpanded || isHovered || isMobileOpen) && (
                  <ChevronDownIcon
                    className={`ml-auto w-5 h-5 transition-transform duration-200
                    ${submenuAbierto?.tipo === tipo && submenuAbierto?.indice === indice ? "rotate-180" : ""}`}
                  />
                )}
              </button>
            ) : (
              item.ruta && (
                <Link
                  href={item.ruta}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors
                  ${esActivo(item.ruta)
                      ? "bg-[#295884] text-white dark:bg-[#F5A800] dark:text-white"
                      : "text-[#295884] hover:bg-[#5899d554]  dark:text-gray-400 dark:hover:bg-white/5"
                    }`}
                >
                  <span>{item.icono}</span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span>{item.nombre}</span>
                  )}
                </Link>
              )
            )}
            {item.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                ref={(el) => {
                  refsSubmenu.current[`${tipo}-${indice}`] = el;
                }}
                className="overflow-hidden transition-all duration-300"
                style={{
                  height:
                    submenuAbierto?.tipo === tipo && submenuAbierto?.indice === indice
                      ? `${alturaSubmenu[`${tipo}-${indice}`]}px`
                      : "0px",
                }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                  {item.subItems.map((sub) => (
                    <li key={sub.nombre}>
                      <Link
                        href={sub.ruta}
                        className={`block px-2 py-1 rounded-md text-sm transition-colors
          ${esActivo(sub.ruta)
                            ? "bg-[#5899d554] text-[#295884] dark:bg-[#f5a80054] dark:text-white"
                            : "text-[#295884] hover:bg-[#5899d554] dark:text-gray-400 dark:text-gray-400  "
                          }`}
                      >
                        {sub.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  useEffect(() => {
    let coincideSubmenu = false;
    ["principal", "otros"].forEach((tipo) => {
      const items = tipo === "principal" ? itemsMenuPrincipal : itemsOtros;
      items.forEach((item, indice) => {
        if (item.subItems) {
          item.subItems.forEach((sub) => {
            if (esActivo(sub.ruta)) {
              setSubmenuAbierto({ tipo: tipo as "principal" | "otros", indice });
              coincideSubmenu = true;
            }
          });
        }
      });
    });
    if (!coincideSubmenu) {
      setSubmenuAbierto(null);
    }
  }, [rutaActual, esActivo]);

  useEffect(() => {
    if (submenuAbierto !== null) {
      const key = `${submenuAbierto.tipo}-${submenuAbierto.indice}`;
      if (refsSubmenu.current[key]) {
        setAlturaSubmenu((prev) => ({
          ...prev,
          [key]: refsSubmenu.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [submenuAbierto]);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0  text-white h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logo.png"
                alt="Logo"
                width={180}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.png"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.png"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-300 ${!isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? "Menú" : <HorizontaLDots />}
              </h2>
              {renderizarItems(itemsMenuPrincipal, "principal")}
            </div>

            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-300 ${!isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? "Otros" : <HorizontaLDots />}
              </h2>
              {renderizarItems(itemsOtros, "otros")}
            </div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default BarraLateral;
