import { useEffect } from 'react';

/**
 * @param ref - Ref of your parent div
 * @param callback - Callback which can be used to change your maintained state in your component
 * @author Pranav Shinde 30-Nov-2021
 */
const useOutsideClick = <T extends HTMLElement>(ref: React.RefObject<T>, callback: (value: boolean) => void) => {
    useEffect(() => {
        const handleClickOutside = (evt: MouseEvent) => {
            if (ref.current && !ref.current.contains(evt.target as Node)) {
                callback(false); // Do what you want to handle in the callback
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

export default useOutsideClick;