import React, { useState } from 'react'
import Cat from '../images/Cat.png'


function Card() {

    // Данные по товару с API
    const [data, setData] = useState([
        {
            id: 1,
            inStock: true,
            subtitle: 'с фуа-гра',
            quantity: 10,
            discount: 'мышь в подарок',
            additionalInfo: null,
            weight: 0.5,
            description: '"Текст, после выбора товара для покупки"'
        },

        {
            id: 2,
            inStock: true,
            subtitle: 'с рыбой',
            quantity: 40,
            discount: '2 мыши в подарок',
            additionalInfo: null,
            weight: 2,
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },

        {
            id: 3,
            inStock: false,
            subtitle: 'с курой',
            quantity: 100,
            discount: '5 мышей в подарок',
            additionalInfo: 'заказчик доволен',
            weight: 5,
            description: '"Текст, после выбора товара для покупки"'
        },

    ])



    // Стейт добавляемых итемов.
    const [selectedI, setSelectedI] = useState([])

    console.log(selectedI)

    // Функция выбора
    const select = (position) => (
        // Функция выбора срабатывает при нажатии и добавляет итем в массив selectedI. 
        // Проверяю, содержит ли массив уже этот итем, если да, то я его удаляю (получается что-то
        // типа toggle, на клик, и добавляет и удаляет)
        // если массив не содержит добавляемый итем, добавляем
        selectedI.includes(position) ? setSelectedI(selectedI.filter((i) => i !== position)) :
            setSelectedI([...selectedI, position])
    )


    return (
        data.map((position) => (
            <div className="card-wrapper" key={position.id}>
                <div className={position.inStock ? (selectedI.includes(position) ? "card-border selected" : "card-border")
                    : 'card-border out-of-stock'}  >
                    <div className={position.inStock ? 'card' : 'card out-of-stock-card'}
                        onClick={(e) => position.inStock ? select(position) : alert("Товар закончился")} >
                        <div className="card__text">
                            <p className='card__heading'>Сказочное заморское яство</p>
                            <h1 className='card__title'>Нямушка</h1>
                            <h3 className='card__subtitle'>{position.subtitle}</h3>
                            <p className='card__quantity'>{position.quantity} порций</p>
                            <p className='card__discount'>{position.discount}</p>
                            <p className='card__additionalInfo'>{position.additionalInfo}</p>
                        </div>
                        <div className="card__info">
                            <img src={Cat} alt="Фото кота" />
                            <div className={position.inStock ? (selectedI.includes(position) ? "card__weight weight-selected" : "card__weight")
                                : 'card__weight weight-out-of-stock'}>
                                <p>{position.weight}<span>кг</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buy">
                    {
                        position.inStock ? (selectedI.includes(position) ? <p>{position.description}</p>
                            : <p>Чего сидишь? Порадуй котэ, <a onClick={(e) => select(position)}>купи.</a></p>)
                            : <p className='out-of-stock-info'>Печалька, {position.subtitle} закончился.</p>
                    }

                </div>
            </div>
        ))

    )
}

export default Card

