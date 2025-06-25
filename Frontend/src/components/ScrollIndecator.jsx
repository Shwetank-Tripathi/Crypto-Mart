// Import React hooks for managing component state and side effects
import { useEffect, useRef } from 'react'

// ScrollIndicator component for displaying scroll progress
function ScrollIndecator() {
    // Ref to access the scroll progress bar element
    const scrollRef = useRef(null);
    // Effect to handle scroll events and update progress bar
    useEffect(() => {
        // Add scroll event listener to update progress bar height
        addEventListener('scroll', () => {
            // Calculate scroll percentage and update progress bar height
            if (scrollRef.current) {
                scrollRef.current.style.height = (scrollY / (document.body.scrollHeight - innerHeight)) * 100 + '%';
            }
        })
    }, [])

    // Return the JSX structure for the scroll indicator
    return (
        // Fixed positioned scroll indicator container
        <div className='fixed z-10 right-0 top-1/2 h-[300px] w-[12px] md:w-[20px] translate-y-[-50%] opacity-70'>
            {/* Background track for the progress bar */}
            <div className="h-full bg-gray-200 rounded-full w-0.5 mb-4 dark:bg-gray-700">
                {/* Progress bar that fills based on scroll position */}
                <div ref={scrollRef} className="bg-gray-600 w-0.5 rounded-full dark:bg-gray-300" ></div>
            </div>
        </div>
    )
}

export default ScrollIndecator