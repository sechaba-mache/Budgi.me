export default function Card() {

    return (
    <>
        <div className="w-32 h-36 p-3 bg-white rounded-xl flex flex-col justify-between shadow-md">
            <div className="flex gap-3 flex-nowrap">
                <img src="./src/assets/icons/circle-plus-solid.svg"></img>
                <span>Category</span>
            </div>

            <div className="flex flex-col">
                <span className="text-green-500">21%</span>
                <h1 className="m-0">R 1765.65</h1>
                <h2 className="m-0">out of R2000</h2>
            </div>
        </div>
    </>
    )
}