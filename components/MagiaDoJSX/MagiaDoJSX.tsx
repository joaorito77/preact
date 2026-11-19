export default function MagiaDoJSX () {

    const magia = <strong>HTML Dentro de Javascript!</strong>
    const tecnologias = "React e Next.js"

    return (
        <div className='bg-blue-400 p-3 m-3 rounded-3xl'>

            <p>Este é o meu componente MagiaDoJSX. {magia}</p>
            <p>Um componente é uma função que retorna JSX.</p>
            <p>Os componentes são usados em {tecnologias} </p>
            
        </div>
    )
}