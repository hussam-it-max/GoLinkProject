export const creatAboutusPage=()=>{
    const div= document.createElement('div');
    div.classList.add('about-container');
    div.innerHTML=String.raw`
        <div class="title-about" id="aboutUs">
        <h1>About Us</h1>
    </div>
    <div class='about-content'>
        <div class="about-info">
            <h1>"Your trusted ride, anytime, anywhere."</h1>
            <p>We make getting around simple, safe, and reliable. With our easy-to-use app, you can quickly book a taxi, track your driver, and enjoy fair pricing with no surprises. Whether you’re commuting to work, meeting friends, or exploring new places, we’re here to get you there comfortably and on time..</p>
            <button class="btn-explore">Explore Now</button>
        </div>
        <div class="about-image">
            <img src=https://static.vecteezy.com/system/resources/previews/015/393/176/non_2x/online-car-rent-people-using-mobile-application-for-ordering-taxi-cab-or-car-sharing-woman-near-smartphone-screen-with-route-and-location-mark-on-a-city-map-vector.jpg
                alt="">
        </div>
        </div>`;
        return div;
}