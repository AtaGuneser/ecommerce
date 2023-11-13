'use client'

const Category = () => {

    const categoryList = [
        {
            name: 'shoes'
        },
        {
            name: 'shoes'
        },
        {
            name: 'shoes'
        },
        {
            name: 'shoes'
        },
        {
            name: 'shoes'
        },
        {
            name: 'shoes'
        },

    ]

    return (
        <div className="flex px-3 md:px-10 items-center justify-center gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
            {
                categoryList.map((category, index) => (
                    <div className="border text-slate-500 rounded-full min-w-[120px] justify-center items-center flex flex-1 px-4 py-2 text-center cursor-pointer" key={index}>{category.name}</div>
                ))
            }
        </div>
    )
}

export default Category