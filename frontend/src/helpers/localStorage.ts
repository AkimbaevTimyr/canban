export function setItem(key: string, value: any){
    localStorage.setItem(key, value);
}

export function getItem(key: string){
    return localStorage.getItem(key);
}