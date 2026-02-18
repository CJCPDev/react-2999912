import Input from './../../../shared/components/Input'

export default function UserForm(){
    return (
        <div>
            {/* Formulario para crear el usuarioo*/}
            <form>
                <Input
                label='Nombre'
                placeholder='Ingrese su nombre'
                />
            </form>
        </div>
    )
}