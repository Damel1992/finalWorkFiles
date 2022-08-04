import styles from './AddComicsForm.module.scss';
import React, { useState } from 'react';

function AddComicsForm(props) {

    const [comicsName, setName] = useState('');
    const [comicsUrl, setUrl] = useState('');
    const [comicsImg, setImg] = useState('');
    const [comicsRating, setRating] = useState('');
    const [comicsPremiered, setPremiered] = useState('');
    const [comicsDescription, setDescription] = useState('');
    const [comicsID, setID] = useState('s');

    let handleComicsNameChange = (e) => {
        setName(e.target.value)
    };
    let handleComicsUrlChange = (e) => {
        setUrl(e.target.value)
    };
    let handleComicsImgChange = (e) => {
        setImg(e.target.value)
    };
    let handleComicsRatingChange = (e) => {
        setRating(e.target.value)
    };
    let handleComicsPremieredChange = (e) => {
        setPremiered(e.target.value)
    };
    let handleComicsDescChange = (e) => {
        setDescription(e.target.value)
    };
    
    let addComics = () => {
        const comics = {
            "name": comicsName,
            "link_url": comicsUrl,
            "img_src": comicsImg,
            "rating": comicsRating,
            "premiered": comicsPremiered,
            "desc": comicsDescription,
            "id": comicsID,
        }
        console.log(comics);
    };


    return (
        <div className={styles.ModalForm}>
            <input value={comicsUrl} 
                    onChange={handleComicsUrlChange} 
                    className={styles.formInput} 
                    placeholder='добавьте ссылку на комикс'/>

            <input value={comicsName} 
                    onChange={handleComicsNameChange} 
                    className={styles.formInput} 
                    placeholder='введите название'/>

            <input value={comicsPremiered} 
                    onChange={handleComicsPremieredChange} 
                    className={styles.formInput} 
                    placeholder='премьера'/>

            <input value={comicsRating}
                    onChange={handleComicsRatingChange} 
                    className={styles.formInput} 
                    placeholder='рейтинг'/>

            <input value={comicsDescription} 
                    onChange={handleComicsDescChange} 
                    className={styles.formInput} 
                    placeholder='введите описание'/>
                    
            <input value={comicsImg} 
                    onChange={handleComicsImgChange} 
                    className={styles.formInput} 
                    placeholder='введите адрес картинки'/>

            <button onClick={addComics}>Добавить</button>
        </div>
    );
}

export default AddComicsForm;;