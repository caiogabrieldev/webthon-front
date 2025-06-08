import { Link } from "react-router-dom"
function Menu(){

    return(
        <>
            <div className="englobMenu">
                <div className="menu">
                    <Link className='linkMenu' to={'*'}>Início</Link>
                    <Link className='linkMenu' to={'*'}> O Que É</Link>
                    <Link className='linkMenu' to={'*'}>Impactos</Link>
                    <Link className='linkMenu' to={'*'}>Desafios Éticos</Link>
                    <Link className='linkMenu' to={'*'}>Futuro</Link>
                    <Link className='linkMenu' to={'*'}>Multimídia</Link>
                    <Link className='linkMenu' to={'*'}>Referências </Link>

                </div>
            </div>
        </>
    )
}
export default Menu