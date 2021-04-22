import React from 'react'
import de from '../assets/flags/DE.png'
import cn from '../assets/flags/CN.png'
import es from '../assets/flags/ES.png'
import fr from '../assets/flags/FR.png'
import it from '../assets/flags/IT.png'
import pl from '../assets/flags/PL.png'
import pt from '../assets/flags/PT.png'
import ru from '../assets/flags/RU.png'
import se from '../assets/flags/SE.png'

export default function Languages({lang}) {

    const makeFlags = () => {

        let flags = []
        for (const key in lang) {

            if(key === 'chinese' && lang[key] === true) flags.push(cn)
            if(key === 'german' && lang[key] === true) flags.push(de)
            if(key === 'spanish' && lang[key] === true) flags.push(es)
            if(key === 'polish' && lang[key] === true) flags.push(pl)
            if(key === 'french' && lang[key] === true) flags.push(fr)
            if(key === 'swedish' && lang[key] === true) flags.push(se)
            if(key === 'italian' && lang[key] === true) flags.push(it)
            if(key === 'portuguese' && lang[key] === true) flags.push(pt)
            if(key === 'russian' && lang[key] === true) flags.push(ru)
            
        }
        return flags
    }
    const flags = makeFlags()
    return (
        flags.map((language, idx) => {
            return <img key={idx} src={language}/>
        })
    )
}
