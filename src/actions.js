import store from './store';
export async function search() {
    const url = "data/earth-like-results.json";   
    const res1 = await fetch (url);
    const res2 = await res1.json();    
    searchItem(res2.results);
}

export async function searchItem(res2) {
    const url = res2;    
    let newList= [...store.getState().items];
        for(let i in url)
    {
        fetch(url[i])
            .then(response => response.json())
            .then(result =>  {                
                newList.push(result);
        })
    }
    store.setState({
        items: newList
    })
}




