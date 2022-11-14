import { Button, ButtonProps, Typography } from '@mui/material'
interface customButtonProps extends ButtonProps{
    text?: string;
    buttonVariant?: 'lotus' | 'white' | 'bordered' | 'primary' | 'secondary' ;
    onClick?: (e: any) => void;

}

const StyledButton = (props: customButtonProps) => {
    const { text, buttonVariant, onClick,className} = props

    return (
        <Button sx={{ textTransform: 'capitalize'}} 
        className={`${className} ${buttonVariant}`}
         onClick={onClick} {...props} >
            <Typography>{text}</Typography>
        </Button>
    )
}

export default StyledButton