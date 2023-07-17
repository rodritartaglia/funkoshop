

function Login({onClose}) {
    return (
        <div className="flex absolute left-0 top-0 w-full h-full items-center justify-center">
            <b className="bg-[rgba(0,0,0,0.25)] absolute left-0 top-0 w-full h-screen" onClick={onClose}/>
            <div className="w-full max-w-md z-10 bg-white p-6 rounded-lg shadow">
                <div className="px-6 py-8 space-y-4 flex flex-col">
                    <h1 className="text-xl font-bold text-gray-900 m-auto">Ingresa a tu cuenta</h1>
                    <form className="space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900">Tu email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" placeholder="nombre@email.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" required="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500">Recuerdame</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" className="w-full bg-[#FF4848] font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white hover:bg-[#30343F] transitions-colors">Sign in</button>
                        <p className="text-sm font-light text-gray-500 flex justify-center gap-2">¿Todavia no tenes cuenta? <a href="#" className="font-medium text-[#FF4848]">Registrate</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login