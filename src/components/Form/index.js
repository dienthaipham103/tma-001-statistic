import { useForm } from 'react-hook-form';
import { Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomControl from './CustomControl';
import { useDispatch } from 'react-redux';
import { updateData } from '../Chart/chartSlice';
import './Form.css';

const fields = [
    {name: 'website', label: 'Website'},
    {name: 'app', label: 'App'},
    {name: 'linux', label: 'Linux'},
    {name: 'window', label: 'Window'},
]

function Form() {

    const dispatch = useDispatch();
    const { handleSubmit, control, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        Object.keys(data).forEach(k => {
            data[k] = parseInt(data[k])
        })
        const action = updateData(data);
        dispatch(action);
        reset();
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomControl 
                    name="month"
                    control={control}
                    defaultValue=""
                    label="Month"
                    type="select"
                />

                {fields.map(info => (
                    <CustomControl 
                        name={info.name}
                        control={control}
                        defaultValue=""
                        label={info.label}
                        type="text-field"
                    />
                ))}
                
                <div>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default Form;