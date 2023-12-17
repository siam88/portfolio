export const getData = async (url: string, cacheType?: any) => {
  if (cacheType) {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) return undefined;
   let data=res.json()
   
    return res.json();
  } else {
    const res = await fetch(url, { next: { revalidate: 60 } });
  
    if (!res.ok) return undefined;

    return res.json();
  }
};
