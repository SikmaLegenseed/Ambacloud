import { useState } from 'react';
import '../../index.css';
import scp from '../scp.jpg'

function List () {
    // const items = [
    //     {
    //         id: 1,
    //         title: 'Boneka Ambalabu',
    //         desc: 'Boneka Ambalabu adalah boneka yang terbuat dari bahan alami dan ramah lingkungan.',
    //         image: 'https://via.placeholder.com/300',
    //     },
    // ];
    return (
        <div id='menu' className='container mx-auto p-10 mt-40'>
            <h1 className='text-4xl font-bold text-center'>Produk</h1>
            <div className='container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 p-10'>
                <div className='border rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
                    <img src={scp} alt="Boneka Ambalabu" className="w-40 h-40 object-cover mb-4" />
                    <h1 className="text-2xl font-bold">Boneka Ambalabu</h1>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae qui ratione quae quis. Assumenda porro illum repellat ea eos.</p>
                    <button className='bg-green-400 w-28 p-2 mt-3 text-slate-100 rounded-lg hover:bg-green-600 active:bg-green-700 transition'>Detail</button>
                </div>

                <div className='border rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
                    <img src="https://via.placeholder.com/300" alt="Boneka Ambalabu" className="w-40 h-40 object-cover mb-4" />
                    <h1 className="text-2xl font-bold">Boneka Ambalabu</h1>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae qui ratione quae quis. Assumenda porro illum repellat ea eos.</p>
                    <button className='bg-green-400 w-28 p-2 mt-3 text-slate-100 rounded-lg hover:bg-green-600 active:bg-green-700 transition'>Detail</button>
                </div>

                <div className='border rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
                    <img src={scp} alt="Boneka Ambalabu" className="w-40 h-40 object-cover mb-4" />
                    <h1 className="text-2xl font-bold">Boneka Ambalabu</h1>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae qui ratione quae quis. Assumenda porro illum repellat ea eos.</p>
                    <button className='bg-green-400 w-28 p-2 mt-3 text-slate-100 rounded-lg hover:bg-green-600 active:bg-green-700 transition'>Detail</button>
                </div>

                <div className='border rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
                    <img src="https://via.placeholder.com/300" alt="Boneka Ambalabu" className="w-40 h-40 object-cover mb-4" />
                    <h1 className="text-2xl font-bold">Boneka Ambalabu</h1>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae qui ratione quae quis. Assumenda porro illum repellat ea eos.</p>
                    <button className='bg-green-400 w-28 p-2 mt-3 text-slate-100 rounded-lg hover:bg-green-600 active:bg-green-700 transition'>Detail</button>
                </div>

                <div className='border rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
                    <img src={scp} alt="Boneka Ambalabu" className="w-40 h-40 object-cover mb-4" />
                    <h1 className="text-2xl font-bold">Boneka Ambalabu</h1>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae qui ratione quae quis. Assumenda porro illum repellat ea eos.</p>
                    <button className='bg-green-400 w-28 p-2 mt-3 text-slate-100 rounded-lg hover:bg-green-600 active:bg-green-700 transition'>Detail</button>
                </div>

                <div className='border rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
                    <img src="https://via.placeholder.com/300" alt="Boneka Ambalabu" className="w-40 h-40 object-cover mb-4" />
                    <h1 className="text-2xl font-bold">Boneka Ambalabu</h1>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae qui ratione quae quis. Assumenda porro illum repellat ea eos.</p>
                    <button className='bg-green-400 w-28 p-2 mt-3 text-slate-100 rounded-lg hover:bg-green-600 active:bg-green-700 transition'>Detail</button>
                </div>
            </div>
        </div>
    )
}

export default List;