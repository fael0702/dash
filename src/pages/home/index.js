import React,{ useState,useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';

const Home=() => {
  const [data,setData]=useState({});
  useEffect(() => {
    firebaseDb.child("contacts").on("value",(snapshot) => {
      if(snapshot.val()!==null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  },[]);

  return (
    <div className="home">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((ranking,index) => {
            return (
              <tr key={ranking}>
                <th scope="row">{ranking}</th>
                <td>{data[ranking].ranking}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;