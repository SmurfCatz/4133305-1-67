

export default function back(){
    return(
        <button onClick={getApi}>CALL API</button>
    )
}
async function getApi(){
   const res = await fetch("http://127.0.0.1:3000/api/hello")
   const data = res.json()

   return data
}