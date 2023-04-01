import { useNavigate } from "react-router-dom"
import './RoteNavigate.css'
function RoteNavigate(){
    const navigate = useNavigate()
    return(
        <div className="RoteNavigate">
        <div>라우트 네비게이트입니다.</div>
        <div onClick={()=>navigate('/')}>'/'로 가기</div>
        <div onClick={()=>navigate(-1)}>뒤로가기</div>
        <div onClick={()=>navigate('/location',{state:{id:1,value:'넘겨진 값'}})}>location으로 가기</div>
        </div>
    )
}

export default RoteNavigate