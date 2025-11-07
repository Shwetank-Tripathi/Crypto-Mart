import { useEffect, useRef } from 'react'

function ScrollIndecator() {
    const scrollRef = useRef(null);
    useEffect(() => {
        addEventListener('scroll', () => {
            if (scrollRef.current) {
                scrollRef.current.style.height = (scrollY / (document.body.scrollHeight - innerHeight)) * 100 + '%';
            }
        })
    }, [])

    return (
        <div className='fixed z-10 right-0 top-1/2 h-[300px] w-[12px] md:w-[20px] translate-y-[-50%] opacity-70'>
            <div className="h-full bg-gray-200 rounded-full w-0.5 mb-4 dark:bg-gray-700">
                <div ref={scrollRef} className="bg-gray-600 w-0.5 rounded-full dark:bg-gray-300" ></div>
            </div>
        </div>
    )
}

export default ScrollIndecator
