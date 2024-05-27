import { AuthContext } from '../../context/AuthContext'
import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import { motion } from 'framer-motion'
import style from './Users.module.css'
import DataTable from 'react-data-table-component'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'

const Users = () => {
const [userData, setUserData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users" ), (snapshot) => {
      let list = [];
      snapshot.docs.forEach(doc=>{
        list.push({id:doc.id , ...doc.data()})
      })
      setUserData(list)
    },(err)=>{
      console.log(err);
    });
    return ()=>{
      unsub()
    }
  }, [])
//   console.log(userData);
  
  const columns =[
    {
        name:"Name",
        selector:row => row.displayName,
        sortable:true,
    },
    {
        name:"whats",
        selector:row => row.whats,
        sortable:true,
    },
    {
        name:"NationalID",
        selector:row => row.NationalID,
        sortable:true,
    },
    {
        name:"code",
        selector:row => row.code,
        sortable:true,
    },
    {
        name:"email",
        selector:row => row.email,
        sortable:true,
    },
    {
        name:"photoURL",
        selector:row => row.photoURL,
        sortable:true,
    },
  ]



  const [rec, setRec] = useState(userData)
  useEffect(() => {
    setRec(userData);
  }, [userData]);
console.log(rec);

function handleFilter(e){
    const newData = userData.filter(row =>{
        return row.displayName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) 
    })
    setRec(newData)
  }

  return <>
        <motion.h2 viewport={{once:true}} initial={{scale:.5 , opacity:0}} whileInView={{scale:1 , opacity:1  }} transition={{duration:1.4}}><AnimatedText text="Articles" ClassName={`${style.titleAbout} mb-4 mt-4  text-white`} /></motion.h2>
    <div className="users">
        <div className="container mb-5 mt-5">
            <div className="search text-end">
                <input type="text" className='form-control w-75 mb-4 m-auto ' placeholder='search By Name'  onChange={handleFilter}/>
            </div>
            <DataTable
            columns={columns}
            data={rec}
            selectableRows
            fixedHeader
            pagination
            >
            </DataTable>
        </div>
    </div>
  </>
}

export default Users
