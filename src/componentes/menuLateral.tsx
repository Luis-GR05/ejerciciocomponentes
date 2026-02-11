import { NavLink } from 'react-router-dom';
import miImagen from "../assets/img/logo.png";

interface MenuLateralProps {
  abierto: boolean;
  cerrar: () => void;
}

const navItems = [
  { label: "Sol. día diurno", to: "/sol-diurno" },
  { label: "Sol. día vespertino", to: "/sol-vespertino" },
  { label: "Mi Perfil", to: "/perfil" },
  { label: "Mis días Solicitados", to: "/dias-solicitados" },
  { label: "Mis ausencias", to: "/ausencias" },
];

export default function MenuLateral({ abierto, cerrar }: MenuLateralProps) {
  return (
    <>
      {abierto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
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
        <div className="h-36 flex items-center px-6 border-b">
          <img src={miImagen} className="h-32 w-auto" alt="Logo" />
        </div>

        <nav className="p-4 space-y-2 text-sm">
          {navItems.map((item) => (
            <NavLink
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
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
