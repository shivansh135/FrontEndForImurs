import './explore.css'

export const ExploreBanner = ({heading,text,linktext,img})=>{
    return (
        <div className="explore-card">
          <div className="heading">{heading || 'Propose with memories'}</div>
          <img className="image" alt="Imag" src={img || "explore.png"} />
          <p className="explore-text">
            {text || 'A proposal magazine covering your introductory encounter, the happy moments you spent together and your future resolutions. How cool is that?'}
          </p>
          <div className="link">
            <div className="text">{linktext || 'Get a proposal magazine'}</div>
            <img className="icon" alt="Icon" src="linkicon.svg" />
          </div>
        </div>
      );
}

export const ExploreWindow = ()=>{
    return(
        <div className='body' style={{padding:'20px'}}>
            <div className='explore-card-cont'>
            <ExploreBanner/>
            <ExploreBanner/>
            <ExploreBanner/>
            <ExploreBanner/>
            <ExploreBanner/>
            <ExploreBanner/>
            </div>
        </div>
    )
}