import { useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

interface Ausencia {
  periodoInicio: string;
  periodoFin: string;
  estado: string;
  ultimaModificacion: string;
  anexoV: boolean;
  adjuntos: boolean;
}

const ausenciasData: Ausencia[] = [
  {
    periodoInicio: "14/01/2026",
    periodoFin: "15/01/2026",
    estado: "Pendiente de Justificación",
    ultimaModificacion: "15/01/2026 23:30",
    anexoV: false,
    adjuntos: false,
  },
];

const Ausencias = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          Historial de Ausencias Justificadas
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:underline flex items-center gap-1"
        > Volver
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 font-medium">
              <th className="py-3 px-4">Periodo ausencia</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4">Última Modificación</th>
              <th className="py-3 px-4 text-center">Anexo V</th>
              <th className="py-3 px-4 text-center">Adjuntos</th>
              <th className="py-3 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ausenciasData.map((ausencia, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 text-gray-700">
                  {ausencia.periodoInicio} al {ausencia.periodoFin}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {ausencia.estado}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {ausencia.ultimaModificacion}
                </td>
                <td className="py-3 px-4 text-center">
                  <span className={ausencia.anexoV ? "text-green-600 font-bold" : "text-red-500 font-bold"}>
                    {ausencia.anexoV ? <FaCheck /> : <RxCross2 />}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className={ausencia.adjuntos ? "text-green-600 font-bold" : "text-red-500 font-bold"}>
                    {ausencia.adjuntos ? <FaCheck /> : <RxCross2 />}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center gap-1 mx-auto">
                    Justificar día
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ausencias;