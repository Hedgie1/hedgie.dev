import { PT_Sans } from "next/font/google"
const pt = PT_Sans({ subsets: ['latin-ext'], weight: "400" })


export default function Project(props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-4 border-black rounded-2xl p-6 bg-base-300 shadow-xl">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">{props.title}</h1>
                    <h3 className="text-xl font-bold text-gray-400">{props.date}</h3>
                </div>
                <h2 className={`text-xl ${pt.className}`}>{props.description}</h2>
            </div>
            <div className="flex justify-center md:justify-end items-center w-full">
                <img src={props.photo} className="rounded-xl justify-center h-48" />
            </div>
        </div>
    )
}