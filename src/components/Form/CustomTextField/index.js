import { TextField } from '@mui/material';

function CustomTextField(props) {
    const { label, value, onChange, error } = props;

    return (
        <TextField
            label={label}
            variant="outlined"
            type="number"
            size="small"
            InputProps={{
                inputProps: {'min': 0}
            }}
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
        />
    );
}

export default CustomTextField;