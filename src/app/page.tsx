'use client'


export default function Home() {
    const items = [
        {
            name: "blue",
            backgroundColor: "bg-blue-400"
        },
        {
            name: "red",
            backgroundColor: "bg-red-500"
        },
        {
            name: "yellow",
            backgroundColor: "bg-yellow-300"
        },
    ]

    const handleNavigate = (data: string) => {
        localStorage.setItem("color", JSON.stringify(data))
    }
    return (
        <section className="w-full max-w-7xl mx-auto my-10">
            <form className="w-full flex flex-col max-w-sm mx-auto border rounded gap-2 p-8">
                {
                    items.map((item, index) => <a
                        type="button"
                        onClick={() => handleNavigate(item.backgroundColor)}
                        className={`${item.backgroundColor} w-32 min-w-fit mx-auto rounded-md p-2 text-center`}
                        key={index}
                        href="/about"
                    >
                        {item.name}
                    </a>)
                }
            </form>
        </section>
    );
}
