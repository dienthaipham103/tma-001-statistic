import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import './CustomControl.css';
import CustomTextField from '../CustomTextField';
import CustomSelect from '../CustomSelect';

const CustomControl = (props) => {
    const {name, control, defaultValue, label, type } = props;
    return (
        <div className="controller">
            <Controller 
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        {
                            type === "text-field" ?
                            <CustomTextField
                                label={label}
                                value={value}
                                onChange={onChange}
                                error={error}
                            />
                            :
                            <CustomSelect
                                label={label}
                                value={value}
                                onChange={onChange}
                                error={error}
                            />
                        }
                    </>
                    
                    
                )}
                rules={{required: 'This field is required'}}
            />
        </div>
    )
}

export default CustomControl;