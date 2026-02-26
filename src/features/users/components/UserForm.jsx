import Input from '@/shared/components/Input'
import Button from '@/shared/components/Button'
import Select from '@/shared/components/Select';
import '@/features/users/services/selectService'
import { useEffect, useState } from 'react';
import { getDocumentTypes } from '../services/selectService';


export default function UserForm(){

        const [documentTypes, setDocumentTypes] = useState([])

        useEffect(() => {
            getDocumentTypes().then(setDocumentTypes)
        },[]);


/*     const handleNameChange = (e) => {
        console.log('Nombre del usuario:', e.target.value)
    }; */


    const handleEmailBlur = (e) => {
        console.log('Email del usuario:', e.target.value)
    };

    /* Una validación basica */

    const handleNameChange = (e) => {
        console.log('Nombre del usuario:', e.target.value)
            if(e.target.value === ''){
                console.log('Este campo no puede estar vacio')
            }
    };

    const handleSubmit = (e) => {
        console.log('enviaste un archivo',e.target.value)
    }

    return (
        <div className="justify-items-center"> 
            {/* Formulario para crear el usuarioo*/}

    {/* Chequea de inmediato si se cumple o no un determinado proceso*/}
            <form>
                <Input
                label='Nombre'
                placeholder='Ingrese su nombre'
                onChange = {handleNameChange}
                />
                <Input
                label='Email'
                placeholder='Ingrese su Email'
                onChange = {handleEmailBlur}
                />

    {/*Cheque una vez se da clic por fuera si lo ingresado corresponde */}
                <Select
                label='Tipos de documento'
                options = {documentTypes}
                />

                {/* Actions */}
                <div className='flex gap-12 items-center justify-center py-10'>
                <Button
                    variant = 'secondary'
                    size = 'sm'
                    onClick={()=>
                        console.log('cancelar')
                    }>
                        cancelar
                    </Button>
                    

                <Button
                    variant = 'primary'
                    size = 'md'
                    type='submit'
                    onSubmit={handleSubmit}>
                        Guardar
                    </Button>

                </div>
            </form>
        </div>
    )
}