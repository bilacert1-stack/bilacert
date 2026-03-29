"use client";

import { useEffect } from "react";

interface ViewTrackerProps {
    slug: string;
    incrementFn: (slug: string) => Promise<void>;
}

export function ViewTracker({ slug, incrementFn }: ViewTrackerProps) {
    useEffect(() => {
        // This runs only on the client (the user's browser) when the page mounts
        incrementFn(slug);
    }, [slug, incrementFn]);

    return null; // This component doesn't render anything visible
}