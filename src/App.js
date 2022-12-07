import './App.css';
import {useEffect, useState} from 'react'

function App() {



const [itens,setItens]=useState([])
const [itensPerPage,setItensPerpage]=useState(10)
const [currentPage,setCurrentPage]=useState(0)

//calcula quantidade de paginas necessarias
const pages=Math.ceil(itens.length/itensPerPage)

const startIndex =currentPage*itensPerPage;
const endIndex=startIndex+itensPerPage;
const currentItens=itens.slice(startIndex,endIndex)

useEffect(
  ()=>{
    const fetchData=async()=>{
    const result =await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => data)

    setItens(result)
    }
    fetchData()
  },[])


  return (
    <div className="App">

      <div>
        <select value={itensPerPage} onChange={(e)=> setItensPerpage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>


      {currentItens.map(item=>{
        return <div className='item'><span>{item.id}</span><span>{item.title}</span><span>{item.completed}</span><a href="https://www.homehost.com.br/">HomeHost</a>
          </div>
        
      })}


      
      <div>
        {Array.from(Array(pages),(item,index)=>{
           //ao clicar muda de pagina
          return <button value={index} onClick={(e)=>setCurrentPage(Number(e.target.value))}>{index+1}</button>
        })}
      </div>

    </div>
  );
}

export default App;
