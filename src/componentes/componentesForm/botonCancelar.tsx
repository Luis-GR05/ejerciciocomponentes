interface BotonCancelarProps {
  onClick?: () => void;
}

export default function BotonCancelar({ onClick }: BotonCancelarProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-5 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
    >
      Cancelar
    </button>
  );
}
