import store from './store' 
export async function search () {
    const url = "data/Kepler-22b.json"
    fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res.pl_name)
            let List= [];
            List = [...store.getState().items];
            List.push(res)
            console.log("res",url)

            store.setState({
                items : List
            });
        })
        
}
