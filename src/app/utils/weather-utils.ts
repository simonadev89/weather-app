export function formatDate(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleDateString("en-EN", {
        weekday: 'long', day: '2-digit', month: 'long'
    });
}

export function formatTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString("en-EN", {
        hour: '2-digit', minute: '2-digit'
    });
}

export function kelvinToCelsius(temp: number): number {
    return temp - 273.15;
}