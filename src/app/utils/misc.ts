
export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function showBackdrop() {
    const v = document.documentElement.style.getPropertyValue('--background-light');
    document.documentElement.style.setProperty('--backdrop-color', v);
}

export function hideBackdrop() {
    document.documentElement.style.setProperty('--backdrop-color', 'transparent');
}