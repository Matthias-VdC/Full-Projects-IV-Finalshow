import { useNavigate } from 'react-router-dom';

function BackArrow() {

    const navigate = useNavigate();
    return (
        <div className='backarrow' onClick={() => navigate(-1)}>Testing</div>
    )
}

export default BackArrow