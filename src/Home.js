import React, { useState, useEffect } from 'react'
import axios from "axios";


const Home = () => {
  const [userData, setUserData] = useState();
  console.log(userData)
  useEffect(() => {

   fetch('https://stackfusion2.onrender.com/users')
      .then((res) => res.json()).then((data) => setUserData(data.data));


  }, [])
  return (
    <div>

      <h3>User Data</h3>
      <table class="table w-75 mx-auto">
        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>

            <th scope="col">D.O.B</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>

          {
            userData && userData.map((cur, index) => {
              return (



                <tr key={index}>

                  <td>{cur._id}</td>
                  <td>{cur.name}</td>

                  <td>{cur.email}</td>
                  <td>{cur.dob}</td>
                  <td>{cur.phone}</td>
                </tr>



              )
            })

          }



        </tbody>
      </table>

    </div>
  )
}

export default Home;