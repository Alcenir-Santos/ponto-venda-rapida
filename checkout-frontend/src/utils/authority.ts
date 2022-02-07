
export async function getAuthority(): Promise<string> {
    const token = await localStorage.getItem('token');
    return token || '';
  }
  
  export function setAuthority(authority: string): void {
    localStorage.setItem('token', authority);
  }