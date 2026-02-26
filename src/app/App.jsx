import UserForm from '../features/users/components/UserForm';
import 'tailwindcss';
import DeleteCounter from '@/shared/components/DeleteCounter';
import DeleteUseEffect from '../shared/components/DeleteUseEffect';
import Select from '../shared/components/Select';
import ContenedorPunto from '../features/users/components/ContenedorPunto';


export default function App(){
  return (
    <div className="grid grid-cols-1 items-center gap-6 justify-center justify-items-center">
      <h1 className="bg-brand" /* className="text-3xl font-extrabold" */>
        ¡Hola mundo!
    Eventos Comunes en React

      </h1>
      <div>
{/*         <ContenedorPunto/> */}
       <UserForm/>
      </div>
       <DeleteCounter/>
       <DeleteUseEffect/>
    </div>
  )
}