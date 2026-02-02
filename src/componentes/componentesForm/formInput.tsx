interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormInput({ label, ...props }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
