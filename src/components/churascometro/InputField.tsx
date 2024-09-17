import { FieldError } from "react-hook-form"

interface InputFieldProps {
  id: string
  label: string
  placeholder: string
  error?: FieldError
  register: any
  setValue: (id: string, value: any) => void
  getValues: (id: string) => any
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  error,
  register,
  setValue,
  getValues,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full rounded border bg-none text-white border-red-500 px-4 py-2"
        {...register(id)}
        onBlur={() => setValue(id, getValues(id))}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  )
}

export default InputField
