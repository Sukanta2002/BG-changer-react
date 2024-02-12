import { useState } from "react"

function App() {

    const [color, setColor] = useState("olive")
    

    return(
        <>
        <div className="h-screen w-screen" style={{backgroundColor: color}}>
        <div className="flex  bottom-12 absolute left-1/2 px-12 py-4 bg-pink-300 border-4 border-pink-600 rounded-xl justify-between align-middle shadow-xl shadow-pink-900">
            <button className="bg-red-700 px-4 py-2 m-2 rounded-xl text-white shadow-xl shadow-red-900" onClick={() => {
                setColor("red")
            }}>red</button>
            <button className="bg-green-700 px-4 py-2 m-2 rounded-xl text-white shadow-xl shadow-green-900" onClick={() => {
                setColor("green")
            }}>green</button>
            <button className="bg-yellow-700 px-4 py-2 m-2 rounded-xl text-white shadow-xl shadow-yellow-900" onClick={() => {
                setColor("yellow")
            }}>yellow</button>
            <button className="bg-blue-700 px-4 py-2 m-2 rounded-xl text-white shadow-xl shadow-blue-900" onClick={() => {
                setColor("blue")
            }}>blue</button>
            <button className="bg-gray-700 px-4 py-2 m-2 rounded-xl text-white shadow-xl shadow-gray-900" onClick={() => {
                setColor("gray")
            }}>gray</button>
        </div>
        </div>
        </>
    )
}

export default App