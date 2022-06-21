
import { useNavigate } from 'react-router-dom';

/**
 * It's a function that returns a div with a className of 'backarrow' and an onClick event that calls
 * the navigate function from the useNavigate hook and passes it a -1 argument
 * @returns A div with a className of 'backarrow' and an onClick event that navigates to the previous
 * page.
 */

function BackArrow() {

    const navigate = useNavigate();
    return (
        <div className='backarrow' onClick={() => navigate(-1)}></div>
    )
}

export default BackArrow