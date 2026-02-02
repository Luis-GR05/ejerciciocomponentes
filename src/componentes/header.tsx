interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 h-36 flex items-center px-6">
      <button
        onClick={onMenuToggle}
        className="md:hidden mr-4 text-gray-600 text-xl"
      >
        ☰
      </button>

      <span className="font-semibold text-gray-700">
        I.E.S Albarregas
      </span>

      <div className="ml-auto text-sm text-gray-600">
        Hola, <span className="font-medium">Prof. Borja</span>
      </div>
    </header>
  );
}
