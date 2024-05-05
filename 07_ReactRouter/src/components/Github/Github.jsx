import React from 'react'

export function Github(props) {
    
    const [data,setData]= React.useState([])

    return (
        <>
            <div className='text-center m-20 container h-screen bg-yellow-600 w-screen rounded-2xl'>
            <a href="https://github.com/Aashish-Lam" className='text-3xl text-center'>Go to github</a>
        </div>
        </>
    )
}
