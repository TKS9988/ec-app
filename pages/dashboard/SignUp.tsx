import React,{useState,useCallback} from 'react';
import {TextInput} from '../../components/Uikit';
import { signUp } from '../api';
import Link from 'next/link'
import pcImage from '../asset/geolocationPcDisplay.png';
import spImage from '../asset/geolocationSpDisplay.png';
import Style from './SignUp.module.scss';

const SignUp = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputName = useCallback((event) => { setName(event.target.value) }, [setName]);
  const inputEmail = useCallback((event) => { setEmail(event.target.value) }, [setEmail]);
  const inputPassword = useCallback((event) => { setPassword(event.target.value) }, [setPassword]); 
  const inputConfirmPassword = useCallback((event) => {setConfirmPassword(event.target.value)}, [setConfirmPassword]);

  return (
    <>
    <section className={Style.ovf}>
      <div className={Style.left}>
      {/* <div className={Style.displayBx}>
          <div className={Style.pcDisplay}>
            <div className={Style.inner}>
              <img src={pcImage} alt="pc" />
            </div>
          </div>
          <div className={Style.spDisplay}>
            <div className={Style.inner}>
              <img src={spImage} alt="sp" />
            </div>
          </div>
          </div> */}
      </div>
      <div className={Style.right}>
        <div className={Style.sinup_bx}>
          <h2>Sign&nbsp;up</h2>
          <TextInput className={'inputBx'} label={'Full Name（フルネーム）'} type={"text"} InputLabelProps={{ shrink: true, }} variant={"standard"} value={name} onChange={inputName}/>
          <TextInput className={'inputBx'} label={'Email（メールアドレス）'} type={"email"} InputLabelProps={{ shrink: true, }} variant={"standard"} value={email} onChange={inputEmail}/>
          <TextInput className={'inputBx'} label={'Password（パスワード）'} type={"text"} InputLabelProps={{ shrink: true, }} variant={"standard"} value={password} onChange={inputPassword} />
          <TextInput className={'inputBx'} label={'confirmPassword（確認用パスワード）'} type={"text"} InputLabelProps={{ shrink: true, }} variant={"standard"} value={confirmPassword} onChange={inputConfirmPassword} />
          <div className={Style.editBtn} onClick={signUp(name, email, password, confirmPassword)}>決定</div>
          <div className={Style.toSignUp_SignIn}><Link href="/signin"><a><span className="material-icons-outlined">login</span><p>アカウントをお持ちの方</p></a></Link></div>
        </div>
      </div>
      </section>
      </>
   )
  }
  export default SignUp;