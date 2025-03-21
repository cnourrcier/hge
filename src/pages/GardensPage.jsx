import { Helmet } from "react-helmet-async";
import Carousel from '../components/carousel/Carousel';
import { useModal } from "../context/ModalContext";
import './GardensPage.css';


const GardensPage = () => {
    const { handleOpenSimpleModal } = useModal();
    
    const imageUrl = import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV;

    const currentGardenImages = [
            { id: 1, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741571246/Hidden%20Gable%20Estate/gardens%20page/_I1A0280_small_nyjxxh.jpg`, alt: 'Image 1' },
            { id: 2, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741571118/Hidden%20Gable%20Estate/gardens%20page/_I1A0459_small_jyh2t9.jpg`, alt: 'Image 2' },
            { id: 3, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741570327/Hidden%20Gable%20Estate/gardens%20page/_I1A0059_1_small_hvmzhn.jpg`, alt: 'Image 3' },
            { id: 4, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741570609/Hidden%20Gable%20Estate/gardens%20page/_I1A0360_small_m54j41.jpg`, alt: 'Image 4' },
            { id: 5, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741571455/Hidden%20Gable%20Estate/gardens%20page/_I1A0456_small_eng8xk.jpg`, alt: 'Image 5' },
            { id: 6, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741571495/Hidden%20Gable%20Estate/gardens%20page/IMG_8014_small_o7yqyh.jpg`, alt: 'Image 6' },
            { id: 7, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741571502/Hidden%20Gable%20Estate/gardens%20page/IMG_8017_small_x90jsw.jpg`, alt: 'Image 7' },
            { id: 8, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741571525/Hidden%20Gable%20Estate/gardens%20page/IMG_8037_small_k4zhrt.jpg`, alt: 'Image 8' },
            { id: 9, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1741571540/Hidden%20Gable%20Estate/gardens%20page/IMG_8047_small_tewros.jpg`, alt: 'Image 9' },
        ];

    const historicalGardenImages = [
            { id: 1, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519293/Hidden%20Gable%20Estate/gardens%20page/Untitled-4_small_hvlcmx.jpg`, text: `“We decided on Cactus as a Motif and proceeded to Arizona with trucks tools etc.” as documented by Mrs Swobdi's sister. This occurred in the late 1920s.`, alt: 'Cactus Motif'},
            { id: 2, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519290/Hidden%20Gable%20Estate/gardens%20page/Untitled-15_small_kt8wgy.jpg`, text: `Our supply dump, in the hills near Quartsite Arizona. Lumber, straw, cases ropes, tools etc… All taken with us from Los Angeles. We had with us one 5-ton truck and trailer and two cars.`, alt: 'Cactus Motif'},
            { id: 3, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519291/Hidden%20Gable%20Estate/gardens%20page/Untitled-16_small_dhcks7.jpg`, text: `This was our 1st choice; we chose a small one to practice on 18 feet & no branches. Weight about 1800 lbs.`, alt: 'Cactus Motif'},
            { id: 4, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519291/Hidden%20Gable%20Estate/gardens%20page/Untitled-17_small_lzkifh.jpg`, text: `This is George King “King George”. A desert rat who told us we needn't have employed our labor gang as he would have helped us. He is about 75 years old.`, alt: 'Cactus Motif'},
            { id: 5, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736375711/Hidden%20Gable%20Estate/gardens%20page/cactus_workers_arizona_-_m_small_mu9i63.jpg`, text: `2nd Choice and by far the hardest to handle on account of the spreading branches. The top four feet broke off in transit.  It was about 21 feet high before it was broken and weight was over 2 tons. Patty & Agnes (Swobdi)`, alt: 'Cactus Motif'},
            { id: 5.1, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736554119/Hidden%20Gable%20Estate/gardens%20page/cactus_workers_arizona_-_closeup_ochths.jpg`, text: `Note Mrs Swodi's outfit and shoes while in a remote part of Arizona in the twenties.`, alt: 'Cactus Motif'},
            { id: 6, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519290/Hidden%20Gable%20Estate/gardens%20page/Untitled-19_small_kz1far.jpg`, text: `We looked this one over but decided it was too large.`, alt: 'Cactus Motif'},
            { id: 7, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519290/Hidden%20Gable%20Estate/gardens%20page/Untitled-20_small_zwd0uj.jpg`, text: `The twins shown in this picture next took our eye as being very attractive and we just had room for it on the trailer. While shifting the crate on the trailor. I fell into the plant and got plenty stuck up about it.`, alt: 'Cactus Motif'},
            { id: 8, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519293/Hidden%20Gable%20Estate/gardens%20page/Untitled-21_small_ytgm4b.jpg`, text: `This shows the method of loading. We used sacks full of straw on the crate to protect the plants and plenty of brush between and over the large plants to enable us to put smaller ones on top. It took several Mexicans 2 days to cut enough brush. They worked slow.`, alt: 'Cactus Motif'},
            { id: 9, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519292/Hidden%20Gable%20Estate/gardens%20page/Untitled-32_small_gadddh.jpg`, text: `From near Ajo Arizona`, alt: 'Cactus Motif'},
            { id: 10, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736374996/Hidden%20Gable%20Estate/gardens%20page/Untitled-33_small_jgjcxy.jpg`, text: `Gunsight Mountain 25 miles S.E. of Ajo. This mountain is full of cacti of various sorts. The best of which is Lemaireocereus thurberi (Stenocereus thurberi). The arrow points to a Thurberi over 10 feet tall. Here we found the plant later named Echinocereus Meadii by Dr. H.D. Houghton.`, alt: 'Cactus Motif'},
            { id: 11, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736375253/Hidden%20Gable%20Estate/gardens%20page/Untitled-34_small_f37g6q.jpg`, text: `From near Tuscon Arizona`, alt: 'Cactus Motif'},
            { id: 12, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736375960/Hidden%20Gable%20Estate/gardens%20page/Untitled-35_small_ojsodo.jpg`, text: `At night from the nearest town, ship our days collection by freight to Los Angeles to be later FWD. to Palm Springs. These pictures show how we loaded our Packard each day.`, alt: 'Cactus Motif'},
            { id: 13, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736375391/Hidden%20Gable%20Estate/gardens%20page/Untitled-36_small_wqtkda.jpg`, text: `Loaded Packard`, alt: 'Cactus Motif'},
            { id: 14, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736375474/Hidden%20Gable%20Estate/gardens%20page/Untitled-37_small_ziffxo.jpg`, text: `Florence standing by Opuntia`, alt: 'Cactus Motif'},
            { id: 15, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736375540/Hidden%20Gable%20Estate/gardens%20page/Untitled-38_small_uiucrh.jpg`, text: `Carnegiea Gigantea Cristate - In the hospital grounds of the Indian Reservation. I believe the finest “crest” in the world. A perfect specimen.`, alt: 'Cactus Motif'},
            { id: 16, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736375613/Hidden%20Gable%20Estate/gardens%20page/Untitled-39_small_mi7qii.jpg`, text: `There are miles and miles of these Opuntias. They look like fruit trees loaded with fruit the year round.`, alt: 'Cactus Motif'},
            { id: 17, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736553560/Hidden%20Gable%20Estate/gardens%20page/Untitled-40_small_h72ppc.jpg`, text: `After being unloaded in Palm Springs`, alt: 'Cactus Motif'},
            { id: 18, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736553560/Hidden%20Gable%20Estate/gardens%20page/Untitled-41_small_yegumk.jpg`, text: `The hoisting apparatus we used to plant them with.`, alt: 'Cactus Motif'},
            { id: 19, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519291/Hidden%20Gable%20Estate/gardens%20page/Untitled-23_small_ejizoz.jpg`, text: `Desert Motif as completed`, alt: 'Cactus Motif'},
            { id: 20, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519292/Hidden%20Gable%20Estate/gardens%20page/Untitled-27_small_ecjiad.jpg`, text: `Desert Motif as completed`, alt: 'Cactus Motif'},
            { id: 21, url: `https://res.cloudinary.com/${imageUrl}/image/upload/v1736519290/Hidden%20Gable%20Estate/gardens%20page/Untitled-30_small_qgcvgt.jpg`, text: `Mrs Swobdi admiring the gardens in her high heels with snow on the ground`, alt: 'Cactus Motif'},
    ];

    const openModal = (item) => {
        handleOpenSimpleModal(item);
    };

    return (
        <main className='gardens'>

            <Helmet>
                <title>Solitude and Tranquility</title>
            </Helmet>
            
            <section className='gardens__top-section'>
                <div className='gardens__top-image'>
                    <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736474130/Hidden%20Gable%20Estate/gardens%20page/house_collage_with_cactus_landscape_-_m_small_mlylay.jpg`} alt="" />
                </div>
                <div className='gardens__title-container'>
                    <h1 className="gardens__title">
                        Botanical Gardens 
                    </h1>
                </div>
                <div className='gardens__list-container'>
                    <ul>
                        <li><b>Palm Trees:</b> More than 30 species native to arid and hotter climates from around the world grace the property.  A few are thought to be part of the original landscape.</li>
                        <li><b>Olive Trees:</b> Heavy producing Manzanilla olive trees that are more than 100 years old.</li>
                        <li><b>Roses:</b> Ever expanding collection of roses selected for their ability to survive the summer heat.</li>
                        <li><b>Cactus Motif:</b> The cactus landscape in the Twenties was with specimens collected from Arizona.  We are slowly expanding our present-day Cactus Motif.</li>
                    </ul>
                </div>
            </section>
            
            <section className='gardens__image-slider'>
                <Carousel 
                    items={ currentGardenImages } 
                    showThumbnails={ true }
                    className='gardens-modern-carousel'
                />
            </section>

            <section className='gardens__middle-content'>
                <div id="text-content" className='gardens__text-content'>
                    <p>
                        We strive to create colorful and tropical landscapes that support local wildlife. Gardening in Palm Springs has unique challenges due to the extreme environment of the valley in the summer with temperatures exceeding 120°F.  However, our gardens can be breath-taking during the spring when trees, shrubs, perennials and annuals are outrivaling each other in a riot of colorful blooms.
                    </p>
                    <p>
                        The Cactus and Succulent Society gathered here in 1929 because Mrs. Swobdi had created “one of the finest collections of Cactus in the United States”.  
                    </p>
                    <p className='click-hint'>
                        Click on any photo to enlarge for more detail!
                    </p>
                </div>
                <div className='gardens__showcase-images-container'>
                    <img 
                        onClick={() => openModal({image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364423/Hidden%20Gable%20Estate/gardens%20page/LosAngelesTimes_1929_April_18_hrnpb8.png`, modalTitle: ''})}
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364423/Hidden%20Gable%20Estate/gardens%20page/LosAngelesTimes_1929_April_18_hrnpb8.png`} 
                        alt="" 
                    />
                    <img 
                        onClick={() => openModal({image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364893/Hidden%20Gable%20Estate/gardens%20page/Cactus_event_-_m_small_lgdphh.jpg`, modalTitle: 'Swobdi hosting Cactus and Succulent Society of America 1929'})}
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364893/Hidden%20Gable%20Estate/gardens%20page/Cactus_event_-_m_small_lgdphh.jpg`} 
                        alt="" 
                    />
                </div>
            </section>
            
            <section className='gardens__image-and-text-slider'>
                <Carousel 
                    items={ historicalGardenImages } 
                    className='gardens-historic-carousel'
                    showText={ true }
                />
            </section>
        </main>
    )
}

export default GardensPage;