import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaGraduationCap } from 'react-icons/fa'
import Layout from '../components/Layout';
import PasswordInput from '../components/PasswordInput';

function login() {
    const [email, setEmail] = useState();
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm()

    return (
        <Layout>
            <section title='' className="flex justify-center mb-5   md:h-screen">
                <div className="container py-12 px-6 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6">
                                            <div className="text-center">
                                                <span className='flex justify-center text-8xl text-red-500'>
                                                    <FaGraduationCap />
                                                </span>
                                                <h4 className="text-4xl font-semibold mt-1 mb-12 pb-1 ">FateCanos</h4>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <p className="mb-4">Por favor, entre com sua conta</p>
                                                <div className="mb-4">
                                                    <input
                                                        type="email"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        placeholder="Email"

                                                    />
                                                </div>
                                                <PasswordInput placeholder='Senha' name='password'/>
                                                <div className="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        className="inline-block px-6 bg-red-500 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                    >
                                                        Log in
                                                    </button>
                                                    <a className="text-gray-500" href="#!">Forgot password?</a>
                                                </div>
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2">Não tem uma conta?</p>
                                                    <Link
                                                        type="button"
                                                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
                                        <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <h4 className="text-2xl font-semibold mb-6">Sua rede social para estudar!</h4>
                                            <p className="text-lg">
                                                Conheça outros fatecanos, compartilhe seus projetos, ideias e ajude a crescer essa comunidade de tecnologia!
                                            </p>
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

export default login
