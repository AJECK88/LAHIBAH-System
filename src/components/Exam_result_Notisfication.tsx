import Image from "next/image";

const Notisfication = ( {type, state} : {type: string, state?: any}) => {
    return (
      <div className=" flex absolute bg-amber-100 h-50 w-70  items-center justify-center rounded-md p-2 flex-col gap-2">

    <label htmlFor="file" className="cursor-pointer text-sm font-semibold text-gray-500">
      Upload {type} data
    </label>

    <span className="text-xs text-gray-400">100%</span>

    <input type="range" min="0" max="100" defaultValue="10"/>

    {state?.success && (
      <p className="text-green-600 text-sm">
        File uploaded successfully!
      </p>
    )}

    {state?.error && (
      <p className="text-red-600 text-sm">
        Error uploading file: {state.error}
      </p>
    )}

  </div>
    )
}

export default Notisfication;