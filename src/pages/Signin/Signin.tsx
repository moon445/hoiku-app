import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from "react-router-dom";
import { Users } from '../../generated';
import './Signin.css';
import { userApi } from '../../utils/api'
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';




//型宣言
type Inputs = {
  username: string;
  password: string;
}

export default function Signin() {

  // user情報
  const getusers = async () => {
    const users: Users[] = await userApi.users.findAllUser()
    console.log(users);
  };

  useEffect(() => {
    getusers();
  }, []);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  //ログインボタンを押した際の処理
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    loginProcess(data.username, data.password);
    reset();
  };

  //ログイン情報を保持
  const dispatch = useDispatch();
  // ログイン処理
  const loginProcess = async (mail: string, password: string) => {
    try {

      // ログインAPI実行
      const response = await userApi.users.login(mail, password)

      //ログイン情報をdispatc
      dispatch(
        login({
          id: response.id!,
          name: response.userName!,
          mail: response.mail!,
        })
      );

      console.log('ログイン成功！');
      loginSuccess();
    } catch (error) {
      console.error(error);
      loginErrorMsg();
    }
  };

  //ログインに成功した場合、次のページへ遷移
  const loginSuccess = () => {
    navigate("/Notice");
  }

  //errorMsg という名前のstate関数を宣言、初期値 null をセット
  const [errorMsg, setErrorMsg] = useState("")

  //ログインに失敗した場合のエラーメッセージをセット
  const loginErrorMsg = () => {
    //setErrorMsg()でerrorMsgの値を更新
    setErrorMsg("ユーザーIDもしくはパスワードが間違っています。");
  }

  //入力内容をクリア
  const clearForm = () => {
    reset();
  }


  return (
    <div className="formContainer">

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ログイン</h1>
        <hr />
        <div className='uiForm'>
          <p className="errorMsg">{errorMsg}</p>
          <div className='formField'>
            <label htmlFor="mail">メールアドレス</label>
            <input
              id="mail"
              type="text"
              placeholder='メールアドレス'
              {...register('username', {
                required: 'メールアドレスを入力してください。',
                maxLength: {
                  value: 320,
                  message: '320文字以内で入力してください。'
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
          </div>
          <ErrorMessage errors={errors} name="username" render={({ message }) => <span className="errorMsg" >{message}</span>} />
          <div className='formField'>
            <label htmlFor="password">パスワード</label>
            <input
              id="password"
              type="password"
              placeholder='password'
              role='password'
              {...register('password', {
                required: 'パスワードを入力してください。',
                maxLength: {
                  value: 20,
                  message: '20文字以内で入力してください',
                },
                pattern: {
                  value:
                    /^[A-Za-z0-9]+$/i,
                  message: 'パスワードの形式が不正です。',
                },
              })}
            />
          </div>
          <ErrorMessage errors={errors} name="password" render={({ message }) => <span className="errorMsg">{message}</span>} />
          <div className="loginButton">
            <button
              type="submit"
              className="submitButton"
            >ログイン
            </button>
            <button
              type="button"
              className="clearButton"
              onClick={clearForm}
            >クリア
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}