import type { Metadata } from "next";

export const metadata: Metadata= {
 title: 'Contact Page',
 description: 'Contact Page Decription',
};

const fetchAPI = async () => {     
  const response = await fetch("http://www.webapi-northwind.somee.com/api/Customers")
  const data = await response.json() 
  return data;    
}


// export default "async" function ContactPage() {
export default async function ContactPage() {
  
  const clientes: any[] = await fetchAPI();  

  return (
    <div>
    <span  className="text-7xl" >Contact Page</span> 
         
      {  
        clientes.map( (cliente: any) => (
            <ul key={cliente.customerId}>
                <li> { cliente.city } </li>
            </ul>                
        )) 
      }    
    
    </div>
    
  )
}
