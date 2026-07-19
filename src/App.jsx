import React, { useState } from 'react'


function App() {
const [title, setTitle] = useState("");
const [detail, setDetail] = useState("")
const [task, setTask] = useState([])

 const submitForm = (e) => {
  e.preventDefault()
 
  const copyTask = [...task]
  copyTask.push({title, detail})

  setTask(copyTask)

 setTitle("")
 setDetail("")
 }

 const deleteNotes = (idx) => {
  const copyTask = [...task]
  copyTask.splice(idx, 1)
  setTask(copyTask)
 }



  return (
  
    <div className=" justify-between h-screen lg:flex ">
      
      <form className="flex flex-col items-start gap-5 lg:w-1/2 p-10" onSubmit={(e) => {
        submitForm(e)
       }} >
<h1 className="text-[#778da9] font-bold text-5xl">ADD NOTES</h1>

        <input className="px-5 font-medium outline-none py-2 w-full border-2 border-[#1b263b] rounded-xl"
        type="text" 
        placeholder="Enter Notes Heading"
        value={title}
        onChange={(e) => {
        setTitle(e.target.value)
        }}
        />

         <textarea className="w-full font-medium h-32 px-5 py-2 border-2 border-[#1b263b] rounded-xl outline-none"
         type="text" 
        placeholder="Enter Notes Detail"
        value={detail}
        onChange={(e) => {
          setDetail(e.target.value)
        }}
        ></textarea>

        <button className="active:scale-95 bg-[#778da9] text-white px-5 py-2 rounded-xl w-2/3 font-bold outline-none">Add Notes</button>

       </form>

       <div className="lg:w-1/2 p-5 lg:border-l-2 border-[#1b263b] pt-10">
       <h1 className="text-5xl font-bold text-[#778da9]">Yours Notes!</h1>

       <div className="flex flex-wrap items-start justify-start mt-5 overflow-auto h-full gap-5">
       {task.map(function(elem, idx){
        return <div key={idx} className="relative h-64 w-52 bg-cover rounded-xl bg-[url('https://i.pinimg.com/736x/23/78/67/237867b0d3d006fcbac50260b136dc3e.jpg')] p-14">

          <h2 onClick={() => {
            deleteNotes(idx)
          }} className="absolute top-2.5 right-3 bg-[#1b263b] text-[#e0e1dd] text-sm rounded-full px-1"><i className="fa-solid fa-xmark"></i></h2>


          <h3 className="leading-tight text-xl font-bold text-[#1b263b]">{elem.title}</h3>
          <p className=" leading-tight text-[#e0e1dd]">{elem.detail}</p>
        </div>
       })}
       </div>

       </div>

       </div>


  )
}

export default App
