import { useState } from "react";
import scp from "../scp.jpg";
import "../../index.css";

function Hero () {
    return (
        <div className="container mx-auto grid grid-cols-2 gap-4 mt-20">
            <div className="col-span-1">
                <img src={scp} alt="Boneka Ambalabu" className="w-[400px] h-[400px] object-cover mx-auto" />
            </div>
            <div className="col-span-1 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">Boneka Ambalabu</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae qui ratione quae quis. Assumenda porro illum repellat ea eos.</p>
            </div>
        </div>
    );
}

export default Hero;