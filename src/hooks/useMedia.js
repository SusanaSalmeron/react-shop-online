import { useEffect, useState } from 'react';

const useMedia = (query) => {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setIsDesktop(media.matches);
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [isDesktop, query]);
    return isDesktop;
};

export default useMedia;