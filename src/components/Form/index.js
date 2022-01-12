import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import CustomControl from './CustomControl';
import { useDispatch } from 'react-redux';
import { updateData } from '../Chart/chartSlice';
import './Form.css';

const fields = [
    {name: 'website', label: 'Website', condition: {'min': 0}},
    {name: 'app', label: 'App', condition: {'min': 0}},
    {name: 'linux', label: 'Linux', condition: {'min': 0}},
    {name: 'window', label: 'Window', condition: {'min': 0}},
    {name: 'month', label: 'Month', condition: {'max': 12, 'min': 1}}
]

function Form() {

    const dispatch = useDispatch();
    const { handleSubmit, control, reset } = useForm();
    const onSubmit = (data) => {
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
                {fields.map(info => (
                    <CustomControl 
                        name={info.name}
                        control={control}
                        defaultValue=""
                        label={info.label}
                        limitProps={info.condition}
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