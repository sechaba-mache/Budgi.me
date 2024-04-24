export default function Tile() {

    return (
    <>
        <div className="shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] flex h-14 min-h-14 justify-between items-center rounded-[4px] px-4">
            <div className="flex gap-6" >
                <img src="./src/assets/icons/category-template.svg"/>
                <span className="text-xl">Category</span>
            </div>
            <div className="flex gap-6 text-center items-center">
                <div className="flex flex-col">
                    <span className="text-xs">R1400</span>
                    <span className="text-[8px] font-semibold">Spent out of</span>
                </div>

                <span className="text-xl">R2000</span>
            </div>
        </div>
    </>
    )
}