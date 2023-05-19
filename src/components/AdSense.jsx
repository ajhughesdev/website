import { useEffect, useRef } from 'react'

const AdSense = ({ classNames = '', slot, timeout = 500, googleAdId, style, format }) => {
    const googleInit = useRef(null)

    useEffect(() => {
        googleInit.current = setTimeout(() => {
            if (typeof window !== 'undefined')
                (window.adsbygoogle = window.adsbygoogle || []).push({})
        }, timeout)

        return () => {
            if (googleInit.current) clearTimeout(googleInit.current)
        }
    }, [timeout])

    return (
        <div className={classNames}>
            <ins className="adsbygoogle"
                style={style || { display: 'block', margin: '1rem auto' }}
                data-ad-client={googleAdId}
                data-ad-slot={slot}
                data-ad-format={format || 'auto'}
                data-full-width-responsive='true'
            ></ins>
        </div>
    )
}

export default AdSense