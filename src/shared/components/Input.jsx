// Creacion de componente input

export default function Input({label, type = "text", ...props}){
    return (
      <div className="w-[320px]">
        {/*Label */}
        {label && (
          <label
            className="
                    block
                    text-[8px]
                    mb-1
                    text-gray-600               
                "
          >
            {label}
          </label>
        )}
        {/* EL contenedor del input */}

        <div
            className="
            relative
            h-12
            flex
            items-center
            "
        >
          {/* Area interactiva visible (48px)*/}

          <div
                className="
                absolute
                inset-0
                "
                onMouseDown = {(e) => {
                    e.preventDefault();
                    e.currentTarget.nextSibling.focus();
                    }}  
          />

          <input
            type={type}
            className="
                    w-full
                    h-8
                    relative
                    rounded-md
                    border
                    border-gray-300
                    px-4
                    text-base
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500
                    focus:outline-none   
                    "
            {...props}
          />
        </div>
      </div>
    );
}

