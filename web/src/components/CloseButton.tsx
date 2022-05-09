import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"


export  function CloseButton(){
    return (
        <Popover.Button className="top-5 right-2 absolute text-zinc-400 hover:text-zin" title="Fechar formulário do feedback">
            <X weight="bold" className="w-4 h-4"/>
        </Popover.Button>
    )
}