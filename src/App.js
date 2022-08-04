import styles from './App.module.scss';
import {Route, Routes} from "react-router-dom"
import Main from './pages/Main/Main';
import ExampleSite from './pages/ExampleSite/ExampleSite';
import ExampleDevelopments from './pages/ExampleDevelopments/ExampleDevelopments';
import AboutMe from './pages/AboutMe/AboutMe';
import {AuthContext} from "./AuthContext";
import {useState} from "react";



function App() {
    let [user, setUser] = useState();
    let headingArr = ['#', "Name", "Age", "Gender", "Address", "Photo"];
    let usersArr = [{
        "id": 1,
        "name": "Adam",
        "age": 33,
        "gender": "male",
        "address": "Kazan, st.Lenina, 1",
        "url": "https://i02.fotocdn.net/s125/b9f4c7d2adcdf064/gallery_m/2836843216.jpg",
    },{
        "id": 2,
        "name": "Eva",
        "age": 30,
        "gender": "female",
        "address": "Kazan, st.Lenina, 3",
        "url": "https://cosmetology-info.ru/img_lib/2016/07/1468485266_63b4.gif",
    }
    ]

    return (
      <div className={styles.App} >
        <AuthContext.Provider value={{
            setUser: (elem)=>{setUser(elem)},
            log: () => console.log("привет, Ильнур!"),
            user
        }}>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/ExampleSite" element={<ExampleSite/>}/>
              <Route path="/ExampleDevelopments/*"element={<ExampleDevelopments/>}/>
              <Route path="/AboutMe" element={<AboutMe/>}/>
              <Route path="/index.html" element={<Main/>}/>
          </Routes>
        </AuthContext.Provider>
      </div>
    );
}

export default App;
