import React, { useState, useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';
import './style.css'

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDb.child("RANKING").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
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
  }, []);

  return (
    <div className="home">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Score</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((nome, index) => {
            index++
            return (
              <tr key={nome}>
                <th scope="row">{nome}</th>
                <td>{data[nome].Pontos}</td>
                <td>{index}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;