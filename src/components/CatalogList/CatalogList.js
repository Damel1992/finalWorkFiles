import React, {useState, useEffect, useContext} from 'react';
import ComicsItem from "../ComicsItem/ComicsItem";
import "./CatalogList.css";
import Modal from "../Modal/Modal";
import FormComics from "../FormComics/FormComics";
import {AuthContext} from "../../AuthContext";

function CatalogList(props) {

    const [comics, setComics] = useState([]);
    const [isModal, setIsModal] = useState(false);

    let {user} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=batman')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                let arr = data.map((e) => ({
                    "name": e.show.name,
                    "link_url": e.show.url,
                    "img_src": e.show.image.original,
                    "rating": e.show.rating.average,
                    "premiered": e.show.premiered,
                    "desc": e.show.summary,
                    "id": e.show.id
                }))
                setComics(arr);
            })
    }, [])

    const deleteComicsItem = (i) => { 
        comics.splice(i, 1);
        setComics([...comics]);
    }
    const addComics = (obj) => {
        //вариант 1
        // comics.splice(comics.length-1, 0, obj);
        // setComics([...comics]);
        //вариант 2
        // comics.push(obj);
        // setComics([...comics])
        //вариант 3
        setComics([...comics, obj])
    }

    return (
        <React.Fragment>
            <button onClick={() => setIsModal(true)}>Добавить комикс</button>
            {user && <p>{user.login} выбери комикс</p>}
            <div className="CatalogList">
                {
                    comics.map((elem, i) => {
                        return <ComicsItem deleteItem={() => deleteComicsItem(i)} item={elem} key={elem.id}/>
                    })
                }
            </div>
            <Modal isModal={isModal} title="Добавление комикса" closeModal={() => setIsModal(false)}>
                <FormComics addComics={addComics} closeModal={() => setIsModal(false)}/>
            </Modal>
        </React.Fragment>
    );
}

export default CatalogList;
