import { useContext } from 'react'
import { FetchContext } from '../../src/utils/context/contextApi'


function FetchButton() {

    const { toggleFetch, fetch } = useContext(FetchContext)

    return (
        <div className='fetchButton'>
            <button onClick={() => toggleFetch()}>
                {fetch === 'api' ? 'api' : 'mockée'}
            </button>
        </div>
    );
}

export default FetchButton;