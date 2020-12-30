import React from 'react'

const Portfolio = () => {
    const [state] = React.useState([
        {id: 1, image: "/images/0001.jpg", name: 'Tunico', expert: 'Flutter'},
        {id: 2, image: "/images/k3.jpg", name: 'Antonio', expert: 'React'},
        {id: 3, image: "/images/0003.jpg", name: 'Maria', expert: 'Vue JS'},
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__section">
                <div className="row">
                <div className="col-4">
                    <div className="portfolio__content">
                        <h6 className="portfolio__content-h6">Colaboradores</h6>
                        <h3 className="portfolio__content-h3">Nosso Time.</h3>
                    </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {state.map(user => (
                                <div className="col-4 pl-15" key={user.id}>
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={user.image} alt="card"/>
                                 </div>
                            <h5 className="portfolio__card-name">{user.name}</h5>
                            <p className="portfolio__card-expert">{user.expert}</p>
                             </div>
                            </div>
                            ))}
                            
                           
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

// import React, {Component} from 'react';
// import './App.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick"

// const photos = [
//   {
//   name: 'Photo 1',
//   url:"https://thumbs.web.sapo.io/?W=2100&H=0&delay_optim=1&epic=NTYw7Jr0joHC44+ELMuvsrCjXCJ22ZUZMO5+bVSlBmszchVhV1WuXyjHat2JreT6dFF4Gcx/glvAjS+y4CYfFrgIkbjR21fE/4n1XVWuNEAfv1g="
// },
//   {
//   name: 'Photo 2',
//   url:"https://www.atribuna.com.br/image/contentid/policy:1.99054:1588238667/Star-Wars-A-Ascens-o-Skywalker.jpeg?f=2x1&$p$f=6f75715&q=0.8&w=1500&$w=f075b93"
// },
//   {
//   name: 'Photo 3',
//   url:"https://www.plural.jor.br/wp-content/uploads/2019/12/star-wars-the-rise-of-skywalker-5df01f2e96eca.jpg"
// },
// ]


// class App extends Component{
//   render(){
//     const settings = {
//       dots: true,
//       fade: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       arrows: true,
//       slidesToScroll: 1,
//       className:"slides"
    
//     }

//     return (
//       <div className="App" style={{padding: 24}}>
//         <Slider {...settings}>
//           {photos.map((photo)=> {
//             return(
//               <div>
//                 <img wdith= "100%" src={photo.url}/>
//               </div>
//             )
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }

// export default App;