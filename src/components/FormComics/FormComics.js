import React, {useState} from 'react';
import useInput from "../../hook/useInput";
// name, link_url, img_src, rating, premiered, desc, id
function FormComics({addComics, closeModal}) {
    let name = useInput();
    let link_url = useInput();
    let img_src = useInput();
    let rating = useInput();
    let premiered = useInput();
    let desc = useInput();

    const handlerAddComics = (e) => {
        e.preventDefault();
        addComics({
            "name": name.value,
            "link_url": link_url.value,
            "img_src": img_src.value,
            "rating": rating.value,
            "premiered": premiered.value,
            "desc": desc.value,
            "id": new Date().getTime()
        });
        closeModal();
    }

    return (
        <form>
            <div>
                <label> Название комикса: <br/>
                    <input type="text" {...name}/>
                </label>
            </div>
            <div>
                <label>Ссылка на комикс: <br/>
                    <input type="text" {...link_url}/>
                </label>
            </div>
            <div>
                <label>Ссылка на картинку: <br/>
                    <input type="text" {...img_src}/>
                </label>
            </div>
            <div>
                <label>Рейтинг: <br/>
                    <input type="text" {...rating}/>
                </label>
            </div>
            <div>
                <label>Дата премьеры: <br/>
                    <input type="text" {...premiered}/>
                </label>
            </div>
            <div>
                <label> Описание: <br/>
                    <textarea cols="30" rows="4" {...desc}/>
                </label>
            </div>
            <button onClick={handlerAddComics}>Добавить</button>
        </form>
    );
}

export default FormComics;