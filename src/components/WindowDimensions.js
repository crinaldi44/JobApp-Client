import {useState, useEffect} from 'react'

/**
 * Retrieves the current window height and width.
 * @returns {JSON} {width, height} the respective width and height of the window
 */
function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}


/**
 * A React hook that allows the user to get the dimensions of the window.
 * @returns windowDimensions the dimensions of the window. Can be destructured via
 * JSON notation.
 */
export default function useWindowDimensions() {

    /**
     * Stores the state of the window dimensions.
     */
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)

    /**
     * On render, attach an event listener that updates the window dimension variables
     * on resize.
     */
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleResize)

        // Release the listener from memory.
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}