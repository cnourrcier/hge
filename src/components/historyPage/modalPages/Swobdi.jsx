import ImageCarousel from '../../ImageCarousel';
import './Swobdi.css';

const Swobdi = () => {

    const images = [
        { 
            id: 1, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-fashions_j2in6j.jpg',
            text: '1',
        },
        { 
            id: 2, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874700/Hidden%20Gable%20Estate/history%20page/swobdi-with-glove_hwp2tj.jpg',
            text: '2' 
        },
        { 
            id: 3, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/stranger-within-our-gates_zghaht.jpg',
            text: '3'
        },
        { 
            id: 4, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-feather-hat_stddkw.jpg',
            text: '4'
        },
        { 
            id: 5, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-chinese-robe_ypeydp.jpg', 
            text: '5'
        },
        { 
            id: 6, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874698/Hidden%20Gable%20Estate/history%20page/swobdi-25-years-in-business_uitt4o.jpg',
            text: '6'
        },
        { 
            id: 7, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/LA-fashion-show_a7ix14.jpg',
            text: '7',
        },
        { 
            id: 8, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-illustration_du4jwq.jpg',
            text: '8',
        },
        { 
            id: 9, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874700/Hidden%20Gable%20Estate/history%20page/swobdi-on-display-for-your-approval_df1vj1.jpg',
            text: '9'
        },
        { 
            id: 10, 
            url: 'https://res.cloudinary.com/dwguf4w1t/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-large-hat_djrnsn.jpg',
            text: '10'
        },
    ]

    return (
        <div className='swobdi'>
            <div className='swobdi__text-content'>
                <header>
                    <h3>“Roaring Twenties, Liberated Women, and Flappers"</h3>
                    <h4>Winter Residence until 1931</h4>
                </header>
                <ul>
                    {/* <li className='list-item'>
                        Winter residence until 1931.
                    </li> */}
                    <li className='list-item'>
                        Mrs Agnes Swobdi is credited with pioneering the Los Angeles Fashion District with her original designs and exclusive imports.
                    </li>
                    <li className='list-item'>
                        As an importer, curating her latest collection featured in her many shops, she made numerous trans-Atlantic crossings visiting all of Europe, traveled extensively throughout Asia on the Orient Express and special trips to Japan, Australia and Hawaii.
                    </li>
                    <li className='list-item'>
                        Swobdi's parties were legendary, and certainly included rising stars and Hollywood's elite.
                    </li>
                    <li className='list-item'>
                        Her most favorite places to visit included the ruins of Rome, the temples of Asia, the lagoons of Mandalay, and the pretty gardens of Japan.
                    </li>
                    <li className='list-item'>
                        As a couturière, her dresses and hats were worn by Silent Film actresses in the 1920s.
                    </li>
                    <li className='list-item'>
                        Many of her fashions were featured in the 1924 film “Try and forget it” staring Bryant Washburn and directed by Cullen Tate. 
                    </li>
                </ul>
            </div>
            <div className='swobdi__carousel-container'>
                <p>Click on an image to enlarge</p>
                <ImageCarousel images={images} showText={true} className='swobdi-carousel text-container'/>
            </div>
        </div>
    )
}

export default Swobdi;


