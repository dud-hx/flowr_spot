import { Button, ButtonProps, Typography } from '@mui/material'
interface customButtonProps extends ButtonProps{
    text?: string;
    buttonVariant?: 'lotus' | 'white' | 'bordered' | 'primary' | 'secondary' ;
    onClick?: () => void;

}

const StyledButton = (props: customButtonProps) => {
    const { text, buttonVariant, onClick} = props

    return (
        <Button   onClick={onClick} {...props} >
            <Typography>{text}</Typography>
        </Button>
    )
}

export default StyledButton