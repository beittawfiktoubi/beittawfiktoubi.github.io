
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

export function setDirection(v: "rtl" | "ltr") {
    const opp = (v === "rtl") ? "ltr" : "rtl"
    document.documentElement.style.setProperty('--main-direction', v);
    document.documentElement.style.setProperty('--opposite-direction', opp);
}