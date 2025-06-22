import { Link } from "react-router-dom"
function Menu(){

    return(
        <>
            <div className="englobMenu">
                <div className="menu">
                    <Link className='linkMenu' to={'/'}>Início</Link>
                    <Link className='linkMenu' to={'/o-que-e'}> O Que É</Link>
                    <Link className='linkMenu' to={'/impactos'}>Impactos</Link>
                    <Link className='linkMenu' to={'/perigos'}>Perigos</Link>
                    <Link className='linkMenu' to={'/feedback'}>Receba um feedback</Link>
                 
                   

                </div>
            </div>
        </>
    )
}
export default Menu