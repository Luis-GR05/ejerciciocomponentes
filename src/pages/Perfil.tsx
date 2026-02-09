import { useState } from 'react';
import FormInput from '../componentes/componentesForm/formInput';
import BotonGuardar from '../componentes/componentesForm/botonGuardar';
import BotonCancelar from '../componentes/componentesForm/botonCancelar';

export default function MiPerfil() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validarNombre = (val: string) => {
    if (val && val[0] !== val[0].toUpperCase()) {
      setErrors(p => ({ ...p, nombre: "La primera letra debe ser Mayúscula" }));
    } else {
      setErrors(p => ({ ...p, nombre: "" }));
    }
  };

  const validarApellidos = (val: string) => {
    const partes = val.trim().split(/\s+/);
    const estanCapitalizados = partes.every(p => p[0] === p[0]?.toUpperCase());
    
    if (partes.length !== 2 || !estanCapitalizados) {
      setErrors(p => ({ ...p, apellidos: "Introduce 2 apellidos empezando por Mayúscula" }));
    } else {
      setErrors(p => ({ ...p, apellidos: "" }));
    }
  };

  const validarDNI = (val: string) => {
    const regexDNI = /^\d{8}[A-Z]$/;
    if (!regexDNI.test(val)) {
      setErrors(p => ({ ...p, dni: "Formato inválido (ej: 12345678X)" }));
    } else {
      setErrors(p => ({ ...p, dni: "" }));
    }
  };

  const validarAnios = (val: string) => {
    const num = Number(val);
    if (isNaN(num) || num <= 0 || num >= 50) {
      setErrors(p => ({ ...p, anios: "Debe ser un número entre 1 y 49" }));
    } else {
      setErrors(p => ({ ...p, anios: "" }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-8 border-b pb-4">Mi Perfil</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
        
        <div>
          <FormInput label="Nombre" onChange={(e) => validarNombre(e.target.value)} />
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
        </div>

        <div>
          <FormInput label="Apellidos" onChange={(e) => validarApellidos(e.target.value)} />
          {errors.apellidos && <p className="text-red-500 text-xs mt-1">{errors.apellidos}</p>}
        </div>

        <FormInput label="Correo electrónico" type="email" placeholder="usuario@dominio.com" required />

        <div>
          <FormInput label="DNI" placeholder="12345678X" onChange={(e) => validarDNI(e.target.value)} />
          {errors.dni && <p className="text-red-500 text-xs mt-1">{errors.dni}</p>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Relación jurídica</label>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="otro">Otro</option>
            <option value="indefinido">Indefinido</option>
            <option value="temporal">Temporal</option>
          </select>
        </div>

        <div>
          <FormInput label="Años de servicio" type="number" onChange={(e) => validarAnios(e.target.value)} />
          {errors.anios && <p className="text-red-500 text-xs mt-1">{errors.anios}</p>}
        </div>

        <div className="md:col-span-2 p-4 bg-gray-50 rounded-lg">
           <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-blue-600" />
            Hace Sustitución
          </label>
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 mt-6 pt-6 border-t">
          <BotonCancelar />
          <BotonGuardar />
        </div>
      </form>
    </div>
  );
}