import { NavLink } from 'react-router-dom';
import miImagen from "../assets/img/logo.png";

interface MenuLateralProps {
  abierto: boolean;
  cerrar: () => void;
}

<<<<<<< HEAD
const navItems = [
  { label: "Sol. día diurno", to: "/sol-diurno" },
  { label: "Sol. día vespertino", to: "/sol-vespertino" },
  { label: "Mi Perfil", to: "/perfil" },
  { label: "Mis días Solicitados", to: "/dias-solicitados" },
  { label: "Mis ausencias", to: "/ausencias" },
];
=======
export default function MenuLateral({ abierto, cerrar }: MenuLateralProps) {
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Sol. día diurno", path: "/SolDiurno" },
    { name: "Sol. día vespertino", path: "/SolVespertino" },
    { name: "Mi Perfil", path: "/Perfil" },
    { name: "Mis días Solicitados", path: "/DiasSolicitados" },
    { name: "Mis ausencias", path: "/Ausencias" },
  ];
>>>>>>> f31a73e210714bc3f67e105f80d3ef7d6f4bc1e1

export default function MenuLateral({ abierto, cerrar }: MenuLateralProps) {
  return (
    <>
      {abierto && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={cerrar}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200
          transform transition-transform duration-300
          ${abierto ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative
        `}
      >
        <div className="h-36 flex items-center justify-center border-b border-gray-100">
          <img src={miImagen} className="h-28 w-auto object-contain" alt="Logo" />
        </div>

        <nav className="p-4 space-y-2 text-sm">
          {navItems.map((item) => (
            <NavLink
<<<<<<< HEAD
              key={item.to}
              to={item.to}
              onClick={cerrar}
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${isActive
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
=======
              key={item.path}
              to={item.path}
              onClick={() => {
                if (window.innerWidth < 768) cerrar();
              }}
              className={({ isActive }) =>
                `block px-3 py-2 rounded transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              {item.name}
>>>>>>> f31a73e210714bc3f67e105f80d3ef7d6f4bc1e1
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}