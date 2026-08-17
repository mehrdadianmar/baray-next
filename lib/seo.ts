export const site={name:"رایان بارای",url:process.env.NEXT_PUBLIC_SITE_URL||"https://www.baray.ir",phone:"۰۲۱-۲۶۴۲۲۴۰۲"};
export const basePath=process.env.NEXT_PUBLIC_BASE_PATH||"";
export const assetUrl=(value:string)=>/^https?:\/\//.test(value)?value:`${basePath}${value.startsWith("/")?value:`/${value}`}`;
export function jsonLd(data:object){return {__html:JSON.stringify(data)}}
