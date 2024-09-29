import './User.css'

import {useState} from 'react'
import { useForm } from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const tellValidacao = /^\(\d{2}\) \d{5}-\d{4}$|^\d{11}$/;

const schema = yup.object().shape({
    nome_user: yup.string().required('Nome é obrigatório').min(3,'Deve ter no mínimo 3 caracteres'),
    contato_user: yup.string('Digite um número válido').required('Campo obrigatório').matches(tellValidacao,'Formato inválido de número'),
    cidade_user: yup.string().required("Cidade é obrigatória"),
    estado_user: yup.string().required("Estado é obrigatório"),

})



const User =()=>{

  const [mensagemDeSucesso, setMensagem] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({resolver:yupResolver(schema)})


  
   

    return (
      <div className="layout-geral-user">
        <div className="header-form-user">
    
        </div>
        <form >
          <input
            type="text"
            placeholder="NOME"
            {...register('nome_user')}
            className="inputs"
          />
          {errors.nome_user && <span className='error'>{errors.nome_user.message}</span>}
          <input
            type="text"
            {...register('contato_user')}
            placeholder="CONTATO"
            className="inputs"
          />
          {errors.contato_user && <span className='error'>{errors.contato_user.message}</span>}
          <input
            type="text"
            {...register('cidade_user')}
            placeholder="CIDADE"
            className="inputs"
          />
          {errors.cidade_user && <span className='error'>{errors.cidade_user.message}</span>}
          <input
            type="text"
            {...register('estado_user')}
            placeholder="ESTADO"
            className="inputs"
          />
          {errors.estado_user && <span className='error'>{errors.estado_user.message}</span>}
          <button type='submit' className="botao">Cadastrar</button>
          {mensagemDeSucesso && <p className='mensagemSucesso'>{mensagemDeSucesso}</p>}
        </form>
        <div className="footer-form-user">
  
        </div>
      </div>
    );
}

export default User;