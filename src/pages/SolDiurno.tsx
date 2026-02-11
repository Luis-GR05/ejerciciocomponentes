import { useState } from 'react';
import FormInput from '../componentes/componentesForm/formInput';
import BotonGuardar from '../componentes/componentesForm/botonGuardar';
import BotonCancelar from '../componentes/componentesForm/botonCancelar';

export default function SolicitarDia() {
  const [fechaCabecera, setFechaCabecera] = useState("Seleccione una fecha");

  const [errorTel, setErrorTel] = useState("");
  const [errorHoras, setErrorHoras] = useState("");

  const manejarValidacionTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    const regex = /^[6789]\d{8}$/;
    if (!regex.test(valor) && valor !== "") {
      setErrorTel("Teléfono no válido (9 dígitos, empieza por 6-9)");
    } else {
      setErrorTel("");
    }
  };

  const manejarValidacionHoras = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= 0 || valor >= 8) {
      setErrorHoras("Las horas deben ser mayores a 0 y menores a 8");
    } else {
      setErrorHoras("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mt-10">
      <div className="flex items-center justify-between mb-8 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Solicitar Día: <span className="text-blue-600 font-medium">{fechaCabecera}</span>
        </h2>
        <button className="text-sm text-gray-400 hover:text-gray-600">Volver</button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>

        <FormInput
          label="Día Solicitado (dd/mm/yyyy)"
          type="date"
          onChange={(e) => setFechaCabecera(e.target.value)}
        />

        <div>
          <FormInput label="Número de Teléfono" onChange={manejarValidacionTel} />
          {errorTel && <p className="text-red-500 text-xs mt-1 font-semibold">{errorTel}</p>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Jornada</label>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="completa">Completa</option>
            <option value="parcial">Parcial</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Turno</label>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="diurno">Diurno</option>
          </select>
        </div>

        <div>
          <FormInput
            label="Núm. Horas Afectadas"
            type="number"
            onChange={manejarValidacionHoras}
          />
          {errorHoras && <p className="text-red-500 text-xs mt-1 font-semibold">{errorHoras}</p>}
        </div>

        <FormInput label="Núm. días permisos en el centro" type="number" />

        <div className="md:col-span-2 p-4 bg-gray-50 rounded-lg">
          <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-blue-600" />
            Estoy solicitando un día de permiso no retribuido
          </label>
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 mt-6 pt-6 border-t">
          <BotonCancelar onClick={() => alert("Cancelado")} />
          <BotonGuardar />
        </div>
      </form>
    </div>
  );
}