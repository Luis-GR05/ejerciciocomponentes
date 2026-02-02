import FormInput from './componentesForm/formInput';
import BotonGuardar from './componentesForm/botonGuardar';
import BotonCancelar from './componentesForm/botonCancelar';


export default function Formulario() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">
          Solicitar Día: <span className="font-normal">21 de enero de 2026</span>
        </h2>
        <button className="text-sm text-gray-500 hover:underline">
          Volver
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput label="Día Solicitado" type="date" />
        <FormInput label="Número de Teléfono" />

        <FormInput label="Jornada" />
        <FormInput label="Turno Solicitado" />

        <FormInput label="Núm de horas de docencia directa y guardias afectadas" />
        <FormInput label="Núm de días de permisos solicitados en el centro" />

        <div className="md:col-span-2 space-y-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Estoy solicitando un día de permiso no retribuido
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />
            ¿Causa sobrevenida?
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1">
            Justificación de la causa sobrevenida
          </label>
          <textarea className="w-full border rounded p-3 h-28" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1">
            Documento Justificativo en PDF
          </label>
          <input type="file" />
        </div>

        <div className="md:col-span-2 flex justify-end gap-3">
          <BotonCancelar />
          <BotonGuardar />
        </div>
      </form>
    </div>
  );
}
