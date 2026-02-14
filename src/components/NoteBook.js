import React from 'react';
import './styles/notebook.css';
import suhani1 from '../assets/images/suhani1.jpeg';
import suhani2 from '../assets/images/suhani2.jpeg';

export default function NoteBook() {
    return (
        <div className='Notebook relative flex items-center justify-between w-64 h-80'>
            <div id="container">
                <div className="book shadow-lg shadow-emerald-400" style={{backgroundImage: `url(${suhani1})`}}>
                    <div className="cover">
                        <div className="notes custom-cover-text p-3 flex flex-col items-center select-none rounded-xl" style={{height: '100%', justifyContent: 'space-between'}}>
                            <div className="text-1 text-transparent bg-clip-text bg-gradient-to-tr from-[#ed4264] to-[#ffedbc]" style={{fontSize: '18px', lineHeight: '1.2', textAlign: 'center', marginTop: '4px'}}>
                                Happy Valentine's Day Suhani <span className='text-red-700'>💕</span>
                            </div>
                            <div style={{display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '4px 0'}}>
                                <div style={{background: 'white', padding: '4px', borderRadius: '3px', boxShadow: '2px 2px 8px rgba(0,0,0,0.3)', transform: 'rotate(-6deg)'}}>
                                    <img src={suhani1} alt="Suhani" style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '2px'}} />
                                </div>
                                <div style={{background: 'white', padding: '4px', borderRadius: '3px', boxShadow: '2px 2px 8px rgba(0,0,0,0.3)', transform: 'rotate(5deg)'}}>
                                    <img src={suhani2} alt="Suhani" style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '2px'}} />
                                </div>
                            </div>
                            <div className='w-fit h-fit text-end text-2xl select-none custom-author-book-cover text-transparent bg-clip-text bg-gradient-to-tr from-[#1d2671] to-[#ffedbc]' style={{marginBottom: '8px', alignSelf: 'flex-end'}}>
                                ~ Ridhvan
                            </div>
                        </div>
                        <div className="smile"></div>
                        <div className="eyes"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
