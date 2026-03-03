import React from 'react'
import sponsor1 from "../assets/images/Component 49 – 2.png"
import sponsor2 from "../assets/images/Component 51 – 2.png"
import sponsor3 from "../assets/images/Component 60.png"
import sponsor4 from "../assets/images/Component 61.png"
// import sponsor5 from "../assets/images/Frame 1984079597.png"
import sponsor6 from "../assets/images/Frame 40048.png"
import sponsor7 from "../assets/images/spotify-seeklogo.com 2.png"
const AutoMoving = () => {
    const sponsors = [
  { id: 1, sponsor: sponsor1 },
  { id: 2, sponsor: sponsor2 },
  { id: 3, sponsor: sponsor3 },
  { id: 4, sponsor: sponsor4 },
//   { id: 5, sponsor: sponsor5 },
  { id: 6, sponsor: sponsor6 },
  { id: 7, sponsor: sponsor7 },
];
  return (
    <div className='flex items-center justify-around'>
        {sponsors.map((sponso)=>{
            return(
                <img key={sponso.id} src={sponso.sponsor} alt="" />
            )
        })}
        <img src="" alt="" />
    </div>
  )
}

export default AutoMoving