import { Lilita_One } from "next/font/google"
import { PT_Sans } from "next/font/google"

const lilita = Lilita_One({ subsets: ['latin-ext'], weight: "400" })

export default function Skill(props) {
    let level = ""
    if (props.level == "beginner") level = <div className="px-6 bg-black rounded-lg p-1 text-center font-bold uppercase text-white">Beginner</div>
    if (props.level == "intermediate") level = <div className="px-6 bg-black rounded-lg p-1 text-center font-bold uppercase text-white">Intermediate</div>
    if (props.level == "advanced") level = <div className="px-6 bg-black rounded-lg p-1 text-center font-bold uppercase text-white">Advanced</div>
    if (props.level == "expert") level = <div className="px-6 bg-black rounded-lg p-1 text-center font-bold uppercase text-white">Expert</div>


    if (props.color == "blue") {
        return (
            <details tabIndex={0} className="flex flex-col items-center gap-5 bg-blue-700 open:bg-blue-600 rounded-2xl p-6 border-l-8 border-l-blue-900 border-t-8 border-t-blue-900">
                <summary className={`text-3xl 2xl:text-4xl text-white font-black uppercase tracking-wider text-center cursor-pointer ${lilita.className}`}>{props.title}</summary>
                <div className="flex-col items-center">
                    <div className="flex w-full justify-center items-center pb-5">
                        {level}
                    </div>

                    <p className="text-xl text-white">{props.description}</p>

                </div>
            </details>
        )
    }

    if (props.color == "purple") {
        return (
            <details tabIndex={0} className="flex flex-col items-center gap-5 bg-purple-700 open:bg-purple-600 rounded-2xl p-6 border-l-8 border-l-purple-900 border-t-8 border-t-purple-900">
                <summary className={`text-3xl 2xl:text-4xl text-white font-black uppercase tracking-wider text-center cursor-pointer ${lilita.className}`}>{props.title}</summary>
                <div className="flex-col items-center">
                    <div className="flex w-full justify-center items-center pb-5">
                        {level}
                    </div>

                    <p className="text-xl text-white">{props.description}</p>

                </div>
            </details>
        )
    }

    if (props.color == "green") {
        return (
            <details tabIndex={0} className="flex flex-col items-center gap-5 bg-green-700 open:bg-green-600 rounded-2xl p-6 border-l-8 border-l-green-900 border-t-8 border-t-green-900">
                <summary className={`text-3xl 2xl:text-4xl text-white font-black uppercase tracking-wider text-center cursor-pointer ${lilita.className}`}>{props.title}</summary>
                <div className="flex-col items-center">
                    <div className="flex w-full justify-center items-center pb-5">
                        {level}
                    </div>

                    <p className="text-xl text-white">{props.description}</p>

                </div>
            </details>
        )
    }

    if (props.color == "yellow") {
        return (
            <details tabIndex={0} className="flex flex-col items-center gap-5 bg-yellow-700 open:bg-yellow-600 rounded-2xl p-6 border-l-8 border-l-yellow-900 border-t-8 border-t-yellow-900">
                <summary className={`text-3xl 2xl:text-4xl text-white font-black uppercase tracking-wider text-center cursor-pointer ${lilita.className}`}>{props.title}</summary>
                <div className="flex-col items-center">
                    <div className="flex w-full justify-center items-center pb-5">
                        {level}
                    </div>

                    <p className="text-xl text-white">{props.description}</p>

                </div>
            </details>
        )
    }

    if (props.color == "red") {
        return (
            <details tabIndex={0} className="flex flex-col items-center gap-5 bg-red-700 open:bg-red-600 rounded-2xl p-6 border-l-8 border-l-red-900 border-t-8 border-t-red-900">
                <summary className={`text-3xl 2xl:text-4xl text-white font-black uppercase tracking-wider text-center cursor-pointer ${lilita.className}`}>{props.title}</summary>
                <div className="flex-col items-center">
                    <div className="flex w-full justify-center items-center pb-5">
                        {level}
                    </div>

                    <p className="text-xl text-white">{props.description}</p>

                </div>
            </details>
        )
    }
}

