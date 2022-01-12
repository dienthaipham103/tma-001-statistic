import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import './CustomControl.css';

const CustomControl = (props) => {
    const {name, control, defaultValue, label, limitProps} = props;
    return (
        <div className="controller">
            <Controller 
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label={label}
                        variant="outlined"
                        type="number"
                        size="small"
                        InputProps={limitProps && {
                            inputProps: limitProps
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{required: 'This field is required'}}
            />
        </div>
    )
}

export default CustomControl;