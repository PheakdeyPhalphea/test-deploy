import React from 'react'
import { useState } from 'react'
import { MenuIcon } from './icon/menu'

export default function AdminNavbar() {
    const [isShowMenu, setMenu] = useState<Boolean>(false)

    return (
        <nav className=' flex justify-between'>
            <div className=' flex flex-row'>
                <img src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>

            </div>

        </nav>
    )
}
