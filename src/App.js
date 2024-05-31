import Header from './Componants/Header';
import Content from './Componants/Content';
import Footer from './Componants/Footer';
import { useEffect, useState } from 'react';
import AddItem from './Componants/AddItem';
import SearchItems from './Componants/SearchItems';
import apiRequest from './apiRequest';

function App() {
  const API_url = 'http://localhost:3500/items'
  const [items,setItems]=useState([]);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    const fetchItems = async()=>{
      try{
      const response = await fetch(API_url);
      const data = await response.json();
      setItems(data);
      }
      catch(err){
        console.log(err.stack)

      }
      finally{
        setIsLoading(false);
      }

    }
    setTimeout(() => {
      fetchItems();
    }, 2000);
    
    
   
  },[])


  const[newItem,setNewItem]=useState('');
  const addItem= async(item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const myNewItem={id:id,item,checked:false,}
    const listitems=[...items,myNewItem]
    setItems(listitems);
    const postOperation={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewItem)
    }
    const result= await apiRequest(API_url,postOperation);
    

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem)return;
    addItem(newItem);

    setNewItem('');
   

  } 
  const checkedHandler= async(id)=>{
    const listItems=items.map((item)=>item.id===id? {...item, checked : !item.checked}:item )
    setItems(listItems);
    const myItem=listItems.filter((item)=>item.id===id);
    const updateOption={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl=`${API_url}/${id}`;
    const result= await apiRequest(reqUrl,updateOption);

  }
  const deletedHandler= async(id)=>{
    const deletedItems=items.filter((item)=>item.id !==id? {...item,item}:null)
    setItems(deletedItems)
    const MyItems=deletedItems.filter((item)=>item.id !==id)
    const deleteOption={
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(MyItems)

    }
    const reqUrl=`${API_url}/${id}`;
    const result= await apiRequest(reqUrl,deleteOption);

  }
  
  const [search,setSearch]=useState('');
  return (
    <div className="App">
      <Header/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItems
      search={search}
      setSearch={setSearch}
      />
      <main>
          {isLoading&& <p>{'loading items'}</p>}
          {!isLoading&&<Content 
          items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
          checkedHandler={checkedHandler}
          deletedHandler={deletedHandler}
          /> }
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
