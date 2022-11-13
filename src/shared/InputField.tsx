import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'

interface inputFieldProps {
  label: string;
  type: 'text' | 'password' | 'date';
  value: string;
  handleChange: () => void;
  fullWidth?: boolean
  width?: string;
}
const InputField = (props: inputFieldProps) => {
  const { label, type, value, fullWidth, handleChange, width } = props
  return (
    <FormControl fullWidth={fullWidth} sx={{ m: 1, width: width }} variant="filled">
      <InputLabel htmlFor={`{'filled-adornment-'${label}}`}>{label}</InputLabel>
      <FilledInput
        id={`{'filled-adornment-'${label}}`}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  )
}

export default InputField