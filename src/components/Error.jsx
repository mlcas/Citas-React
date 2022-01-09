
const error = ({children}) => { // Otra alternativa a los props son los children, que pueden recibir contenido html. 
    return (
        <div className='bg-red-800 text-white text-center p-3 uppercase 
        font-bold mb-3 rounded-md'>
            {children}
       </div>
    )
}

export default error
