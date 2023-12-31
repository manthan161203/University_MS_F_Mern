import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Course() {
  const { id } = useParams();
  const role = "admin"; // You can replace this with your actual role retrieval logic
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/${role}/getCourseDetails/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="w-full text-center bg-gray-200 p-4">
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Display Course
      </div>
      <div className="bg-white border p-4 shadow-md">
        {data !== undefined && (
          <Profile data={data[0]} />
        )}
      </div>
    </div>
  )
}

export default Display_Course;
