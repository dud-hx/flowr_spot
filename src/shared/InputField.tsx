import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'

interface IInputFieldProps {
  label: string;
  type: 'text' | 'password' | 'date';
  value: string;
  handleChange: (e: Event  |  any) => void;
  fullWidth?: boolean
  width?: string;
  id?: any
}
const InputField: React.FC<IInputFieldProps> = (props) => {
  const { label, type, value, fullWidth, handleChange, width, id } = props
  return (
    <FormControl fullWidth={fullWidth} sx={{ m: 1, width: width }} variant="filled">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <FilledInput
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  )
}

export default InputField