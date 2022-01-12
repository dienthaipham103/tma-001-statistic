import { Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

const options = [
    {value: 1, label: 'January'},
    {value: 2, label: 'February'},
    {value: 3, label: 'March'},
    {value: 4, label: 'April'},
    {value: 5, label: 'May'},
    {value: 6, label: 'June'},
    {value: 7, label: 'July'},
    {value: 8, label: 'August'},
    {value: 9, label: 'September'},
    {value: 10, label: 'October'},
    {value: 11, label: 'November'},
    {value: 12, label: 'December'},
]

function CustomSelect(props) {
    const { label, value, onChange, error } = props;

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="month-select-label" size="small">{label}</InputLabel>
            <Select
                labelId="month-select-label"
                id="month-select"
                label={label}
                size="small"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
            >
                {options.map(option => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CustomSelect;