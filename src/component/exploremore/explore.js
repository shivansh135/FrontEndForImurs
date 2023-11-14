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

export const FeatureWindow = ()=>{
  return(
    <div className='feature-cont'>
      <FeatureCard img="/fetures_icons/time.svg" heading="Within 48 hours" sub_heading="Swift Personalization in just 48 hours"/>
      
      <FeatureCard img="/fetures_icons/revisions.svg" heading="3 Free Revisions" sub_heading="Perfecting memories, your way, hassle-free"/>

      <FeatureCard img="/fetures_icons/pencil.svg" heading="Storytelling" sub_heading="Narratives etched in personalized elegance"/>
      
      <FeatureCard img="/fetures_icons/pencildot.svg" heading="Chic Layouts" sub_heading="Weaving memories into visual poetry"/>
      
      <FeatureCard img="/fetures_icons/caption.svg" heading="Classic Typefaces" sub_heading="Fonts evoking timeless reminiscence"/>
      
      <FeatureCard img="/fetures_icons/encrypt.svg" heading="Secured Details" sub_heading="Safely stored and transferred"/>
    </div>
  )
}

export const FeatureCard = ({img,heading,sub_heading})=>{
  return(
    <div className="desktop-features">
      <img className="icon" alt="Icon" src={img} />
      <div className="heading">{heading}</div>
      <div className="sub-heading">{sub_heading}</div>
    </div>
  )
}