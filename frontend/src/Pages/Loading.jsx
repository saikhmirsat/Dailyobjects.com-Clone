import React, { useState } from 'react'


export default function Loading() {
    const [loading, setLoading] = useState(true)

    const [payment, setPayment] = useState(false)

    // setTimeout(setLoading(false), 1000)
    setTimeout(() => {
        setLoading(false)
    }, "2000")



    if (loading) {
        return (
            <div>
                <img style={{ width: '100%' }} src="https://thumbs.gfycat.com/AcclaimedPositiveGull-size_restricted.gif" alt="" />
            </div>
        )
    } else {
        return (
            <div>
                <img style={{ width: '50%', margin: 'auto' }} src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="" />
            </div>
        )
    }
}
