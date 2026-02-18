import UserForm from '../features/users/components/UserForm';
import 'tailwindcss';
import '../styles/global.css';

export default function App(){
  return (
    <div className="grid grid-cols-1 items-center gap-6 justify-center justify-items-center">
      <h1 className="bg-brand">
        ¡Hola mundo!
      </h1>
      <div>
       <UserForm/>
      </div>
    </div>
  )
}