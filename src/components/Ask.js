import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/ask.css';
import boyLookingToBeAcceptedFile from './assets/animations/boy-looking-to-accept.json';
import cryingBoyAnimationFile_1 from './assets/animations/crying_boy_1.json';
import cryingBoyAnimationFile_2 from './assets/animations/crying_boy_2.json'
import doesntMatterAnimationFile from './assets/animations/doesnt_matter_boy.json'
import acceptAnimationFile from './assets/animations/love_animation.json'

export default function Ask({ setProgress }) {

  const navigate = useNavigate();

  const [noCount, setNoCount] = useState(0);
  const [askText, setAskText] = useState("Will you do me the honor of being my Valentine?");
  const [emojiAsk, setEmojiAsk] = useState('\u{1F497}');
  const [yesOrNow, setYesOrNow] = useState(null);

  useEffect(() => {
    if (noCount > 2) {
      setTimeout(() => {
        navigate('/destroy');
      }, 1000);
    }
  }, [noCount, navigate]);

  useEffect(() => {
    setProgress(100);
  }, [setProgress])

  const handleNoClick = (event) => {
    event.preventDefault();
    setNoCount(noCount + 1);
    document.querySelector('.wait-animation').classList.add('hidden');
    if (noCount === 0) {
      document.querySelector('.cry-animation-1').classList.remove('hidden');
      setAskText("Please don't say no?")
      setEmojiAsk('\u{1F622}')
    } else if (noCount === 1) {
      document.querySelector('.cry-animation-1').classList.add('hidden');
      document.querySelector('.cry-animation-2').classList.remove('hidden');
      setAskText("Please be my Valentine?")
      setEmojiAsk('\u{1F62D}')
    }
    else {
      document.querySelector('.cry-animation-2').classList.add('hidden');
      document.querySelector('.doesnt-matter-animation').classList.remove('hidden');
      document.querySelector('.Yes').classList.add('hidden');
      document.querySelector('.convey').classList.add('hidden');
      document.querySelector('.ask').classList.remove('sm:text-4xl', 'text-2xl');
      document.querySelector('.ask').classList.add('text-3xl', 'sm:text-6xl');
      setAskText("No no no Suhani... wrong answer!")
      setEmojiAsk('');
      document.querySelector('.No').classList.add('translate-y-56', 'sm:translate-y-[22.8rem]', 'pointer-events-none');
    }
  }

  const handleYesClick = (event) => {
    event.preventDefault();
    document.querySelector('.wait-animation').classList.add('hidden');
    document.querySelector('.cry-animation-1').classList.add('hidden');
    document.querySelector('.cry-animation-2').classList.add('hidden');
    document.querySelector('.accept-animation').classList.remove('hidden');
    document.querySelector('.buttons').classList.add('hidden');
    setAskText("Yayy!! I love you Suhani! ")
    setEmojiAsk('\u{1F60D}');
    setYesOrNow("Yes");
  }

  return (
    <div className='message-sending-body flex items-center flex-col w-full h-full bg-transparent bg-gradient-to-tr from-[#F56217] to-[#0B486B] min-h-screen gap-6 sm:gap-20'>
      <div className="animation w-fit h-fit">
        <div className="wait-animation pointer-events-none">
          <Lottie
            animationData={boyLookingToBeAcceptedFile}
            loop={true}
            autoplay={true}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div className='cry-animation-1 pointer-events-none hidden'>
          <Lottie
            animationData={cryingBoyAnimationFile_1}
            loop={true}
            autoplay={true}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div className='cry-animation-2 pointer-events-none hidden'>
          <Lottie
            animationData={cryingBoyAnimationFile_2}
            loop={true}
            autoplay={true}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div className='doesnt-matter-animation pointer-events-none hidden'>
          <Lottie
            animationData={doesntMatterAnimationFile}
            loop={true}
            autoplay={true}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div className='accept-animation pointer-events-none hidden'>
          <Lottie
            animationData={acceptAnimationFile}
            loop={true}
            autoplay={true}
            style={{ height: 300, width: 300 }}
          />
        </div>
      </div>
      <div className="ask-convey px-4 flex flex-col flex-wrap items-center gap-3 sm:gap-7">
        <div className='convey h-fit w-fit text-transparent bg-clip-text  bg-gradient-to-t from-[#962820] to-[#111125] sm:text-4xl text-center select-none'>In a world brimming with over 3.95 billion extraordinary souls, you Suhani, stand out to me as the most beautiful and charming of them all.</div>
        <div className='ask-text w-fit h-fit flex flex-col gap-3 sm:gap-16 items-center'>
          <div
            className="ask text-2xl text-center sm:text-4xl select-none">
            {askText} <span>{emojiAsk}</span>
          </div>
          <div className="buttons flex flex-row flex-wrap gap-16 mb-2 items-center justify-center">
            <button
              className='Yes w-fit h-fit'
              onClick={handleYesClick}
            >
              <div className="button-yes button-text px-7 py-3 border-2 rounded-xl text-xl bg-transparent bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-gray-200 shadow-xl shadow-pink-500 hover:scale-110 active:scale-90 duration-200">
                Yes
              </div>
            </button>
            <button
              className='No w-fit h-fit rotate-[14deg] duration-300'
              onClick={handleNoClick}
            >
              <div className="button-no button-text px-7 py-3 border-2 rounded-xl text-xl bg-transparent bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-gray-200 shadow-xl shadow-pink-500 hover:scale-110 active:scale-90 duration-200">
                No
              </div>
            </button>
          </div>
          {yesOrNow === "Yes" ? <Link to="/endpage" className="button-text px-7 py-3 border-2 rounded-xl text-xl bg-transparent bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-gray-200 shadow-xl shadow-pink-500 hover:scale-110 active:scale-90 duration-200 no-underline mt-4">See your surprise</Link> : null}
        </div>
      </div>
      <Link to="/destroy" className="destroy-link hidden pointer-events-none select-none"></Link>
    </div>
  )
};
