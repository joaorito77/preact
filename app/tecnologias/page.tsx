import tecnologias from '@/app/data/tecnologias.json';
import Image from 'next/image';

export default function page() {
  return (
    <>
        <h2 className='items-center flex-col text-center'>Tecnologias Exploradas</h2>
        <ul>
            {tecnologias.map((tecnologia,i) => {
                return (
                    <article
                     key={i}
                     className='bg-white text-gray-800 rounded-3xl p-4 m-6 flex flex-col items-center text-center'
                     >
                            <strong>{tecnologia.title}</strong>
                            <p>{tecnologia.description}</p>
                            <p>Rating: {tecnologia.rating}/5</p>
                        <Image 
                            src={"/tecnologias/" + tecnologia.image}
                            alt={tecnologia.title}
                            width={80}
                            height={80}
                            
                        />
                    </article>
                )
            })}
        </ul>

    </>
  )
}
