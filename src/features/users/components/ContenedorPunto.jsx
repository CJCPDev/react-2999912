export default function ContenedorPunto(){


    return(
        <div className="grid grid-rows-6 place-content-center gap-6 w-full font-bold">
            <div className="grid justify-center">
                <h2 className="text-center font-extralight text-2xl pb-4">Eventos del Mouse</h2>
                    <div className="flex gap-10 text-center">
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20"
                           onClick={() => console.log("clic en div camilo josé carmona pinzón")}>
                                Haga clic aquí
                            </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">
                            <p onDoubleClick={() => alert("Doble clic! camilo josé carmona pinzón")}>
                                Doble clic sobre este texto
                            </p>
                        </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20"
                                onMouseEnter={() => console.log("mouse entró camilo josé carmona pinzón")}
                            >
                                Pase el Mouse
                        </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20" 
                                onMouseLeave={() => console.log("mouse salió camilo josé carmona pinzón")}
                            >
                                Salga de aquí
                        </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20"
                                onMouseMove={() => console.log("moviendo mouse camilo josé carmona pinzón")}                
                            >
                                Mueva el cursos aquí
                        </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20"
                                onContextMenu={() => alert("clic derecho detectado camilo josé carmona pinzón")}
                            >
                            Clic derecho aquí
                        </div>
                    </div>
            </div>
                    <div className="grid justify-center">
                        <h2 className="text-center font-extralight text-2xl pb-4">Eventos del Teclado</h2>
                            <div className="flex gap-10 text-center">
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">
                                        Cuando se presiona una tecla
                                    <input className="flex text-center place-content-center border border-brand w-10" 
                                        onKeyDown={() => console.log("tecla presionada camilo josé carmona pinzón")} />
                                </div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">
                                        Cuando se suelta una tecla
                                    <input onKeyUp={() => console.log("tecla liberada camilo josé carmona pinzón")} />
                                </div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">
                                        Presion de tecla imprimible
                                    <input onKeyPress={() => console.log("keypress camilo josé carmona pinzón")} /> 
                                    {/* Este evento ya esta obsoleto, para efecto del ejercicio se ingresa pero no se ejecuta en la consola */}
                                </div>
                            </div>
                    </div>
            <div className="grid justify-center">
                <h2 className="text-center font-extralight text-2xl pb-4">Eventos de formulario</h2>
                    <div className="flex gap-10 text-center">
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20 pl-3 grid grid-cols-1 items-centert text-center ">
                            Detecta cambios en inputs.
                            <input className="justify-around items-center border border-green-400 w-42 h-10 py-1" onChange={(e) => console.log(`${e.target.value} camilo jose carmona pinzon `)} />
                        </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20 pl-3 grid grid-cols-1 items-centert text-center ">
                            Cuando el campo recibe foco.
                            <input className="justify-around items-center border border-green-400 w-42 h-10 py-1" onFocus={() => console.log("input enfocado camilo jose carmona pinzon")} />
                        </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20 pl-3 grid grid-cols-1 items-centert text-center">
                            Cuando pierde el foco.
                            <input className="justify-around items-center border border-green-400 w-42 h-10 py-1 mt-6" onBlur={() => console.log("input desenfocado")} />
                        </div>
                        <div className="grid justify-center text-center bg-green-100 w-48 h-48 rounded-3xl py-20">
                            En formularios.
                            <form className="grid grid-cols-1 items-centert text-center w-full h-full pt-10" onSubmit={() => alert("Formulario enviado")}>
                              <button className="flex justify-around items-center bg-green-400 rounded-4xl py-1">Enviar</button>
                            </form>
                        </div>
                        <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">
                            Mientras se escribe.
                            <textarea className="w-42 mt-4 py-1 border border-green-400" onInput={() => console.log("escribiendo... camilo josé carmona pinzón")} />
                        </div>
                        <div className="grid justify-center text-center bg-green-100 w-48 h-48 rounded-3xl py-20">
                            Al resetear formulario.
                            <form className="grid grid-cols-1 items-centert text-center w-full h-full pt-10" onReset={() => console.log("form reset camilo jose carmona pinzon")}>
                               <button className="flex justify-around items-center bg-green-400 rounded-4xl py-1" type="reset">Limpiar</button>
                            </form>
                        </div>
                    </div>
            </div>
                    <div className="grid justify-center">
                        <h2 className="text-center font-extralight text-2xl pb-4">Eventos de seleccion</h2>
                            <div className="flex gap-10 text-center">
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20"
                                    >
                                    <h3>onSelect</h3>
                                    </div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">onCopy</div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">onPaste</div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">onCut</div>
                            </div>
                    </div>
                    <div className="grid justify-center">
                        <h2 className="text-center font-extralight text-2xl pb-4">Eventos de multimedia</h2>
                            <div className="flex gap-10 text-center">
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20"
                                    >
                                    <h3>onLoad</h3>
                                    </div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">onError</div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">onPlay</div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">onPause</div>
                            </div>
                    </div>
                    <div className="grid justify-center">
                        <h2 className="text-center font-extralight text-2xl pb-4">Eventos de Scroll y ventana</h2>
                            <div className="flex gap-10 text-center">
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20"
                                    >
                                    <h3>onScroll</h3>
                                    </div>
                                <div className="bg-green-100 w-48 h-48 rounded-3xl pt-20">onWheel</div>
                            </div>
                    </div>
        </div>
    )
}