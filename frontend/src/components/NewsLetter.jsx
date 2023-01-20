import SendIcon from '@mui/icons-material/Send';

function NewsLetter() {
  return (
    <div>
        <div className="newsletter-container h-60 bg-slate-100 flex items-center justify-center flex-col">
        <div className="newsletter-title mb-10">
            <h1 className='text-5xl'>Newsletter</h1>
        </div>
        <div className="description-title">
            <p className='text-2x1 font-light mb-10'>Get timely updates from your favourite products</p>
        </div>
        <div className="input-container flex w-30% h-10 bg-white justify-between border-2">
            <input
            placeholder='Your email'
            className='outline-none flex-8 pl-5 max-sm:-ml-10'
            />
            <button>
                <SendIcon/>
            </button>
        </div>
    </div>
    </div>
  )
}

export default NewsLetter;