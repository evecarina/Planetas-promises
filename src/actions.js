import store from './store' 
 export async function searchList(){
     const url="data/earth-like-results.json";
     const res1=await fetch(url);
     const res2=await res1.json();
     search(res2.results);
 }

export async function search (res2) {
  console.log("res2",res2);
    const url = res2
    fetch(url[1])
        .then(res => res.json())
        .then(res => {
            let List= [];
            List = [...store.getState().items];
            List.push(res)
            console.log("res",url)

            store.setState({
                items : List
            });
        })
        
}

