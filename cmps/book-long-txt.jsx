
export function LongTxt({ text, isLongTxtShown, onSetTxtShown }) {

    return <div className="long-txt">
        <article>{(isLongTxtShown) ? text : text.slice(0, 100).trim() + ((text.length > 100) ? '...' : '')}</article>
        {(text.length > 100) && <span className='btn' onClick={onSetTxtShown}>{isLongTxtShown ? 'show less' : 'show more'}</span>}

    </div>
}

