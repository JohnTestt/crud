import {
    InputField,
    InputContainer,
    IconContainer,

} from './style/style';

export const FormInput = ({ placeholder, type, id, name, value, onChange, icon: Icon }) => {


    return (
        <>
            <InputContainer>
                <IconContainer>
                    <Icon fontSize="inherit" />
                </IconContainer>
                <InputField
                    placeholder={placeholder}
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
            </InputContainer>
        </>
    )
}