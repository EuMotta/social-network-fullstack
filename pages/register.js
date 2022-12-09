import Link from 'next/link'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import Layout from '../components/Layout'

function Login() {
    return (
            <section class="flex justify-center mb-5   md:h-screen">
                <div class="container py-12 px-6 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="xl:w-10/12">
                            <div class="block bg-white shadow-lg rounded-lg">
                                <div class="lg:flex lg:flex-wrap g-0">
                                    <div class="lg:w-6/12 px-4 md:px-0">
                                        <div class="md:p-12 md:mx-6">
                                            <div class="text-center">
                                                <span className='flex justify-center text-8xl text-red-500'>
                                                    <FaGraduationCap />
                                                </span>
                                                <h4 class="text-4xl font-semibold mt-1 mb-12 pb-1 ">FateCanos</h4>
                                            </div>
                                            <form>
                                                <p class="mb-4">Por favor, crie sua conta</p>
                                                <div className='flex gap-3'>
                                                    <div class="mb-4">
                                                        <input
                                                            type="text"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Nome"
                                                        />
                                                    </div>
                                                    <div class="mb-4">
                                                        <input
                                                            type="text"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Sobrenome"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                        type="email"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Email Fatec"
                                                    />
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                        type="email"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Confirmar Email"
                                                    />
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                        type="password"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Senha"
                                                    />
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                        type="password"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Confirmar Senha"
                                                    />
                                                </div>
                                                <div class="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        class="inline-block px-6 bg-red-500 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                    >
                                                        cadastrar
                                                    </button>
                                                </div>
                                                <div class="flex items-center justify-between pb-6">
                                                    <p class="mb-0 mr-2">Já tem uma conta?</p>
                                                    <Link
                                                        type="button"
                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        href='./login'
                                                    >
                                                        Entrar
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-red-500"
                                    >
                                        <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <form>
                                                <p class="mb-4">Preencha os dados em relação a seu curso</p>
                                                <div className='flex gap-3'>
                                                    <select
                                                        className="form-control h-10 block w-2/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                    >
                                                        <option className='block'>Curso</option>
                                                        <option >Analise e Desenvolvimento de Sistemas</option>
                                                        <option >Gestão Empresarial</option>
                                                    </select>
                                                    <div class="mb-4">
                                                        <select
                                                            className="form-control h-10 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                        >
                                                            <option className='di'>Fatec</option>
                                                            <option >Guaratinguetá</option>
                                                            <option >São José Dos Campos</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3'>
                                                    <select
                                                        className="form-control h-10 block w-2/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                    >
                                                        <option className='block'>Semestre Atual</option>
                                                        <option >1º Semestre</option>
                                                        <option >2º Semestre</option>
                                                        <option >3º Semestre</option>
                                                        <option >4º Semestre</option>
                                                        <option >5º Semestre</option>
                                                        <option >6º Semestre</option>
                                                    </select>
                                                    <div class="mb-4">
                                                        <select
                                                            className="form-control h-10 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                                        >
                                                            <option className='di'>Periodo</option>
                                                            <option >Tarde</option>
                                                            <option >Noite</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Login
