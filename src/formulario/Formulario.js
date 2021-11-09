import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Formulario() {
    const formik= useFormik({
        initialValues:{
            name:"",
            email:"",
            contraseña:""
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            email: Yup.string().email('Debe ser un email valido').required('El email es obligatorio'),
            contraseña: Yup.string().required('Escriba su contraseña')

        }),


        onSubmit: (formData) => {
            console.log(formData);
        }
    });
  return(
    <>



      <Form onSubmit={formik.handleSubmit}>
          <TitleForm>Iniciar Sesion</TitleForm>
          <ContainerForm>
          <ContainerInput>
          <Label htmlFor={'name'}>Nombre:</Label>
          <Input type={'text'}  name={'name'} id={'name'} onChange={formik.handleChange} error={formik.errors.name}/>
              <ErrorMsje>{formik.errors.name}</ErrorMsje>

          </ContainerInput>

          <ContainerInput>
          <Label htmlFor={'email'}>Email:</Label>
          <Input type={'email'}  name={'email'} id={'email'} onChange={formik.handleChange}/>
          <ErrorMsje>{formik.errors.email}</ErrorMsje>
          </ContainerInput>

          <ContainerInput>
          <Label htmlFor={'contraseña'}>Contraseña:</Label>
          <Input type={'password'} name={'contraseña'} id={'contraseña'} onChange={formik.handleChange}/>
              <ErrorMsje>{formik.errors.contraseña}</ErrorMsje>
          </ContainerInput>
      </ContainerForm>
          <Button type={'submit'}>Enviar</Button>
      </Form>



</>
  )
}

export default Formulario;

const Label= styled.label`
    text-align: left;
    font-size: 16px;

`
const ContainerForm= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    
  

`
const ErrorMsje= styled.p`
    font-size: 14px;
    color: red;
    margin-right: 25px;

`


const Form= styled.form`
    background-color: #fff;
    padding: 40px 0;
    box-shadow: 0 0 6px 0 rgba(255,255,255, 0.8);
    border-radius: 10px;
    width: 260px;
    
    

  

`

const Input= styled.input`
  width: 96%;
  outline: none;  
  padding: 10px 10px 10px 5px;  
  font-size: 14px; 
  color: #000;  
  border: none;  
  border-bottom: 1px solid gray;  

`
const ContainerInput= styled.div`
  display: flex;
  margin-top: 12px;  
  flex-direction: column;  
  padding: 12px;  
`

const TitleForm= styled.h2`
text-align: center;

`

const Button= styled.button`
    margin-top: 10px;
    cursor: pointer;
    background: -webkit-linear-gradient(to right, #64b3f4, #c2e59c);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #64b3f4, #c2e59c); 
    color: #fff;
    border: none;
    padding: 8px; 
    width: 76%;
    outline: none;
`

