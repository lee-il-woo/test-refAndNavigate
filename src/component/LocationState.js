import { useLocation, useNavigate } from 'react-router-dom';
import './LocationState.css'
function LocationState(){
    const location = useLocation();
    const navigate = useNavigate()
    return(
        <div className='LocationState'>
        <div>로케이션 스테이트 입니다.</div>
        <div>id: {location.state.id}</div>
        <div>value: {location.state.value}</div>
        <div onClick={()=>{navigate(-1)}}>뒤로가기</div>
        <button onClick={()=>{navigate('/',{replace:true})}}>홈으로</button>
        </div>
    )
}

export default LocationState