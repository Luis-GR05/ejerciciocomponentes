<<<<<<< HEAD
import { useState } from 'react';
import FormInput from '../componentes/componentesForm/formInput';

export default function SolDiurno() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState("Seleccione un día");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validarTelefono = (value: string) => {
    const regex = /^[6789]\d{8}$/;
    if (!regex.test(value)) {
      setErrors(prev => ({ ...prev, tel: "Debe empezar por 6-9 y tener 9 cifras" }));
    } else {
      setErrors(prev => ({ ...prev, tel: "" }));
    }
  };

  const validarHoras = (value: string) => {
    const num = Number(value);
    if (num <= 0 || num >= 8) {
      setErrors(prev => ({ ...prev, horas: "Debe ser entre 1 y 7" }));
    } else {
      setErrors(prev => ({ ...prev, horas: "" }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
        Solicitar Día: <span className="text-blue-600">{fechaSeleccionada}</span>
      </h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput 
          label="Día Solicitado" 
          type="date" 
          onChange={(e) => setFechaSeleccionada(e.target.value)} 
        />
        
        <div>
          <FormInput 
            label="Número de Teléfono" 
            onChange={(e) => validarTelefono(e.target.value)}
          />
          {errors.tel && <p className="text-red-500 text-xs mt-1">{errors.tel}</p>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Jornada</label>
          <select className="border rounded-md p-2 mt-1">
            <option>Completa</option>
            <option>Parcial</option>
          </select>
        </div>

        <div>
          <FormInput 
            label="Núm. Horas Afectadas" 
            type="number"
            onChange={(e) => validarHoras(e.target.value)}
          />
          {errors.horas && <p className="text-red-500 text-xs mt-1">{errors.horas}</p>}
        </div>
      </form>
    </div>
  );
}
=======
const SolDiurno = () => {
  return (
    <div className='bg-white w-full'>
      <h1>Apartado Solicitud Dia - Diurno</h1>
    </div>
  )
}

export default SolDiurno
>>>>>>> ce2739d055df1f69b3dc11a719fd66e0c45fb4b6
