'use client'

import { Cog6ToothIcon, LockClosedIcon, Squares2X2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

interface Item {
    name: string,
    Icon: JSX.Element;
    link: string,
}
const items: Item[] = [
    {
        name: "dashboard",
        Icon: <Squares2X2Icon className="w-5 aspect-square stroke-black" />,
        link: "/"
    },
    {
        name: "settings",
        Icon: <Cog6ToothIcon className="w-5 aspect-square stroke-black" />,
        link: "/"
    }
]

export default function About() {

    const [data, setData] = useState("")
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const storedColor = localStorage.getItem("color");
        const color: string = storedColor ? JSON.parse(storedColor) : "bg-blue-700";

        setData(color)
    }, [])

    return (
        <>
            <header className={`${data} w-full p-2 h-fit`}>
                <button
                    onClick={toggleCollapsed}
                    className="bg-white rounded-xl w-10 aspect-square p-2"
                >
                    <Bars4Icon className="w-full aspect-square fill-black" />
                </button>
            </header>
            {collapsed && <div
                onClick={toggleCollapsed}
                className="w-screen h-screen fixed top-0 start-0 bg-gray-400 opacity-[0.5] z-40">
            </div>
            }
            <nav className={`w-11/12 max-w-72 fixed overflow-y-auto bg-teal-50 top-0 start-0 h-full z-50 transition duration-300 divide-y-[.5px] divide-gray-400 divide-opacity-2 ${collapsed ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="bg-teal-950 p-2">
                    <span
                        onClick={toggleCollapsed}
                        className="cursor-pointer w-10 aspect-square p-1 bg-white rounded-full block">
                        <XMarkIcon className="w-full aspect-square stroke-red-700" />
                    </span>
                </div>
                <ul className="flex flex-col gap-4 py-4">
                    {
                        items.map((item, index) => <li className="flex gap-2" key={index}>
                            {item.Icon}
                            <a
                                href={item.link}
                                aria-label={item.name}
                            >
                                {item.name}
                            </a>
                        </li>)
                    }
                </ul>
            </nav>
        </>
    )
}

