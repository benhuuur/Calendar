import style from './Login.module.css'
import { Input } from './components/Input'

function Login() {

    return (
      <>
      <section className="center">
        <div className={style["window"]}>
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />
        </div>
      </section>
      </>
    )
  }
  
  export default Login