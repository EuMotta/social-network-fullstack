import Spline from '@splinetool/react-spline';
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout';
import PasswordInput from '../components/PasswordInput';
import { signIn } from "next-auth/react";
import { useForm } from 'react-hook-form';
import imgSvg from '../public/img/loginsvg.svg'
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()
    const submitHandler = ({ email, password }) => {
        console.log(email, password)
    }

    /*  Google Handler Function */
    async function handleGoogleSgnin() {
        signIn("google", { callbackUrl: 'http://localhost:3000' })
    }

    /* GitHub Handler Function */
    async function handleGithubSgnin() {
        signIn("github", { callbackUrl: 'http://localhost:3000' })
    }

    return (
        <Layout title='Entrar'>
            <section className="flex justify-center mb-5 md:h-screen">
                <div className="container py-12 px-6 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6">
                                            <div className="flex text-center mb-4">
                                                <span className='flex flex-col cursor-move items-center w-full h-40'>
                                                <Spline scene="https://prod.spline.design/Yw5e8WcHcXRRecGZ/scene.splinecode" />
                                                </span>
                                            </div>
                                            <h4 className="text-4xl flex flex-col items-center font-semibold mt-1 mb-12 pb-1 ">FateCanos</h4>
                                            <form onSubmit={handleSubmit(submitHandler)}>
                                                <div className='flex gap-x-4'>
                                                    Conecte-se com:
                                                    <ul className='flex gap-x-4'>
                                                        <li className='input-button'>
                                                            <button type='button' onClick={handleGoogleSgnin} className="text-4xl">
                                                                <FcGoogle />
                                                            </button>
                                                        </li>
                                                        <li className='input-button'>
                                                            <button type='button' onClick={handleGithubSgnin} className="text-4xl"><FaGithub /></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="mb-4">Por favor, entre com sua conta</p>
                                                <div className="mb-4">
                                                    <input
                                                        id='email'
                                                        autoFocus
                                                        type="email"
                                                        {...register("email", {
                                                            required: "Por favor, digite o seu e-mail.",
                                                            pattern: {
                                                                value:
                                                                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                                                message: "Por favor, digite um e-mail v??lido.",
                                                            },
                                                        })}
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        placeholder="E-mail"
                                                    ></input>
                                                    {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}
                                                </div>
                                                <PasswordInput
                                                    placeholder='Senha'
                                                    id="password"
                                                    type='password'
                                                    {...register("password", {
                                                        required: "Por favor, digite a sua senha."
                                                    })}
                                                />{errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}
                                                <div className="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        className="inline-block px-6 bg-red-500 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                    >
                                                        Login
                                                    </button>
                                                    <a className="text-gray-500 hover:text-blue-500" href="#!">Esqueceu sua senha?</a>
                                                </div>
                                                <div className="flex items-center pb-6">
                                                    <p className="mb-0 mr-2">N??o tem uma conta?</p>
                                                    <Link
                                                        type="button"
                                                        className="inline-block hover:text-blue-700 px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        href='./register'
                                                    >
                                                        Cadastre-se
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-red-500"
                                    >
                                        <div className="text-white px-4 text-center py-4 md:p-6 md:mx-6">
                                            <Image
                                                src={imgSvg}
                                                alt='logo'
                                                className='upDownAnimation'
                                            />
                                            <h4 className="text-2xl font-semibold mb-6">Sua rede social para estudar!</h4>
                                            <Typewriter
                                                options={{
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                                onInit={(typewriter) => {
                                                    typewriter.typeString('Conhe??a outros fatecanos, compartilhe seus projetos, ideias e ajude a nossa comunidade a continuar crescendo!')
                                                        .pauseFor(2500)
                                                        .deleteAll()
                                                        .start();
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login
