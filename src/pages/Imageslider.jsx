// import { useState, useEffect, useCallback } from "react";

// const slides = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
//     title: "Alpine Serenity",
//     subtitle: "Switzerland · 2024",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
//     title: "Golden Hour",
//     subtitle: "Tuscany · Italy",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=80",
//     title: "Forest Light",
//     subtitle: "Oregon · USA",
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
//     title: "Summit Peak",
//     subtitle: "Dolomites · Italy",
//   },
//   {
//     id: 5,
//     image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80",
//     title: "Desert Bloom",
//     subtitle: "Sahara · Morocco",
//   },
// ];

// const ChevronLeft = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
//     <polyline points="15 18 9 12 15 6" />
//   </svg>
// );

// const ChevronRight = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
//     <polyline points="9 18 15 12 9 6" />
//   </svg>
// );

// export default function ImageSlider() {
//   const [current, setCurrent] = useState(0);
//   const [prev, setPrev] = useState(null);
//   const [direction, setDirection] = useState(null);
//   const [animating, setAnimating] = useState(false);
//   const [paused, setPaused] = useState(false);

//   const goTo = useCallback(
//     (index, dir) => {
//       if (animating) return;
//       setDirection(dir);
//       setPrev(current);
//       setCurrent(index);
//       setAnimating(true);
//       setTimeout(() => {
//         setPrev(null);
//         setAnimating(false);
//       }, 600);
//     },
//     [animating, current]
//   );

//   const next = useCallback(() => {
//     goTo((current + 1) % slides.length, "right");
//   }, [current, goTo]);

//   const prev_ = useCallback(() => {
//     goTo((current - 1 + slides.length) % slides.length, "left");
//   }, [current, goTo]);

//   useEffect(() => {
//     if (paused) return;
//     const timer = setInterval(next, 4500);
//     return () => clearInterval(timer);
//   }, [next, paused]);

//   const getSlideStyle = (index) => {
//     if (index === current) {
//       return {
//         position: "absolute",
//         inset: 0,
//         transform: animating
//           ? direction === "right"
//             ? "translateX(0)"
//             : "translateX(0)"
//           : "translateX(0)",
//         animation: animating
//           ? direction === "right"
//             ? "slideInRight 0.6s cubic-bezier(0.22,1,0.36,1) forwards"
//             : "slideInLeft 0.6s cubic-bezier(0.22,1,0.36,1) forwards"
//           : "none",
//         zIndex: 2,
//       };
//     }
//     if (index === prev) {
//       return {
//         position: "absolute",
//         inset: 0,
//         animation: direction === "right"
//           ? "slideOutLeft 0.6s cubic-bezier(0.22,1,0.36,1) forwards"
//           : "slideOutRight 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
//         zIndex: 1,
//       };
//     }
//     return { position: "absolute", inset: 0, opacity: 0, zIndex: 0 };
//   };

//   return (
//     <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0a0a0a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
//       <style>{`
//         @keyframes slideInRight {
//           from { transform: translateX(100%); }
//           to { transform: translateX(0); }
//         }
//         @keyframes slideInLeft {
//           from { transform: translateX(-100%); }
//           to { transform: translateX(0); }
//         }
//         @keyframes slideOutLeft {
//           from { transform: translateX(0); }
//           to { transform: translateX(-100%); }
//         }
//         @keyframes slideOutRight {
//           from { transform: translateX(0); }
//           to { transform: translateX(100%); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(18px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .arrow-btn {
//           background: rgba(255,255,255,0.08);
//           border: 1px solid rgba(255,255,255,0.18);
//           color: white;
//           width: 52px;
//           height: 52px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s, transform 0.15s;
//           backdrop-filter: blur(8px);
//           -webkit-backdrop-filter: blur(8px);
//           flex-shrink: 0;
//         }
//         .arrow-btn:hover {
//           background: rgba(255,255,255,0.2);
//           border-color: rgba(255,255,255,0.45);
//           transform: scale(1.08);
//         }
//         .arrow-btn:active {
//           transform: scale(0.96);
//         }
//         .dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.35);
//           border: none;
//           padding: 0;
//           cursor: pointer;
//           transition: background 0.25s, transform 0.25s, width 0.25s;
//           flex-shrink: 0;
//         }
//         .dot.active {
//           background: #fff;
//           width: 22px;
//           border-radius: 3px;
//         }
//         .dot:hover:not(.active) {
//           background: rgba(255,255,255,0.65);
//         }
//       `}</style>

//       <div style={{ width: "100%", maxWidth: "860px" }}>
//         {/* Slide track */}
//         <div
//           style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.7)" }}
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           {slides.map((slide, i) => (
//             <div key={slide.id} style={getSlideStyle(i)}>
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//               />
//               {/* Gradient overlay */}
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }} />
//               {/* Caption */}
//               {i === current && (
//                 <div style={{ position: "absolute", bottom: "28px", left: "32px", animation: "fadeUp 0.55s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}>
//                   <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "4px", fontFamily: "system-ui, sans-serif" }}>
//                     {slide.subtitle}
//                   </p>
//                   <h2 style={{ margin: 0, color: "#fff", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
//                     {slide.title}
//                   </h2>
//                 </div>
//               )}
//               {/* Slide count */}
//               {i === current && (
//                 <div style={{ position: "absolute", top: "20px", right: "24px", color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", letterSpacing: "0.12em", fontFamily: "system-ui, sans-serif", animation: "fadeUp 0.45s 0.1s both" }}>
//                   {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Controls row */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px", padding: "0 2px" }}>
//           {/* Dots */}
//           <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 className={`dot${i === current ? " active" : ""}`}
//                 onClick={() => goTo(i, i > current ? "right" : "left")}
//                 aria-label={`Go to slide ${i + 1}`}
//               />
//             ))}
//           </div>

//           {/* Arrows */}
//           <div style={{ display: "flex", gap: "10px" }}>
//             <button className="arrow-btn" onClick={prev_} aria-label="Previous slide">
//               <ChevronLeft />
//             </button>
//             <button className="arrow-btn" onClick={next} aria-label="Next slide">
//               <ChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const ImageSlider = () => {
    const slides=["slide-1","slide-2","slide-3"]
  return (
    <div className='flex flex-nowrap p-20'>{slides.map((slide, index)=>{
        return(
            <div className='border'  key={index}>
                <p  >{slide}</p>
            </div>
            
        )
    })}</div>
  )
}

export default ImageSlider